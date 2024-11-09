# Phase 3 Analysis

## Genre-Based Clustering

This analysis groups movies into clusters based on genre characteristics using KMeans clustering. Each cluster represents movies with similar themes, allowing insights into common genre patterns.

### Clustered Genre Distributions Table

| Cluster | Action | Adventure | Animation | Comedy | Crime | Documentary | Drama | Family | Fantasy | History | Horror | Music | Mystery | Romance | Science Fiction | Thriller | Tv Movie | War | Western |
| ------- | ------ | --------- | --------- | ------ | ----- | ----------- | ----- | ------ | ------- | ------- | ------ | ----- | ------- | ------- | --------------- | -------- | -------- | --- | ------- |
| 0       | 84     | 1389      | 3607.0    | 1074.0 | 22    | 9           | 284   | 7214   | 1107    | 56      | 59     | 323   | 105     | 103     | 274             | 7        | 316      | 21  | 33      |
| 1       | 783    | 361       | 1096.5    | 200.5  | 37    | 5           | 254   | 62     | 244     | 11      | 137    | 59    | 53      | 87      | 2193            | 70       | 46       | 69  | 6       |
| 2       | 27     | 5         | 3150.5    | 611.0  | 128   | 0           | 1994  | 1      | 1661    | 294     | 1087   | 1227  | 288     | 588     | 0               | 169      | 186      | 224 | 108     |
| 3       | 1530   | 1778      | 1338.5    | 381.0  | 124   | 5           | 250   | 144    | 870     | 52      | 97     | 40    | 89      | 82      | 60              | 56       | 117      | 27  | 11      |
| 4       | 4      | 6         | 939.0     | 30.0   | 9     | 0           | 1878  | 67     | 58      | 14      | 86     | 13    | 8       | 6       | 13              | 4        | 14       | 27  | 3       |

### Genre Distribution Visualization

![alt text](/public/image-21.png)

The bar chart represents genre distribution across clusters, highlighting dominant genres within each group.

### Cluster Analysis

1. **Cluster 0**:
   - **Focus**: Family and animation, with high counts in `Family` and `Animation`.
   - **Summary**: Likely contains family-friendly and animated films, appealing to a broad audience.

2. **Cluster 1**:
   - **Focus**: Action, sci-fi, and adventure.
   - **Summary**: Likely includes superhero films, sci-fi adventures, and action thrillers for fans of dynamic movies.

3. **Cluster 2**:
   - **Focus**: Horror, music, and unique animated content.
   - **Summary**: Likely consists of niche genres, including horror and musicals, catering to specific tastes.

4. **Cluster 3**:
   - **Focus**: Adventure, action, and comedy.
   - **Summary**: Mainstream movies with a mix of action and humor, likely popular blockbusters.

5. **Cluster 4**:
   - **Focus**: Drama and history.
   - **Summary**: Likely includes serious dramas and historical films, appealing to mature audiences.

### Recommendations

- **Content Categorization**: Use clusters for better genre-based recommendations, e.g., Cluster 0 for family films, Cluster 1 for action/sci-fi.
- **Targeted Marketing**: Market Cluster 1 and 3 to action/adventure audiences, and Cluster 4 to drama/history viewers.
- **Further Refinement**: Consider adding movie runtime, popularity, and ratings to enhance clustering insights.

### Summary

The table and chart illustrate the distinct focus of each cluster:

- **Cluster 0**: Family and animation.
- **Cluster 1**: Action and sci-fi.
- **Cluster 2**: Niche genres, like horror and music.
- **Cluster 3**: Popular mainstream genres with action and comedy.
- **Cluster 4**: Drama, with a mature, serious tone.

These clusters offer a structured view of genre preferences, aiding in understanding audience tastes within the dataset.

## Decade-Based Clustering

This analysis categorizes movies by their release decade, providing insights into trends in movie production over time.

### Decade Distribution Table and Visualization

![alt text](/public/image-22.png)

The table and bar chart above show the number of movies released per decade, highlighting the growth in movie production, especially from the 20th century onward.

| Release Decade | Movie Count |
| -------------- | ----------- |
| 1870           | 25          |
| 1880           | 1           |
| 1890           | 9           |
| 1900           | 45          |
| 1910           | 269         |
| 1920           | 965         |
| 1930           | 2153        |
| 1940           | 1871        |
| 1950           | 1909        |
| 1960           | 2185        |
| 1970           | 2658        |
| 1980           | 3595        |
| 1990           | 4224        |
| 2000           | 6803        |
| 2010           | 13760       |
| 2020           | 9336        |

### Analysis of Decade Clustering

1. **Early Decades (1870–1920)**:
   - **Observations**: Limited output as the industry was in its infancy.
   - **Insights**: Reflects cinema’s experimental phase and technological beginnings.

2. **Growth Phase (1930–1960)**:
   - **Observations**: Production flourished during Hollywood’s Golden Age, with each decade producing over 2000 films.
   - **Insights**: Driven by advancements in film technology and increased audience demand.

3. **Modernization and Expansion (1970–1990)**:
   - **Observations**: Production steadily increased, with the 1990s reaching over 4000 films.
   - **Insights**: Growth fueled by new genres, special effects, and home video’s influence.

4. **Digital Era (2000–2020)**:
   - **Observations**: A dramatic increase in production, with nearly 14,000 films in the 2010s. The slight dip in the 2020s may reflect external factors like the pandemic.
   - **Insights**: Driven by digital filmmaking, global streaming, and the rise of independent films.

### Visual Summary

The chart titled "Number of Movies Released per Decade" visually emphasizes key takeaways:

- **Golden Age Growth**: The steady rise from the 1930s to the 1960s established cinema as a central entertainment form.
- **Expansion in Modern Cinema**: Growth from the 1970s onward reflects technological and distribution advances.
- **Digital Boom**: The 21st-century surge highlights digital technology’s impact and online streaming’s influence.

This analysis shows how movie production has evolved with cultural and technological shifts, marking each decade’s unique contributions to cinema.

## Score-Based Clustering

This analysis categorizes movies into three clusters based on their average vote score (`vote_average`), identifying groups of low, medium, and high-rated films.

### Score Cluster Distribution Visualization

![alt text](/public/image-23.png)

The bar chart shows the number of movies in each score cluster, with their corresponding score ranges.

| Cluster | Score Range | Movie Count |
| ------- | ----------- | ----------- |
| 0       | 4.8 - 7.5   | 14,496      |
| 1       | 0.5 - 4.8   | 2,595       |
| 2       | 7.5 - 10.0  | 4,065       |

### Analysis of Score Clusters

1. **Cluster 0 (Medium Score: 4.8 - 7.5)**:
   - **Observations**: Most movies fall into this category, with moderate scores.
   - **Insights**: Represents average-rated movies, likely including popular films that appeal to niche or mainstream audiences without critical acclaim.

2. **Cluster 1 (Low Score: 0.5 - 4.8)**:
   - **Observations**: Contains a smaller set of 2,595 low-rated movies.
   - **Insights**: Likely includes films that were less successful with audiences, possibly due to limited appeal, lower production quality, or niche content.

3. **Cluster 2 (High Score: 7.5 - 10.0)**:
   - **Observations**: Comprises 4,065 high-rated movies.
   - **Insights**: Includes critically acclaimed or popular films with high audience ratings, often characterized by quality production or strong storytelling.

### Summary

The score clustering reveals three main categories:

- **Average-Rated Films** (Cluster 0) make up the majority, showing most films receive moderate ratings.
- **Low-Rated Films** (Cluster 1) form a smaller group of less popular movies.
- **High-Rated Films** (Cluster 2) represent highly rated, well-received films.

This clustering helps us understand the general distribution of movie ratings, providing insight into viewer preferences and overall film reception within the dataset.

## Movie Success

This analysis explores how a movie's budget relates to its popularity, assessing trends that may indicate financial success. By plotting budget against popularity on a log scale, we aim to uncover patterns showing how budget levels impact popularity.

### Budget vs. Popularity Scatter Plot (Limited Range)

![alt text](/public/image-24.png)

The scatter plot displays `budget` and `popularity` on a logarithmic scale, focusing on movies within the 75th percentile for budget and the 90th percentile for popularity. This range excludes extreme values to provide a clearer view of general trends.

### Analysis

1. **General Pattern**:
   - **Observations**: Low-budget movies cluster around low popularity levels, while higher budgets align with a broader range of popularity.
   - **Insights**: A large budget doesn’t guarantee popularity but does allow for a wider reach. Low-budget films tend to have limited popularity, possibly due to constraints in production and marketing.

2. **High-Budget Movies**:
   - **Observations**: High-budget movies (right side) show a wide spread in popularity, from low to high.
   - **Insights**: High budgets offer the potential for popularity, though success varies significantly. This spread could reflect differences in audience appeal, marketing, and film quality.

3. **Low- to Mid-Budget Movies**:
   - **Observations**: Low- and mid-budget films mostly cluster at low popularity levels.
   - **Insights**: Limited budgets often lead to limited popularity, likely due to smaller promotional efforts. While successful in niche markets, these films generally lack the broad reach of high-budget films.

4. **Log Scale Benefits**:
   - The log scale helps visualize differences in popularity across a wide budget range, revealing patterns that a linear scale might obscure.

### Summary

This analysis suggests that:

- **Higher budgets offer the potential for greater popularity**, though success is not assured.
- **Low-budget movies tend to have limited popularity**, which may be due to constraints in production and marketing resources.
- **Logarithmic scaling** clarifies the budget-popularity relationship, showing how larger budgets can broaden potential reach without guaranteeing high popularity.

These insights could guide budget strategies, highlighting that while a larger budget can expand reach, it doesn’t necessarily ensure popularity or financial success.

## Missing Data Imputation

This code applies different techniques to fill missing values in various columns, such as mean, median, and regression, ensuring the dataset is consistent and suitable for analysis.

### Steps for Filling Missing Data

1. **Column Check for Genre**:
   - Checks if `genres` exists, defaulting to `genre` if not. This ensures compatibility across datasets with slight column name variations.

2. **Dropping Essential Missing Rows**:
   - **Operation**: Removes rows missing `title`, `original_title`, or `release_date`.
   - **Rationale**: These fields are essential identifiers, so records without them are excluded to maintain data integrity.

3. **Filling Non-Essential Fields with Placeholders**:
   - **Details**:
     - `homepage`, `backdrop_path`, `poster_path` → "Not Available"
     - `imdb_id` → "Unknown"
     - `overview` → "No Description"
     - `tagline` → "No Tagline"
   - **Purpose**: Adds placeholder text to ensure consistency without affecting critical data analysis.

4. **Filling Categorical Fields with 'Unknown'**:
   - Categorical fields like `production_countries`, `production_companies`, and `spoken_languages` are assigned `"Unknown"` or `"Not Specified"`.
   - **Purpose**: Prevents null values in categorical data, simplifying further analysis.

5. **Imputing `vote_average` Using Regression**:
   - **Method**: Uses a `RandomForestRegressor` to predict missing `vote_average` values based on `revenue`, `runtime`, `popularity`, and `vote_count`.
   - **Rationale**: Provides an informed prediction using related features, enhancing data accuracy for this critical metric.

6. **Conditional Medians for `budget` and `revenue` by Genre and Runtime**:
   - **Approach**: Calculates conditional medians for `budget` and `revenue` by genre and runtime bins.
   - **Process**:
     - Median values for each genre-runtime pair fill zero `budget` and `revenue` entries.
     - Any remaining zeros are replaced with the overall median.
   - **Purpose**: Context-specific imputation using genre and runtime ensures more accurate values, preserving data integrity.

### Summary

This imputation approach ensures a consistent and reliable dataset through:

- **Placeholders** for non-essential fields to maintain uniformity.
- **Regression-based estimates** for `vote_average`, adding data-driven precision.
- **Genre-runtime conditional medians** for `budget` and `revenue`, filling gaps contextually and improving data quality.

This strategy makes the dataset cleaner and more complete, supporting dependable analysis by using both placeholders and informed estimates for missing data.

## Data Normalization

This task involves normalizing the numerical features `vote_average`, `runtime`, and `popularity` to place them on a consistent scale, which is essential for analyses and models sensitive to feature scaling.

### Normalization Process

1. **Selection of Features**:
   - The chosen columns for normalization are `vote_average`, `runtime`, and `popularity`, as these continuous values benefit from being scaled to a uniform range.

2. **Min-Max Scaling**:
   - **Scaler Used**: MinMaxScaler from `sklearn.preprocessing`.
   - **Purpose**: MinMaxScaler transforms each feature to a specified range, typically [0, 1]. This is done by rescaling values of each feature individually within this range.
   - **Process**:
     - The scaler is applied to the selected columns, replacing original values with normalized ones, ensuring consistency across the DataFrame.

3. **Resulting Data**:
   - The table below displays the normalized values for `vote_average`, `runtime`, and `popularity`, each now ranging from 0 to 1.

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

### Summary

Normalization prepares the dataset for analysis by ensuring consistent feature scaling, which is critical for robust and accurate results in subsequent tasks.

## Outliers Removal

This code identifies and removes outliers from the dataset to improve data reliability by reducing skewed data points that could impact analysis.

### Steps for Outlier Detection and Removal

1. **Initial Row Count**:
   - **Count**: The dataset starts with 49,807 rows.

2. **Outlier Detection Using IQR**:
   - **Method**: Uses the Interquartile Range (IQR) method.
     - **IQR Calculation**: Calculates Q1 (25th percentile) and Q3 (75th percentile) for each column to define the IQR.
     - **Outlier Bounds**: Outliers are values outside `Q1 - 1.5 * IQR` or `Q3 + 1.5 * IQR`.
   - **Excluded Columns**: `budget`, `revenue`, `vote_count`, and `popularity` are excluded to keep the natural variability in these fields.

3. **Outlier Removal**:
   - Outliers identified in numeric columns (excluding those specified) are removed.
   - **Outliers Removed**:
     - `vote_average`: 3,603 outliers removed.
     - `runtime`: 8,155 outliers removed.
   - **Total Rows Removed**: 11,758 rows, reducing the dataset to 38,049 rows.

4. **Final Verification**:
   - Checks for any remaining outliers after initial removal to confirm data integrity.
   - **Result**: No further outliers, confirming successful removal.

### Summary of Outlier Removal

| Column         | Outliers Removed |
| -------------- | ---------------- |
| `id`           | 0                |
| `vote_average` | 3,603            |
| `runtime`      | 8,155            |

### Benefits of Outlier Removal

- **Enhanced Data Quality**: By removing extreme values, analyses become less prone to distortion from skewed data.
- **Robust Analysis**: Filtering outliers ensures a more stable dataset for models sensitive to extreme values, such as regression and clustering.

This outlier removal process refines the dataset, making it more accurate for future analyses.

## Creation of New Features

This task involved generating additional features by transforming and combining existing columns to provide deeper insights into the dataset.

### New Features Created

1. **Revenue-to-Budget Ratio (`revenue_to_budget_ratio`)**:
   - **Definition**: The ratio of revenue to budget, indicating a movie's profitability.
   - **Purpose**: A higher ratio shows higher profitability relative to the movie's budget.

2. **Release Decade (`release_decade`)**:
   - **Definition**: The decade a movie was released, derived from its release date.
   - **Purpose**: Helps in analyzing trends in the film industry by decade.

3. **Popularity-to-Vote Ratio (`popularity_to_vote_ratio`)**:
   - **Definition**: The ratio of popularity to the number of votes.
   - **Purpose**: Highlights movies that have high popularity relative to their vote count, useful for identifying culturally impactful movies with fewer votes.

4. **Log Transformation of Budget (`log_budget`)**:
   - **Definition**: The natural logarithm of the budget.
   - **Purpose**: Normalizes the data by reducing the impact of extreme values, making it easier to compare movies with widely different budgets.

5. **Log Transformation of Revenue (`log_revenue`)**:
   - **Definition**: The natural logarithm of revenue.
   - **Purpose**: Similar to `log_budget`, this transformation makes revenue comparisons more meaningful by reducing skewness.

### Preview of the New Features

| Title                                      | Release Date | Revenue       | Budget     | Revenue-to-Budget Ratio | Release Decade | Popularity-to-Vote Ratio | Log Budget | Log Revenue |
| ------------------------------------------ | ------------ | ------------- | ---------- | ----------------------- | -------------- | ------------------------ | ---------- | ----------- |
| Frozen Fever                               | 2015-03-09   | 144,327,371   | 50,000,000 | 2.89                    | 2010           | 1.14e-05                 | 17.73      | 18.79       |
| Paperman                                   | 2012-11-02   | 30,695.5      | 8,000      | 3.84                    | 2010           | 9.76e-06                 | 8.99       | 10.33       |
| Piper                                      | 2016-06-16   | 4,078,230     | 3,300,000  | 1.24                    | 2010           | 6.28e-06                 | 15.01      | 15.22       |
| Superman/Shazam!: The Return of Black Adam | 2010-11-16   | 5,155,325     | 1,600,100  | 3.22                    | 2010           | 1.49e-05                 | 14.29      | 15.46       |
| Olaf's Frozen Adventure                    | 2017-10-27   | 516,455,007.5 | 85,000,000 | 6.08                    | 2010           | 1.24e-05                 | 18.26      | 20.06       |

### Descriptions of New Columns

- **`revenue_to_budget_ratio`**: Indicates the profitability of a movie based on how much revenue it generated per dollar of budget.
- **`release_decade`**: Groups movies by decade, simplifying analysis of trends over time.
- **`popularity_to_vote_ratio`**: Shows movies with high popularity relative to votes, emphasizing their cultural impact.
- **`log_budget`**: Log transformation of budget for normalized budget comparisons.
- **`log_revenue`**: Log transformation of revenue, normalizing it for consistent analysis.

These new features add valuable layers of analysis, providing insights into profitability, popularity, and historical trends across the dataset.

## Data Conversion

This task involves transforming the `release_date` column into a simpler, numeric format to facilitate time-based analysis.

### Conversion of `release_date` to `release_year`

1. **Conversion Process**:

   - The `release_date` column, initially in datetime format, was converted to a numeric `release_year` column by extracting only the year.
   - **Purpose**: Converting the release date to a single year simplifies year-based analyses, making it easier to examine trends over time.

2. **Result**:

   - A new column, `release_year`, is now part of the DataFrame, providing a clearer and more manageable view of release timelines.
   - **Preview**:

   | release_date | release_year |
   | ------------ | ------------ |
   | 2015-03-09   | 2015         |
   | 2012-11-02   | 2012         |
   | 2016-06-16   | 2016         |
   | 2010-11-16   | 2010         |
   | 2017-10-27   | 2017         |

3. **Benefits of Conversion**:
   - **Simplified Analysis**: The `release_year` column makes it easy to perform time-based grouping and analysis.
   - **Enhanced Temporal Insights**: The new format allows for easier trend analysis and decade-based groupings.

This conversion optimizes the dataset for time-related insights by transforming complex date data into a simple, numeric format.

## Categorical Data Conversion

### Distribution of Vote Average Categories

The distribution of vote averages shows that most films fall into the "Medium" and "High" categories, with fewer films rated as "Very Low" or "Low." This pattern indicates generally positive audience feedback, with only a small subset of films receiving low ratings. Higher ratings may often be associated with well-received genres, sequels, or films backed by strong marketing, which tend to attract more favorable votes.

![alt text](/public/image-35.png)

### Distribution of Budget Categories

The budget distribution is heavily skewed towards the "Low Budget" category, with fewer films classified as "Medium," "High," or "Very High" budget. This suggests that most productions are low-cost, likely due to the high financial risk associated with larger budgets. Only a few films fall under the "Very High Budget" category, typically associated with major studios and franchises aiming for wide-scale releases.

![alt text](/public/image-8.png)

### Distribution of Revenue Categories

The revenue distribution reveals that most films generate "Low Revenue," with a notable number listed under "No Revenue," potentially indicating either missing earnings data or financial underperformance. Only a small percentage achieve "High" or "Very High Revenue," generally linked to popular or blockbuster releases, underscoring the competitive nature of the industry where only select films achieve substantial box office success.

![alt text](/public/image-13.png)

---

This analysis underscores the industry's budget and revenue dynamics: most films operate on limited budgets and generate modest earnings, while only a select few high-budget productions reach significant revenue and attract high audience ratings.

## Text Preprocessing

To enhance the text data in the "overview" column for analysis, we applied the following preprocessing steps:

1. **Removing Special Characters and Numbers**: Cleansed the text by eliminating non-alphabetic characters.
2. **Lowercasing**: Converted all text to lowercase for standardization.
3. **Stopword Removal**: Removed common stopwords, keeping only meaningful words.
4. **Lemmatizing and Stemming**: Reduced words to their root forms, focusing on essential meanings and minimizing variations.

### Comparison: Original vs. Processed Overview

Below is a table comparing the original overviews with their processed versions after applying these steps. The processed text is now more concise, containing only key terms that capture each movie’s main themes without unnecessary words.

![alt text](/public/image-40.png)

The processed overview text is now better suited for tasks like text analysis, clustering, and sentiment analysis, enabling a clearer understanding of patterns and themes across movies.
