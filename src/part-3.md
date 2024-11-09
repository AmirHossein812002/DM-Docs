# Phase 3 Analysis

## Missing Data Imputation

This code fills missing values in various columns using methods like mean, median, and regression, ensuring consistency for analysis.

### Steps for Filling Missing Data

1. **Check for Genre Column**:
   - If `genres` is missing, defaults to `genre` for compatibility.

2. **Dropping Rows with Essential Missing Data**:
   - **Action**: Removes rows missing `title`, `original_title`, or `release_date`.
   - **Reason**: These fields are critical identifiers, so incomplete entries are dropped.

3. **Filling Non-Essential Fields with Placeholders**:
   - **Details**:
     - `homepage`, `backdrop_path`, `poster_path` → "Not Available"
     - `imdb_id` → "Unknown"
     - `overview` → "No Description"
     - `tagline` → "No Tagline"
   - **Purpose**: Ensures consistency in optional fields without affecting key data.

4. **Filling Categorical Fields with 'Unknown'**:
   - Fields like `production_countries`, `production_companies`, and `spoken_languages` are assigned `"Unknown"` or `"Not Specified"` to avoid nulls.

5. **Imputing `vote_average` with Regression**:
   - **Method**: Uses `RandomForestRegressor` to predict missing `vote_average` values from `revenue`, `runtime`, `popularity`, and `vote_count`.
   - **Purpose**: Data-driven predictions improve accuracy for this important rating metric.

6. **Conditional Medians for `budget` and `revenue`**:
   - **Process**: Uses genre and runtime-specific medians to fill zero `budget` and `revenue` values. Remaining zeros are replaced with the overall median.
   - **Purpose**: Context-specific imputation adds accuracy for financial fields.

### Conclusion

This imputation strategy creates a reliable, consistent dataset through:
- Placeholders for non-essential fields,
- Regression predictions for `vote_average`,
- Conditional medians for `budget` and `revenue` based on genre and runtime.

These steps clean the dataset, making it ready for dependable analysis.

## Data Normalization

This task normalizes the numerical features `vote_average`, `runtime`, and `popularity` to a consistent scale, crucial for analyses that require feature scaling.

### Normalization Process

1. **Selected Features**:
   - Chosen columns are `vote_average`, `runtime`, and `popularity` as they benefit from uniform scaling.

2. **Min-Max Scaling**:
   - **Tool**: MinMaxScaler from `sklearn.preprocessing`.
   - **Purpose**: Scales each feature to the range [0, 1], transforming values proportionally within this range.
   - **Process**: The scaler is applied to replace the original values, making them consistent across the DataFrame.

3. **Result**:
   - The table below shows the normalized values, each ranging from 0 to 1.

| Index | vote_average | runtime  | popularity |
| ----- | ------------ | -------- | ---------- |
| 0     | 0.781263     | 0.025538 | 0.106341   |
| 1     | 0.784105     | 0.025806 | 0.090162   |
| 2     | 0.770947     | 0.026882 | 0.054965   |
| ...   | ...          | ...      | ...        |
| 51940 | 0.558171     | 0.000000 | 0.000595   |
| 51941 | 0.561053     | 0.016129 | 0.002509   |
| 51942 | 0.606316     | 0.005914 | 0.001935   |
| 51943 | 0.587833     | 0.003226 | 0.000595   |
| 51944 | 0.642756     | 0.002688 | 0.000595   |

### Conclusion

This normalization process ensures the dataset is ready for further analysis, with features scaled consistently to enhance reliability.

## Outliers Removal

This process identifies and removes outliers to improve data reliability by reducing extreme values that may skew analysis results.

### Steps for Outlier Detection and Removal

1. **Initial Row Count**:
   - Starting count: 49,807 rows.

2. **Outlier Detection Using IQR**:
   - **Method**: Interquartile Range (IQR).
     - Calculates Q1 and Q3 for each column and sets bounds for outliers as values outside `Q1 - 1.5 * IQR` or `Q3 + 1.5 * IQR`.
   - **Excluded Columns**: Columns like `budget`, `revenue`, `vote_count`, and `popularity` are not adjusted to keep natural variation.

3. **Outlier Removal**:
   - Outliers found in numeric columns are removed:
     - **`vote_average`**: 3,603 outliers removed.
     - **`runtime`**: 8,155 outliers removed.
   - Total rows removed: 11,758, leaving 38,049 rows.

4. **Final Check**:
   - No remaining outliers, confirming successful cleanup.

### Summary of Outlier Removal

| Column         | Outliers Removed |
| -------------- | ---------------- |
| `vote_average` | 3,603            |
| `runtime`      | 8,155            |

### Benefits

Removing outliers improves data quality by reducing distortion from extreme values, leading to more reliable results in future analyses.

## Creation of New Features

This task generated new features by transforming and combining existing columns to gain deeper insights into the dataset.

### New Features Created

1. **Revenue-to-Budget Ratio (`revenue_to_budget_ratio`)**:
   - **Definition**: Ratio of revenue to budget, showing a movie's profitability.
   - **Purpose**: Highlights how much revenue was generated per dollar of budget.

2. **Release Decade (`release_decade`)**:
   - **Definition**: Decade of release, derived from the release date.
   - **Purpose**: Simplifies analysis of trends over time.

3. **Popularity-to-Vote Ratio (`popularity_to_vote_ratio`)**:
   - **Definition**: Ratio of popularity to vote count.
   - **Purpose**: Emphasizes movies with high popularity relative to their votes, showing cultural impact.

4. **Log Budget (`log_budget`)**:
   - **Definition**: Natural logarithm of budget.
   - **Purpose**: Normalizes budget values, making comparisons more consistent.

5. **Log Revenue (`log_revenue`)**:
   - **Definition**: Natural logarithm of revenue.
   - **Purpose**: Reduces revenue skew, improving analysis.

### Preview of New Features

| Title                                      | Release Date | Revenue       | Budget     | Revenue-to-Budget Ratio | Release Decade | Popularity-to-Vote Ratio | Log Budget | Log Revenue |
| ------------------------------------------ | ------------ | ------------- | ---------- | ----------------------- | -------------- | ------------------------ | ---------- | ----------- |
| Frozen Fever                               | 2015-03-09   | 144,327,371   | 50,000,000 | 2.89                    | 2010           | 1.14e-05                 | 17.73      | 18.79       |
| Paperman                                   | 2012-11-02   | 30,695.5      | 8,000      | 3.84                    | 2010           | 9.76e-06                 | 8.99       | 10.33       |
| Piper                                      | 2016-06-16   | 4,078,230     | 3,300,000  | 1.24                    | 2010           | 6.28e-06                 | 15.01      | 15.22       |
| Superman/Shazam!: The Return of Black Adam | 2010-11-16   | 5,155,325     | 1,600,100  | 3.22                    | 2010           | 1.49e-05                 | 14.29      | 15.46       |
| Olaf's Frozen Adventure                    | 2017-10-27   | 516,455,007.5 | 85,000,000 | 6.08                    | 2010           | 1.24e-05                 | 18.26      | 20.06       |

### Column Descriptions

- **`revenue_to_budget_ratio`**: Shows profitability per budget dollar.
- **`release_decade`**: Groups movies by decade for trend analysis.
- **`popularity_to_vote_ratio`**: Highlights movies with high popularity relative to votes.
- **`log_budget`**: Normalized budget for easier comparisons.
- **`log_revenue`**: Normalized revenue for more consistent analysis.

These features provide insights into profitability, popularity, and trends, enhancing the dataset for more detailed analysis.

## Data Conversion

This task transforms the `release_date` column into a simpler, numeric format (`release_year`) to make time-based analysis easier.

### Conversion of `release_date` to `release_year`

1. **Process**:
   - Extracted the year from `release_date` and created a new `release_year` column.
   - **Purpose**: Simplifies year-based analysis, making it easier to spot trends over time.

2. **Result**:
   - The DataFrame now includes `release_year`, a clear numeric view of each movie’s release year.
   - **Preview**:

   | release_date | release_year |
   | ------------ | ------------ |
   | 2015-03-09   | 2015         |
   | 2012-11-02   | 2012         |
   | 2016-06-16   | 2016         |
   | 2010-11-16   | 2010         |
   | 2017-10-27   | 2017         |

3. **Benefits**:
   - **Simplified Analysis**: The `release_year` column enables easy grouping by year or decade.
   - **Enhanced Insights**: Helps quickly observe time-based trends.

This conversion makes the dataset better suited for time-based insights, turning complex date data into a simple, numeric format.

## Categorical Data Conversion

This analysis categorizes movies by `vote_average`, `budget`, and `revenue` to understand general patterns in audience ratings and financial performance.

### Distribution of Vote Average Categories

Most films are rated in the "Medium" and "High" categories, while fewer films fall into "Very Low" or "Low." This suggests that audiences generally rate films favorably, with high ratings often seen in well-promoted or popular genres.

![alt text](/public/image-35.png)

### Distribution of Budget Categories

The majority of films fall into the "Low Budget" category, with only a few classified as "Medium," "High," or "Very High Budget." This shows that most films are produced on smaller budgets, likely to minimize financial risk. Only major productions tend to have very high budgets.

![alt text](/public/image-8.png)

### Distribution of Revenue Categories

Most films generate "Low Revenue," with many categorized as having "No Revenue," possibly due to missing earnings data or low performance. Only a small number achieve "High" or "Very High Revenue," often associated with blockbusters, indicating that few films see major box office success.

![alt text](/public/image-13.png)

---

In summary, the film industry is dominated by low-budget productions with modest revenues, while only a small number of high-budget films see significant earnings and high ratings.

## Text Preprocessing

To prepare the "overview" text data for analysis, we applied these steps:

1. **Removing Special Characters and Numbers**: Cleansed non-alphabetic characters.
2. **Lowercasing**: Standardized by converting all text to lowercase.
3. **Stopword Removal**: Removed common words, focusing on meaningful terms.
4. **Lemmatizing and Stemming**: Reduced words to their root forms for consistency.

### Original vs. Processed Overview

The table below shows a comparison between original and processed overviews. The processed text retains only key terms, making it concise and focused on each movie’s main themes.

![alt text](/public/image-40.png)

This cleaned text is now ready for analysis tasks like clustering and sentiment analysis, allowing for easier identification of patterns and themes across movies.
