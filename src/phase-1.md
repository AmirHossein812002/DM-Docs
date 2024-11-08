# Phase 1 Analysis

## Numerical Columns

We analyzed key statistics for the numerical columns: `vote_average`, `vote_count`, `runtime`, `revenue`, `budget`, and `popularity`. The attributes we looked at include:

- **Type:** Data type of the column.
- **Range:** Spread of values from min to max.
- **Min/Max:** Smallest and largest values.
- **Mean:** Average value.
- **Mode:** Most common value.
- **Median:** Middle value in sorted data.

Below is a table with the statistics for each column:

![alt text](/public/image-6.png)

## Boxplots

1. **Vote Average:**
   - The boxplot for `vote_average` shows a balanced distribution with few outliers. Most films fall within a consistent rating range, indicating reliable scoring data.
   - ![alt text](/public/image.png)

2. **Vote Count:**
   - `Vote_count` has many outliers, with most values clustered low and a few films with very high votes. This suggests that a handful of popular films skew the vote distribution.
   - ![alt text](/public/image-1.png)

3. **Runtime:**
   - The `runtime` boxplot also shows numerous outliers, with most films clustered around lower runtimes. This may indicate variability in runtime data accuracy.
   - ![alt text](/public/image-2.png)

4. **Revenue:**
   - The `revenue` boxplot displays a wide range with multiple outliers. Most films have low revenue, but a few blockbusters inflate the average, showing possible reporting inconsistencies.
   - ![alt text](/public/image-3.png)

5. **Budget:**
   - The `budget` boxplot reveals outliers as well, with most films on low budgets and a few major productions with high budgets. This may affect overall budget analysis.
   - ![alt text](/public/image-4.png)

6. **Popularity:**
   - `Popularity` follows a similar pattern with low scores and some outliers. This suggests that the popularity metric might not represent smaller films well.
   - ![alt text](/public/image-5.png)

### Conclusion

Overall, while `vote_average` is more consistent, other numerical columns like `vote_count`, `runtime`, `revenue`, `budget`, and `popularity` have significant outliers and skewed distributions. This indicates potential data quality issues that should be addressed for reliable analysis.


## Revenue and Budget Relationship

The scatter plot below shows the relationship between `budget` and `revenue`:

![alt text](/public/image-7.png)

1. **General Trend**: Higher budgets often lead to higher revenues, suggesting that bigger budgets can help films perform better financially.

2. **Variability**: Not all high-budget films succeed, and some films with lower budgets still earn high revenue, showing that budget isn’t everything.

3. **Outliers**: A few blockbuster films stand out with very high revenue, likely due to factors like strong fanbases and marketing.

4. **Conclusion**: While a bigger budget can increase a film’s chances of success, many other factors also play a role, like timing, genre, and audience interest.

### Summary

Higher budgets help, but success depends on more than just money. Filmmakers should consider factors beyond budget, like marketing and audience engagement.

## Vote Average Distribution

The histogram below shows the distribution of `vote_average` for movies:

![alt text](/public/image-9.png)

### Analysis

1. **Skewed Towards Lower Ratings**: Many movies have a low `vote_average`, suggesting that a large part of the dataset includes films with minimal votes or lower ratings.

2. **Mid-Range Cluster**: Movies with more ratings tend to have `vote_average` clustered between 5 and 7, showing a trend towards moderate ratings rather than extremes.

### Next Steps

To explore if movies with more votes generally have higher ratings:
- **Correlation Check**: Calculate the correlation between `vote_count` and `vote_average`.
- **Scatter Plot**: Use a scatter plot to visually inspect if movies with higher `vote_count` tend to have higher `vote_average`.

### Summary

The histogram shows a skewed distribution in `vote_average`. Further analysis, especially focusing on `vote_count`, could reveal whether more popular movies tend to be better rated.


## Vote Count vs Vote Average

The scatter plot below shows the relationship between the number of votes (`vote_count`) and average rating (`vote_average`) of movies:

![alt text](/public/image-10.png)

### Analysis

1. **Low Vote Counts**: Most movies have low `vote_count`, and their ratings (`vote_average`) vary widely, showing that niche or less-viewed films can receive any rating.

2. **Stabilization with More Votes**: For movies with higher `vote_count`, `vote_average` tends to settle around 6-8, suggesting that more ratings bring consistency.

3. **Moderate Ratings for Popular Movies**: Highly-rated movies with many votes generally avoid extreme ratings, often clustering around mid to high scores.

4. **Slight Positive Trend**: There’s a mild trend where movies with more votes have higher ratings, though it’s not strong. Other factors likely influence both vote count and rating.

### Summary

Movies with more votes usually have more stable and moderately positive ratings. This trend suggests that popular movies tend to have broad appeal but avoids extreme ratings.

## Animation Film Release Dates

The line chart below shows the number of animation films released each year:

![alt text](/public/image-11.png)

### Analysis

1. **Slow Growth Until the 1990s**: Animation film releases grew slowly from the 1800s to the early 1990s, reflecting early industry limitations and high production costs.

2. **Increase in the 2000s**: Starting in the late 1990s, there’s a clear rise in releases, likely due to advancements in computer animation making production easier and cheaper.

3. **Peak in 2010s**: The number of releases peaks around 2018-2019, as digital animation technologies became widespread and demand for animated content grew across platforms like streaming services.

4. **Recent Decline**: The drop after 2019 could be due to incomplete data or disruptions like the COVID-19 pandemic affecting release schedules.

### Conclusion

This chart shows how technology and demand have driven the growth of animation, especially since the 2000s. Animation has become a key part of the entertainment industry, with production volumes increasing significantly over time.


## Popular Film Genres

This analysis uses the `genres` column to identify popular genres based on the number of films, average ratings (`vote_average`), and average revenue (`revenue`). This helps determine which genres are most successful with audiences.

### Genre Statistics

The tables below display the top genres based on average ratings and revenue:

1. **Sorted by Vote Average**:
   Shows the genres with the highest average audience ratings.

   ![alt text](/public/image-12.png)

2. **Sorted by Revenue**:
   Shows the genres that generate the highest average revenue.

   ![alt text](/public/image-15.png)

### Key Findings

1. **Top Genres by Rating**:
   - **Action** and **TV Movie** genres have high average ratings, suggesting they are well-received by audiences.
   - Other high-rated genres include **Mystery**, **Adventure**, and **Crime**.
   - **Animation** has a lower average rating, showing that while it’s popular, it may not always achieve top ratings.

2. **Top Genres by Revenue**:
   - **Adventure** generates the highest average revenue, indicating strong box office appeal.
   - **Family** and **Fantasy** also perform well financially, especially with family audiences.
   - **Animation** has many releases but lower average revenue, possibly due to the wide range of animated films with varying budgets.

### Conclusion

Overall, **Action** and **Adventure** are the most successful genres, either in ratings or revenue. **Animation**, while widely produced, varies more in audience reception and revenue. These insights can guide production and marketing strategies by identifying genres that consistently perform well.

## High-Rated Films by Companies

The table below shows production companies that have produced the most high-rated films (defined as films with a `vote_average` of 7 or higher). It also includes average metrics for popularity, vote average, and revenue for these films.

![alt text](/public/image-16.png)

### Key Findings

1. **Top Producers of High-Rated Movies**:
   - **Soyuzmultfilm**, **Walter Lantz Productions**, and **Toei Animation** rank among the highest for producing high-rated films, indicating these companies consistently create content that resonates well with audiences.

2. **Popularity and Revenue**:
   - Companies like **Toei Animation** and **Warner Bros. Animation** not only produce high-rated films but also achieve higher popularity and revenue, suggesting they may have broader appeal or better distribution.
   - In contrast, companies like **Walter Lantz Productions** produce high-rated films with lower popularity and revenue, possibly indicating a more niche appeal or limited distribution reach.

3. **Success Beyond Ratings**:
   - High ratings don’t always mean high revenue or popularity. Some companies produce quality films that aren’t as financially successful, showing the importance of marketing and distribution in addition to production quality.

### Conclusion

Certain companies are known for consistently producing high-rated films, but financial success and popularity vary. This highlights the need for a balanced strategy in both quality production and audience engagement to maximize a film’s success.

## Adult vs. Non-Adult Movies

This analysis compares adult movies (films intended for adult audiences) with non-adult movies across three metrics: average rating (`vote_average`), average revenue, and average popularity.

![alt text](/public/image-17.png)

### Key Findings

1. **Average Rating**:
   - **Non-Adult Movies** have a higher average rating (2.60) than **Adult Movies** (1.87), showing that audiences tend to rate non-adult films more favorably.

2. **Revenue**:
   - **Non-Adult Movies** generate much higher average revenue (1.87 million) compared to **Adult Movies** (5.83). This suggests that non-adult movies have wider commercial appeal.

3. **Popularity**:
   - **Non-Adult Movies** have a slightly higher popularity score (1.89) compared to **Adult Movies** (1.43), indicating that they attract more audience interest overall.

### Conclusion

Non-adult movies outperform adult movies in ratings, revenue, and popularity. This likely reflects the broader accessibility and appeal of non-adult films, while adult films may target a more limited audience.

## Revenue-to-Budget Ratio

This analysis calculates the revenue-to-budget ratio for each film, showing which films achieved the highest financial return relative to their production costs. A higher ratio indicates greater profitability.

![alt text](/public/image-18.png)

### Key Findings

1. **Top Financially Successful Films**:
   - **Bambi** has the highest revenue-to-budget ratio (around 311), making it one of the most profitable films relative to its budget.
   - Other classics like **10+2: The Great Secret**, **Dragon Ball Super: Broly**, **Snow White and the Seven Dwarfs**, and **Cinderella** also show high ratios, indicating that well-loved stories and franchises often yield substantial returns.

2. **Low Financial Success**:
   - Films like **Foodfight!** and other lesser-known titles have low revenue-to-budget ratios, reflecting poor financial performance. These films may have faced issues like limited audience interest or distribution.

3. **Patterns in Financial Success**:
   - High ratios are common among animated classics and popular franchises, which benefit from lasting appeal, family-friendly themes, and wide distribution.
   - Low ratios may indicate niche appeal, production challenges, or limited marketing, highlighting the risks of film production.

### Conclusion

The revenue-to-budget ratio is a helpful metric for assessing financial success. Iconic films and established franchises tend to outperform in terms of return on investment, showing the value of investing in familiar, widely appealing content.

## Spoken Languages in Movies

This analysis categorizes movies by the languages spoken, highlighting which languages are most frequently featured in films.

![alt text](/public/image-19.png)

### Key Findings

1. **Most Common Languages**:
   - **English** is the most common language, appearing in 13,415 films, reflecting its global dominance in cinema.
   - **No Language** is the second-highest, with 6,259 films, likely including silent, animated, or experimental films.
   - **Japanese**, **French**, and **Russian** also appear frequently, showing their influence in global cinema.

2. **Rare Languages**:
   - Some languages, like **Ossetian; Ossetic**, **Occitan**, **Navajo**, and **Abkhazian**, appear in only one film, showing their rarity in mainstream movies.

3. **Language Diversity**:
   - While English dominates, the presence of various other languages reflects cultural diversity and a push towards inclusivity in storytelling.

### Conclusion

Though English leads globally, films in other languages contribute to the richness and diversity of cinema, showcasing a range of cultural and linguistic backgrounds.