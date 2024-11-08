# Phase 3 Analysis

## Genre-Based Clustering

This analysis categorizes movies into clusters based on genre characteristics. By applying KMeans clustering on the genre data, movies with similar themes and genres are grouped together, allowing for insights into common genre patterns within the dataset.

### Clustered Genre Distributions Table

| Cluster | Action | Adventure | Animation | Comedy | Crime | Documentary | Drama | Family | Fantasy | History | Horror | Music | Mystery | Romance | Science Fiction | Thriller | Tv Movie | War | Western |
| ------- | ------ | --------- | --------- | ------ | ----- | ----------- | ----- | ------ | ------- | ------- | ------ | ----- | ------- | ------- | --------------- | -------- | -------- | --- | ------- |
| 0       | 84     | 1389      | 3607.0    | 1074.0 | 22    | 9           | 284   | 7214   | 1107    | 56      | 59     | 323   | 105     | 103     | 274             | 7        | 316      | 21  | 33      |
| 1       | 783    | 361       | 1096.5    | 200.5  | 37    | 5           | 254   | 62     | 244     | 11      | 137    | 59    | 53      | 87      | 2193            | 70       | 46       | 69  | 6       |
| 2       | 27     | 5         | 3150.5    | 611.0  | 128   | 0           | 1994  | 1      | 1661    | 294     | 1087   | 1227  | 288     | 588     | 0               | 169      | 186      | 224 | 108     |
| 3       | 1530   | 1778      | 1338.5    | 381.0  | 124   | 5           | 250   | 144    | 870     | 52      | 97     | 40    | 89      | 82      | 60              | 56       | 117      | 27  | 11      |
| 4       | 4      | 6         | 939.0     | 30.0   | 9     | 0           | 1878  | 67     | 58      | 14      | 86     | 13    | 8       | 6       | 13              | 4        | 14       | 27  | 3       |

### Genre Distribution Visualization

![alt text](image-21.png)

The bar chart above represents the genre distribution across the five clusters, visually emphasizing the dominant genres within each cluster.

### Full Analysis of Clusters

1. **Cluster 0**:

   - **Table Insights**: This cluster has high counts in `Animation` and `Family`, indicating a focus on family-oriented animated films. Other notable genres include `Fantasy`, `Comedy`, and `Adventure`.
   - **Visualization Insights**: The bar for Cluster 0 highlights the dominance of `Family` and `Animation`, confirming its orientation towards family-friendly and animated content.
   - **Summary**: This cluster likely consists of family-oriented animated movies with broad appeal, possibly including well-known animated series and children’s movies.

2. **Cluster 1**:

   - **Table Insights**: Cluster 1 has a strong representation in `Action`, `Science Fiction`, and `Adventure`, suggesting a focus on high-energy, action-oriented content.
   - **Visualization Insights**: The large sections in `Action`, `Science Fiction`, and `Adventure` in the visualization show that this cluster is predominantly action and sci-fi based, appealing to audiences seeking thrill and excitement.
   - **Summary**: This cluster probably includes superhero films, sci-fi adventures, and action thrillers, appealing to fans of dynamic, adventurous movies.

3. **Cluster 2**:

   - **Table Insights**: Cluster 2 displays a unique genre composition with high counts in `Horror`, `Music`, and `Animation`, indicating a mix of niche horror, musical, and animated films.
   - **Visualization Insights**: The visual representation confirms the diversity in this cluster, with significant portions in `Horror`, `Music`, and `Animation`. This cluster stands out for its focus on more specialized genres.
   - **Summary**: Cluster 2 may contain animated horror films, musicals, and unique fantasy genres, targeting audiences interested in unconventional or niche content.

4. **Cluster 3**:

   - **Table Insights**: Cluster 3 features high counts in `Adventure`, `Action`, and `Comedy`, creating a balanced genre profile that appeals to a broad audience.
   - **Visualization Insights**: The visual shows a substantial presence of `Adventure` and `Action`, supported by `Comedy`. This cluster includes mainstream, high-adventure movies with a mix of humor.
   - **Summary**: Likely to include blockbuster action-comedies and adventure films, Cluster 3 caters to general audiences seeking entertaining and accessible movies.

5. **Cluster 4**:
   - **Table Insights**: Dominated by `Drama`, with moderate representation in `Family`, `Fantasy`, and `History`, Cluster 4 is focused on more serious, mature genres.
   - **Visualization Insights**: The visualization highlights the dominance of `Drama`, indicating that this cluster is centered around dramatic and potentially historical content.
   - **Summary**: This cluster is likely to feature biographical, historical dramas, and mature family stories, catering to audiences with a taste for serious, thought-provoking films.

### Recommendations

- **Content Categorization**: Use clusters to better categorize movies in recommendation systems or streaming platforms. For instance, Cluster 0 (Family & Animation) and Cluster 1 (Action & Sci-Fi) can be used to provide specific genre-based recommendations.
- **Targeted Marketing**: Clusters like Cluster 1 and Cluster 3 appeal to action and adventure audiences, while Cluster 4 can be marketed towards viewers interested in dramas or historical content.
- **Further Refinement**: For a deeper understanding of movie characteristics, consider incorporating additional features such as movie runtime, popularity, and ratings.

### Visual Summary

The combination of the table and bar chart effectively highlights the distinctions between clusters:

- **Cluster 0** is focused on family and animated genres.
- **Cluster 1** caters to action and sci-fi fans.
- **Cluster 2** has a unique mix, with a significant focus on horror and music.
- **Cluster 3** appeals to a mainstream audience with adventure, action, and comedy.
- **Cluster 4** emphasizes drama, with themes that are more mature and introspective.

These clusters provide a structured view of genre groupings, making it easier to understand audience preferences and content characteristics within the dataset.

## Decade-Based Clustering

This analysis categorizes movies by their release decade, providing insights into the distribution of films over time. By grouping movies by the decade of their release, we can observe trends in movie production and identify significant periods in the film industry.

### Decade Distribution Table and Visualization

![alt text](image-22.png)

The table and bar chart above show the number of movies released in each decade. The data reveals a clear trend of growth in movie production over time, with particularly high production rates in the 21st century.

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

   - **Observations**: The film industry had limited output in its earliest decades, with fewer than 1000 movies produced before 1920. This period includes the experimental phase of cinema, where filmmaking was still an emerging art form.
   - **Insights**: The low movie counts reflect the early days of cinema, characterized by technological innovation and experimentation. The increase from the 1910s to the 1920s shows the gradual establishment of the film industry.

2. **Growth Phase (1930–1960)**:

   - **Observations**: Significant growth in movie production occurred from the 1930s to the 1960s, with each decade producing over 2000 films. This period marks the Golden Age of Hollywood, where movie production flourished, and cinema became a central form of entertainment.
   - **Insights**: The rise in production during these decades is associated with advancements in film technology, the establishment of major studios, and increased global demand for cinema.

3. **Modernization and Expansion (1970–1990)**:

   - **Observations**: Movie production continued to grow steadily, reaching over 4000 films by the 1990s. This period saw diversification in genre, the rise of blockbusters, and the influence of global markets on Hollywood.
   - **Insights**: The increase in production during these decades reflects a time of innovation, with the emergence of new genres, special effects, and the influence of television and later home video on the movie industry.

4. **Digital Era (2000–2020)**:
   - **Observations**: From 2000 onwards, movie production experienced a dramatic increase, with the 2010s producing nearly 14,000 films and the 2020s continuing this trend, albeit slightly lower due to possible external factors like the COVID-19 pandemic.
   - **Insights**: The surge in production in the 21st century is attributed to advancements in digital filmmaking, the growth of streaming platforms, and the globalization of cinema. The high production count in the 2010s reflects the ease of digital distribution and the rise of independent films.

### Visual Summary

The bar chart titled "Number of Movies Released per Decade" complements the table, providing a clear visual representation of the exponential growth in movie production over time. Key takeaways include:

- **Steady Growth in the Golden Age**: The increase from the 1930s to the 1960s reflects the establishment of the movie industry as a major entertainment form.
- **Expansion in Modern Cinema**: The jump in production from the 1970s onward shows diversification and the impact of new technologies and distribution channels.
- **Digital Boom**: The sharp rise in the 21st century highlights the impact of digital technology, global distribution, and the emergence of online streaming.

This analysis showcases the evolution of movie production, offering insights into how the film industry has adapted to technological and cultural shifts over the decades.

## Score-Based Clustering

This analysis categorizes movies into three clusters based on their average vote score (`vote_average`). By grouping movies according to their score, we can identify clusters that represent low, medium, and high-rated movies.

### Score Cluster Distribution Visualization

![alt text](image-23.png)

The bar chart above shows the number of movies in each score cluster along with the score range for each cluster.

| Cluster | Score Range | Movie Count |
| ------- | ----------- | ----------- |
| 0       | 4.8 - 7.5   | 14496       |
| 1       | 0.5 - 4.8   | 2595        |
| 2       | 7.5 - 10.0  | 4065        |

### Analysis of Score Clusters

1. **Cluster 0 (Medium Score Range: 4.8 - 7.5)**:

   - **Observations**: Cluster 0 contains the majority of movies, with a total of 14,496 movies that fall within a mid-range score.
   - **Insights**: This cluster likely represents average-rated movies, suggesting that most films in the dataset receive moderate scores from viewers. This range includes a mix of popular but not critically acclaimed films and genre films that resonate with niche audiences.

2. **Cluster 1 (Low Score Range: 0.5 - 4.8)**:

   - **Observations**: This cluster has 2,595 movies with low scores, indicating a smaller subset of films that may have been poorly received.
   - **Insights**: These movies are likely less successful in terms of viewer reception, potentially including experimental, niche, or low-budget films that did not appeal to a broader audience.

3. **Cluster 2 (High Score Range: 7.5 - 10.0)**:
   - **Observations**: Cluster 2 includes 4,065 movies with high scores, indicating a category of well-received, highly-rated films.
   - **Insights**: This cluster likely includes critically acclaimed films, popular blockbusters, and audience favorites. These high-scoring movies are typically characterized by quality production, strong storytelling, or significant viewer appeal.

### Summary

The score-based clustering divides movies into three main categories:

- **Average-Rated Films** (Cluster 0) dominate the dataset, suggesting that most films receive moderate ratings.
- **Low-Rated Films** (Cluster 1) represent a smaller portion of the dataset and may indicate less popular or less successful films.
- **High-Rated Films** (Cluster 2) include well-received movies with high audience and critical ratings, highlighting popular and critically acclaimed content.

This clustering provides insights into the general distribution of movie scores within the dataset, helping to identify trends in viewer preferences and the overall reception of movies.

## Movie Success

This analysis examines the relationship between a movie's budget and its popularity to assess trends that may indicate financial success or lack thereof. By plotting budget against popularity on a logarithmic scale, we aim to identify patterns that reveal how budget influences popularity.

### Budget vs. Popularity Scatter Plot (Limited Range)

![alt text](image-24.png)

In the scatter plot above, budget and popularity are displayed on a log scale to enhance clarity and observe patterns in a more manageable range. The data is limited to movies within the 75th percentile for budget and the 90th percentile for popularity, excluding extreme values that could skew the visualization.

### Analysis

1. **General Pattern**:

   - **Observations**: The plot shows a clustering of movies with low budgets and low popularity on the left side of the graph, while higher budgets tend to align with a wider range of popularity values.
   - **Insights**: A larger budget does not guarantee high popularity, but it allows for a higher potential range in popularity. Movies with smaller budgets typically have limited reach, likely due to lower production and marketing capabilities.

2. **High-Budget Movies**:

   - **Observations**: Towards the right side of the plot (higher budgets), there is a noticeable spread in popularity, ranging from low to high. This suggests that while a high budget can lead to high popularity, it does not necessarily guarantee it.
   - **Insights**: High-budget films have the resources to potentially achieve greater popularity, but success is not assured. This spread may reflect variations in marketing effectiveness, quality of production, and audience reception.

3. **Low- to Mid-Budget Movies**:

   - **Observations**: Most low- and mid-budget movies (left side of the plot) cluster at lower popularity levels. This is particularly evident for movies with budgets under the 75th percentile, where popularity rarely reaches the higher end.
   - **Insights**: Low-budget films generally achieve lower popularity, possibly due to limited distribution and promotional efforts. These films might succeed in niche markets but lack the broad appeal of high-budget movies.

4. **Log Scale Benefits**:
   - Using a log scale helps to visualize variations across wide-ranging budgets and popularity scores, revealing patterns that might be obscured in a linear scale.

### Summary

The analysis reveals that:

- **Higher budgets provide an opportunity** for greater popularity, but success varies widely within this group.
- **Lower-budget movies generally achieve limited popularity**, which may be due to restricted production and promotional resources.
- **Logarithmic scaling** aids in visualizing relationships within large value ranges, offering a clearer view of how budget and popularity interact across different budget levels.

This relationship can help inform decisions on budgeting strategies for films, with the understanding that while a larger budget increases potential reach, it does not ensure popularity or success.

## Missing Data Imputation

This code implements various techniques to fill missing data across multiple columns. Here’s a detailed breakdown of each step, covering different methods like mean, median, and regression for handling missing values.

### Steps for Filling Missing Data

1. **Column Check for Genre**:

   - The code checks if the `genres` column exists. If not, it defaults to `genre`. This is essential for handling datasets with slightly different column names.

2. **Dropping Essential Missing Rows**:

   - **Operation**: Rows missing critical information like `title`, `original_title`, and `release_date` are dropped.
   - **Rationale**: These columns are fundamental identifiers and crucial for analysis, so rows without these values are not useful.

3. **Filling Non-Essential Fields with Default Values**:

   - Columns like `homepage`, `backdrop_path`, `poster_path`, `imdb_id`, `overview`, and `tagline` are filled with placeholder text or default values.
   - **Details**:
     - `homepage`, `backdrop_path`, `poster_path` → "Not Available"
     - `imdb_id` → "Unknown"
     - `overview` → "No Description"
     - `tagline` → "No Tagline"
   - **Purpose**: These fields are often supplementary information. Filling them with placeholders prevents them from being null, ensuring consistency in the dataset.

4. **Filling Categorical Fields with 'Unknown'**:

   - Fields like `production_countries`, `production_companies`, and `spoken_languages` are filled with `"Unknown"` or `"Not Specified"`.
   - **Purpose**: Categorical fields with missing values are assigned a neutral value to avoid issues in analysis and prevent null values.

5. **Step 1: Imputing `vote_average` Using Regression**:

   - **Method**: RandomForestRegressor model to predict missing values in `vote_average`.
   - **Predictors**: `revenue`, `runtime`, `popularity`, `vote_count`.
   - **Process**:
     - The dataset is split into rows with available `vote_average` values for training, and rows with missing values for prediction.
     - The model is trained on existing values and used to fill missing values based on predictors.
   - **Rationale**: Regression provides a data-driven approach to predict missing values using correlated features.

6. **Step 2: Conditional Medians for `budget` Based on Genre and Runtime**:

   - **Approach**: Conditional medians by genre and runtime binning are calculated for the `budget` column, filling missing values with the median for each genre-runtime combination.
   - **Process**:
     - `budget_medians` is a grouped median of `budget` values for each genre and runtime bin.
     - The dataset is iterated over, filling `budget` values where they are zero and runtime falls within a specific bin.
   - **Remaining `budget` Values**: Any remaining zero `budget` values are filled with the overall median of `budget`.
   - **Purpose**: Median values are robust against outliers and provide genre- and runtime-specific imputation, creating a more contextually accurate estimate.

7. **Step 3: Conditional Medians for `revenue` Based on Genre and Runtime**:
   - **Approach**: Similar to `budget`, conditional medians by genre and runtime are calculated for `revenue`, filling missing values based on these categories.
   - **Process**:
     - `revenue_medians` stores genre-runtime grouped medians for `revenue`.
     - The dataset is iterated over, filling missing `revenue` values according to the genre-runtime binning.
   - **Remaining `revenue` Values**: Any remaining zero values in `revenue` are filled with the overall median of `revenue`.
   - **Purpose**: This approach provides a contextual imputation for `revenue`, aligning with genre and runtime to generate more accurate estimates.

### Summary

This imputation strategy provides a multi-faceted approach to handle missing data:

- **Placeholders for Non-Essential Fields**: Ensures consistency by filling in placeholders where values are supplementary but not critical for analysis.
- **Regression for Continuous Variables (`vote_average`)**: Uses regression to predict missing values based on related features, providing a sophisticated estimate for missing ratings.
- **Conditional Medians by Genre and Runtime**: Applies conditional medians for `budget` and `revenue`, providing genre- and runtime-specific estimates that are more reflective of each film category.

This process effectively cleans the dataset, enabling more reliable analysis by filling missing values with informed estimates and maintaining the integrity of essential data.

## Data Normalization

This task involves normalizing the numerical features `vote_average`, `runtime`, and `popularity` to ensure they are on a consistent scale, which is essential for various analyses, especially for models sensitive to feature scaling.

### Normalization Process

1. **Selection of Features**:

   - The columns chosen for normalization are `vote_average`, `runtime`, and `popularity`.
   - These features were selected because they are continuous numerical values that benefit from being scaled to a uniform range.

2. **Min-Max Scaling**:

   - **Scaler Used**: MinMaxScaler from `sklearn.preprocessing`.
   - **Purpose**: MinMaxScaler transforms the data by scaling each feature to a specified range, typically [0, 1]. This is achieved by rescaling the values of each feature individually so that they fit within the 0-1 range.
   - **Process**:
     - The scaler is fit and applied to the selected columns in the DataFrame.
     - The normalized values replace the original values in the DataFrame, maintaining consistency.

3. **Resulting Data**:
   - The table below displays the normalized values for `vote_average`, `runtime`, and `popularity`, with all values now ranging between 0 and 1.

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

### Analysis

- **Benefits of Normalization**:

  - Normalizing `vote_average`, `runtime`, and `popularity` allows for easier comparison and analysis, especially in machine learning models or statistical analyses where feature scaling impacts performance.
  - Features on a 0-1 scale are more suitable for distance-based algorithms (e.g., K-means clustering) and prevent any single feature from disproportionately influencing the results.

- **Observations**:
  - The normalized values retain the relative distribution of the original data but are now scaled within the 0-1 range.
  - Features with a wide range or skewed distribution (like `popularity`) are now easier to interpret and analyze on a comparable scale with other features.

### Summary

This normalization process prepares the dataset for further analysis, enhancing compatibility across various analytical methods by ensuring consistent feature scaling. Normalized data is crucial for robust and accurate analysis in subsequent tasks.

## Outliers Removal

This code aims to identify and remove outliers from the dataset to reduce skewed data points that could impact the accuracy and reliability of analyses.

### Steps for Outlier Detection and Removal

1. **Initial Row Count**:

   - **Initial Count**: The dataset initially contains 49,807 rows before any outlier removal.

2. **Outlier Detection Using IQR**:

   - **Method**: The Interquartile Range (IQR) method is used to identify outliers.
     - **IQR Calculation**: For each column, Q1 (25th percentile) and Q3 (75th percentile) are calculated. The IQR is the difference between Q3 and Q1.
     - **Outlier Bounds**: Data points are considered outliers if they fall below `Q1 - 1.5 * IQR` or above `Q3 + 1.5 * IQR`.
   - **Columns Excluded**: Certain columns (`budget`, `revenue`, `vote_count`, and `popularity`) are excluded from outlier removal to preserve natural variation in these financial and count-based columns.

3. **Outlier Removal**:

   - For each numeric column (excluding the specified columns), values outside the defined bounds are labeled as "Outlier."
   - Rows containing these outlier values are removed from the dataset.
   - **Outlier Counts Per Column**:
     - `id`: 0 outliers removed (no extreme values in this column).
     - `vote_average`: 3,603 outliers removed.
     - `runtime`: 8,155 outliers removed.

4. **Final Row Count**:

   - **After Removal**: The dataset now contains 38,049 rows after removing outliers.
   - This indicates that 11,758 rows were removed in total due to extreme outliers.

5. **Verification of Remaining Outliers**:
   - After the initial removal, the code checks if any outliers remain, potentially due to natural variation.
   - **Result**: No additional outliers were found, confirming that extreme values have been successfully removed.

### Summary of Outlier Removal

| Column         | Outliers Removed |
| -------------- | ---------------- |
| `id`           | 0                |
| `vote_average` | 3,603            |
| `runtime`      | 8,155            |

### Benefits of Outlier Removal

- **Improved Data Quality**: Removing extreme outliers enhances the dataset’s integrity, ensuring that analyses are not overly influenced by skewed values.
- **Robustness in Analysis**: By filtering out unusually high or low values, the dataset becomes more suitable for models that are sensitive to outliers, such as linear regression and clustering.

This outlier removal process has reduced the data's variance, making it more reliable for future analyses.

## Creation of New Features

This task involved generating new features by combining and transforming existing columns to enrich the dataset with additional insights.

### New Features Created

1. **Revenue-to-Budget Ratio (`revenue_to_budget_ratio`)**:

   - **Definition**: The ratio of revenue to budget, indicating the profitability of a movie.
   - **Purpose**: This feature allows us to analyze how profitable each movie was relative to its production budget. A higher ratio indicates a more profitable film.

2. **Release Decade (`release_decade`)**:

   - **Definition**: The decade in which the movie was released, derived from the release date.
   - **Purpose**: Grouping movies by decade enables us to observe trends and patterns in the film industry over time, making it easier to analyze changes in popularity, profitability, and other metrics by era.

3. **Popularity-to-Vote Ratio (`popularity_to_vote_ratio`)**:

   - **Definition**: The ratio of popularity to the number of votes, indicating the relative popularity of a movie.
   - **Purpose**: This metric provides insight into how popular a movie was relative to its vote count, which can highlight movies that are well-regarded despite having fewer votes.

4. **Log Transformation of Budget (`log_budget`)**:

   - **Definition**: The natural logarithm of the budget, used to reduce skewness in budget data.
   - **Purpose**: Log transformation is applied to mitigate the impact of extreme values in budget data, making it easier to compare movies with vastly different budgets on a normalized scale.

5. **Log Transformation of Revenue (`log_revenue`)**:
   - **Definition**: The natural logarithm of the revenue, used to reduce skewness in revenue data.
   - **Purpose**: Similar to `log_budget`, this transformation allows for better analysis by normalizing revenue values, especially when dealing with highly variable revenue figures.

### Preview of the New Features

| Title                                      | Release Date | Revenue       | Budget     | Revenue-to-Budget Ratio | Release Decade | Popularity-to-Vote Ratio | Log Budget | Log Revenue |
| ------------------------------------------ | ------------ | ------------- | ---------- | ----------------------- | -------------- | ------------------------ | ---------- | ----------- |
| Frozen Fever                               | 2015-03-09   | 144,327,371   | 50,000,000 | 2.8865                  | 2010           | 1.1440e-05               | 17.7275    | 18.7876     |
| Paperman                                   | 2012-11-02   | 30,695.5      | 8,000      | 3.8369                  | 2010           | 9.7609e-06               | 8.9873     | 10.3319     |
| Piper                                      | 2016-06-16   | 4,078,230     | 3,300,000  | 1.2358                  | 2010           | 6.2752e-06               | 15.0094    | 15.2212     |
| Superman/Shazam!: The Return of Black Adam | 2010-11-16   | 5,155,325     | 1,600,100  | 3.2219                  | 2010           | 1.4903e-05               | 14.2856    | 15.4555     |
| Olaf's Frozen Adventure                    | 2017-10-27   | 516,455,007.5 | 85,000,000 | 6.0759                  | 2010           | 1.2364e-05               | 18.2582    | 20.0625     |

### Descriptions of New Columns

- **`revenue_to_budget_ratio`**: Indicates the profitability of a movie by calculating the revenue generated per dollar of budget.
- **`release_decade`**: Groups movies into decades based on their release year for easier trend analysis over time.
- **`popularity_to_vote_ratio`**: Highlights movies with a high popularity relative to their number of votes, showcasing their cultural impact or niche popularity.
- **`log_budget`**: Logarithmic transformation of the budget, which normalizes budget data for improved analytical consistency.
- **`log_revenue`**: Logarithmic transformation of the revenue, allowing for normalized revenue analysis.

These features enhance the dataset by adding layers of context to each movie, enabling more detailed analyses on profitability, popularity, and historical trends.

## Data Conversion

This task involves converting textual data into numerical form to facilitate quantitative analysis.

### Conversion of `release_date` to `release_year`

1. **Conversion Process**:

   - The `release_date` column, initially in datetime format, was transformed to extract the release year as a new numerical column named `release_year`.
   - **Purpose**: Converting the release date into a numeric year format allows for easier analysis and grouping by year, which can help with time-based analyses, such as trends over time.

2. **Result**:

   - The DataFrame now includes a `release_year` column derived from the `release_date`.
   - Below is a preview of the new column:

   | release_date | release_year |
   | ------------ | ------------ |
   | 2015-03-09   | 2015         |
   | 2012-11-02   | 2012         |
   | 2016-06-16   | 2016         |
   | 2010-11-16   | 2010         |
   | 2017-10-27   | 2017         |

3. **Benefits of Conversion**:
   - **Numerical Analysis**: The `release_year` column is now ready for quantitative analysis, enabling tasks such as calculating trends, groupings, and decade-based insights.
   - **Flexibility**: This conversion provides a simplified view of the release timeline, making it easier to aggregate data by year or decade.

This approach enhances the dataset’s usability for temporal analysis by transforming complex datetime information into a straightforward numeric format.

## Categorical Data Conversion

### Distribution of Vote Average Categories

In the vote average distribution, the majority of films fall into the "Medium" and "High" categories, with fewer films rated as "Very Low" or "Low." This pattern suggests that the general audience feedback is moderately positive, and only a small subset of films receive notably low ratings. High ratings may be concentrated in well-received genres, sequels, or films with extensive marketing reach, which tend to attract favorable votes.

![alt text](image-35.png)

### Distribution of Budget Categories

The budget distribution indicates that most films are classified in the "Low Budget" category, with significantly fewer films in the "Medium," "High," or "Very High" budget categories. This skew towards lower budgets suggests that the industry is predominantly composed of lower-cost productions, likely due to the high financial risk associated with larger budgets. The "Very High Budget" films are rare and often associated with major studios and franchises aiming for large-scale returns.

![alt text](image-8.png)

### Distribution of Revenue Categories

The revenue distribution shows that most films generate "Low Revenue," with a notable segment under "No Revenue," which may indicate either a lack of reported earnings or financial underperformance. Only a small percentage of films achieve "High" or "Very High Revenue," generally associated with popular or blockbuster releases. This disparity highlights the competitive nature of the film industry, where only select films achieve significant box office success.

![alt text](image-13.png)

---

This categorical analysis highlights the industry's budget and revenue dynamics, where most films operate on limited budgets and generate modest earnings, while only a few high-budget productions achieve substantial revenue and high audience ratings.

## Text Preprocessing

In the "overview" column, we applied several preprocessing steps to enhance the text data for analysis. This included:

1. **Removing Special Characters and Numbers:** Cleansed text by eliminating any non-alphabetic characters.
2. **Lowercasing:** Converted all text to lowercase to standardize the words.
3. **Stopword Removal:** Removed common stopwords to focus on meaningful words in each overview.
4. **Lemmatizing and Stemming:** Reduced words to their root forms, capturing essential meanings while minimizing variations.

### Comparison: Original vs. Processed Overview

The table below displays a comparison of the original overviews with their processed counterparts after applying the preprocessing steps. The processed text is more concise, containing key terms that encapsulate the essence of each movie description without unnecessary words.

![alt text](image-40.png)

The processed overview text is now optimized for tasks such as text analysis, clustering, and sentiment analysis, making it easier to analyze patterns and themes across movies.
