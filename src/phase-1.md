# Phase 1 Analysis

## Numerical Columns

In this step, we calculated various statistical attributes for the following numerical columns: `vote_average`, `vote_count`, `runtime`, `revenue`, `budget`, and `popularity`. The attributes calculated include:

- **Type:** The data type of the column.
- **Range:** The minimum and maximum values present in the column.
- **Min:** The minimum value of the column.
- **Max:** The maximum value of the column.
- **Mean:** The average value of the column.
- **Mode:** The most frequently occurring value in the column.
- **Median:** The middle value when the data is sorted.

Here is a table that summarizes the statistics for each numerical column:

![alt text](/public/image-6.png)

## Boxplots

1. **Vote Average:**

   - The boxplot for `vote_average` suggests a reasonable distribution of values, with a clear median and few outliers. This indicates that most movies have an average rating within a certain range, reflecting more accurate scoring among films.

   ![alt text](/public/image.png)

2. **Vote Count:**

   - The `vote_count` boxplot shows a significant number of outliers. Most of the values cluster at the lower end, while a few films have an exceptionally high number of votes. This suggests that a small number of films receive a disproportionate amount of attention, potentially skewing overall analysis.

   ![alt text](/public/image-1.png)

3. **Runtime:**

   - Similar to `vote_count`, the `runtime` boxplot indicates many outliers with the majority of films clustered at lower runtimes. This raises concerns about the accuracy of the runtime data, as the presence of extreme values might suggest inconsistencies in how runtime is reported.

   ![alt text](/public/image-2.png)

4. **Revenue:**

   - The `revenue` boxplot displays a vast range of values, with numerous outliers. Most films have low revenue, while a few blockbusters inflate the average. This discrepancy highlights the potential inaccuracies in revenue reporting, particularly for smaller films.

   ![alt text](/public/image-3.png)

5. **Budget:**

   - The budget boxplot reveals many outliers as well, with most films showing low budgets and a few with exceedingly high budgets. This disparity may indicate that many films operate on very tight budgets, while a handful of major productions skew the overall analysis.

   ![alt text](/public/image-4.png)

6. **Popularity:**

   - The `popularity` boxplot shows a similar trend to revenue and budget, with many films having low popularity scores and several outliers. This could suggest that the data may not accurately reflect the popularity of films outside of a few well-known titles.

   ![alt text](/public/image-5.png)

### Conclusion

In summary, while the `vote_average` appears to provide a more reliable dataset, the other numerical columns—particularly `vote_count`, `runtime`, `revenue`, `budget`, and `popularity`—show a concerning number of outliers and skewed distributions. These results indicate that the data might not be entirely accurate and warrants further investigation and cleaning before drawing any significant conclusions.

## Revenue and Budget Relationship

The scatter plot below shows the relationship between films' `budget` and `revenue`:

![alt text](/public/image-7.png)

The scatter plot reveals several important insights:

1. **Positive Correlation**: There appears to be a general positive trend, indicating that higher budgets are often associated with higher revenues. This suggests that films with larger production budgets tend to perform better financially, likely due to increased marketing, higher production values, and the ability to attract star talent.

2. **Variability in Revenue**: Despite the observable trend, there is significant variability in revenue for films with similar budgets. This indicates that budget alone is not a definitive predictor of revenue. Many films with moderate budgets achieve high revenues, while some high-budget films fail to perform well at the box office.

3. **Outliers**: The chart shows several outliers, particularly in the upper right quadrant, where films with exceptionally high revenues exist. These outliers could represent blockbuster hits or franchises that benefit from established fanbases, marketing strategies, or critical acclaim that drive ticket sales beyond typical expectations.

4. **Cautions Against Assumptions**: While the scatter plot indicates a trend, it is crucial to approach the conclusion cautiously. The presence of many films that do not conform to the trend underscores the complexity of the film industry, where factors such as genre, timing of release, critical reception, and audience demand also play crucial roles in a film's financial success.

5. **Conclusion**: In summary, while there is a noticeable relationship suggesting that increased budgets can lead to increased revenues, this relationship is not strict. Many factors influence a film's performance, and relying solely on budget as a predictor of revenue would overlook the multifaceted nature of the film market.

### Enhanced Analysis

In light of the scatter plot's findings, it is clear that while a larger budget often provides the resources necessary for successful films, it does not guarantee profitability. The film industry remains unpredictable, and many external variables can significantly impact a film's box office performance. This reinforces the need for filmmakers and studios to consider comprehensive strategies that encompass not just budget allocation, but also marketing, storytelling, and audience engagement to maximize their potential for success.

## Vote Average Distribution

The histogram below shows the distribution of `vote_average` for movies:

![alt text](/public/image-9.png)

### Analysis

1. **Skewed Distribution**: The distribution is highly skewed towards lower ratings, with a significant number of movies having a `vote_average` close to zero. This might suggest that a large portion of the dataset includes movies with minimal votes or low ratings.

2. **Moderate to High Ratings**: For movies that have been rated more significantly, the average rating seems to cluster around the mid-range (approximately 5-7), which could indicate that movies with more substantial viewership or interest tend to achieve more moderate ratings rather than extreme high or low scores.

### Suggested Next Step for Analysis

To determine if movies with a higher `vote_count` tend to have higher `vote_average`:

- **Comparison Using Correlation**: Calculate the correlation between `vote_count` and `vote_average` to quantify any relationship.
- **Grouped Histograms or Scatter Plot**: Plot `vote_count` against `vote_average` in a scatter plot or use grouped histograms to see if higher vote counts correlate with higher average ratings.

### Enhanced Analysis

In summary, while the histogram provides a view of `vote_average` distribution, further analysis with a scatter plot or grouped data for `vote_count` would provide more insights. If the next analysis indicates a positive correlation, it would suggest that movies with higher engagement tend to be better received by audiences.

## Vote Count vs Vote Average

The scatter plot below shows the relationship between the number of votes a movie received (`vote_count`) and its average rating (`vote_average`):

![alt text](/public/image-10.png)

### Analysis

1. **Concentration of Low Vote Counts**: The majority of movies have low `vote_count` values (close to zero), which likely includes films with limited viewership or niche audiences. These movies show a wide range of `vote_average` values, indicating that movies with low vote counts can vary widely in terms of ratings.

2. **Stabilization with Higher Vote Counts**: As `vote_count` increases, the `vote_average` tends to stabilize around a range between 6 and 8. This pattern suggests that movies with more votes tend to have ratings that converge towards a central value, likely due to the "law of large numbers" where more ratings lead to a more reliable average.

3. **Absence of Extreme Ratings in High Vote Counts**: Movies with very high vote counts rarely receive extremely low or high ratings. Instead, they typically cluster in the mid-range, which may indicate that popular movies with wide appeal tend to receive moderate to high ratings.

4. **Potential Positive Correlation**: While not strongly linear, there is a slight trend where movies with higher vote counts tend to have higher `vote_average` values. However, this relationship is not strict, as numerous factors (such as genre, marketing, and critical reception) can influence both the number of votes and the rating.

### Conclusion

Overall, the scatter plot suggests that movies with higher vote counts tend to receive more stable and generally higher average ratings. However, the trend is not definitive, and exceptions are present. High vote counts might indicate a more widely viewed or popular movie, often accompanied by a moderately positive audience reception.

## Animation Film Release Dates

The line chart below shows the number of animation films released each year:

![alt text](/public/image-11.png)

### Analysis

1. **Gradual Growth Until the 1990s**: From the late 1800s to the early 1990s, there was a relatively low and steady rate of animation film releases. This slow growth reflects the early stages of the animation industry, which was limited by technological constraints and high production costs.

2. **Significant Increase in the 2000s**: Starting in the late 1990s and accelerating through the 2000s, there is a noticeable increase in the number of animation films released annually. This surge aligns with advancements in computer graphics, which made animation more accessible and opened new possibilities for studios.

3. **Peak in Recent Years**: The chart shows a sharp peak in the 2010s, with the highest number of releases around 2018-2019. This period corresponds with the widespread adoption of digital animation technologies and a growing global demand for animated content across various media platforms, including streaming services.

4. **Decline Towards 2020**: The sudden drop after 2019 could reflect incomplete data for the most recent years in the dataset, or it could be due to factors like the COVID-19 pandemic impacting film production and release schedules.

### Conclusion

Overall, the chart demonstrates how technological advancements and market demand have driven significant growth in the animation industry, especially in recent decades. The data highlights how animation has become a major part of the entertainment industry, with increasing production volume over time. Further analysis could look into specific events or technological milestones that contributed to the growth patterns observed in the chart.

## Popular Film Genres

This analysis uses the `genres` column to identify popular genres by examining the number of films in each genre and assessing which genres have the highest average ratings (`vote_average`) and the highest average revenue (`revenue`). This helps to determine which genres have been most well-received by audiences.

### Genre Statistics

The tables below show the aggregated statistics for each genre:

1. **Sorted by Vote Average**:
   Genres are sorted by their average audience rating to identify which types of films have been most positively rated by viewers.

   ![alt text](/public/image-12.png)

2. **Sorted by Revenue**:
   Genres are sorted by their average revenue to highlight which genres tend to generate the highest earnings.

   ![alt text](/public/image-15.png)

### Key Findings

1. **Top Genres by Audience Rating**:

   - **Action** and **TV Movie** genres lead in terms of average ratings, suggesting that these genres are generally well-received by audiences.
   - Other high-ranking genres in terms of ratings include **Mystery**, **Adventure**, and **Crime**.
   - **Animation** has a relatively lower average rating, indicating that despite its popularity, it may not always achieve the highest ratings from viewers.

2. **Top Genres by Revenue**:
   - **Adventure** has the highest average revenue, suggesting that films in this genre tend to attract larger audiences and generate significant box office earnings.
   - **Family** and **Fantasy** also show strong revenue performance, indicating their widespread appeal, especially for family-friendly content.
   - **Animation** is notable for having a high number of releases but relatively lower revenue on average, which may reflect the broad range of animated content with varying production budgets and market performance.

### Conclusion

The analysis reveals that **Action** and **Adventure** are particularly successful genres, either in terms of audience ratings or revenue. While **Animation** is popular in terms of the number of films produced, it does not perform as strongly in terms of revenue or average ratings. This suggests that while animated films have wide appeal, they vary greatly in audience reception and box office performance.

This genre-based insight can help guide future film production and marketing strategies by highlighting which genres consistently perform well both critically and financially.

## High-Rated Films By Companies

The table below shows production companies that have produced the most "high-rated" films (defined as films with a `vote_average` of 7 or higher). It also includes average metrics for popularity, vote average, and revenue for these high-rated films.

![alt text](/public/image-16.png)

### Key Findings

1. **Top Producers of High-Rated Movies**:

   - **Soyuzmultfilm**, **Walter Lantz Productions**, and **Toei Animation** are among the companies with the highest count of high-rated films. This indicates these companies have consistently produced films that resonate well with audiences in terms of quality.

2. **Popularity and Revenue Analysis**:

   - Companies like **Toei Animation** and **Warner Bros. Animation** not only produce high-rated movies but also achieve higher popularity and revenue averages, suggesting they may have broader appeal or larger distribution networks.
   - Some companies, like **Walter Lantz Productions**, produce high-rated films but have relatively lower average popularity and revenue, possibly reflecting niche appeal or limited distribution.

3. **Overall Success of High-Rated Films**:
   - While high ratings indicate quality, popularity and revenue metrics vary significantly among companies. This suggests that while some companies consistently produce well-received films, their financial success and popularity can depend on other factors like marketing, target audience, and distribution.

### Conclusion

This analysis shows that certain production companies are known for consistently producing high-rated films. However, financial success and popularity are not guaranteed by high ratings alone. This insight highlights the importance of comprehensive strategies for both production quality and market appeal to maximize a film's success.

## Adult vs. Non-Adult Movies

This analysis compares adult movies (films marked as intended for adult audiences) with non-adult movies across three key metrics: average rating (`vote_average`), average revenue, and average popularity.

![alt text](/public/image-17.png)

### Key Findings

1. **Average Rating (vote_average)**:

   - **Non-Adult Movies** have a higher average rating (2.60) compared to **Adult Movies** (1.87). This indicates that non-adult movies tend to receive better ratings from audiences.

2. **Revenue**:

   - **Non-Adult Movies** also generate significantly more revenue on average (1.87 million) compared to **Adult Movies** (5.83). The stark difference suggests that non-adult movies have broader commercial appeal and better box office performance.

3. **Popularity**:
   - **Non-Adult Movies** have a slightly higher average popularity (1.89) compared to **Adult Movies** (1.43). This indicates that non-adult movies generally attract more attention and audience interest.

### Conclusion

The data suggests that non-adult movies perform better across all measured metrics: they receive higher ratings, generate more revenue, and are more popular. This could be due to the broader appeal and accessibility of non-adult films to a wider audience, while adult movies may cater to a more niche market with limited distribution.

## Revenue-to-Budget Ratio

This analysis calculates the revenue-to-budget ratio for each film, providing insight into which films were the most financially successful relative to their budgets. A higher ratio indicates a greater return on investment.

![alt text](/public/image-18.png)

### Key Findings

1. **Top Financially Successful Films**:

   - **Bambi** achieved the highest revenue-to-budget ratio at approximately 311, making it one of the most financially successful films relative to its production costs.
   - Other classics such as **10+2: The Great Secret**, **Dragon Ball Super: Broly**, **Snow White and the Seven Dwarfs**, and **Cinderella** also show high revenue-to-budget ratios, suggesting that well-established franchises or enduring stories often yield substantial returns.

2. **Low Financial Success**:

   - Films like **Foodfight!** and various lesser-known titles at the bottom of the list have extremely low revenue-to-budget ratios, indicating poor financial performance. Such films may have faced challenges in attracting audiences or suffered from limited distribution.

3. **Insights on Financial Success**:
   - Films with high revenue-to-budget ratios often include animated classics and popular franchises, which benefit from long-lasting appeal, family-friendly content, and widespread distribution.
   - Low-performing films may reflect niche appeal, limited marketing, or production issues, underscoring the risks involved in film production.

### Conclusion

The revenue-to-budget ratio provides a valuable metric for evaluating financial success. Iconic films and well-known franchises tend to outperform other films in terms of return on investment, highlighting the potential profitability of investing in established stories and universally appealing content.

## Spoken Languages in Movies

This analysis categorizes movies based on the spoken languages used, identifying which languages are most frequently featured in films.

![alt text](/public/image-19.png)

### Key Findings

1. **Most Common Languages**:

   - **English** is the most commonly spoken language in movies, with a count of 13,415 films, reflecting the dominance of English-language content in the global film industry.
   - **No Language** appears as the second-highest category, with 6,259 films, likely including silent films, animation with minimal dialogue, or experimental films without spoken language.
   - **Japanese**, **French**, and **Russian** are also prevalent, showing the influence of these languages in global cinema.

2. **Less Common Languages**:

   - Some languages, such as **Ossetian; Ossetic**, **Occitan**, **Norwegian Bokmål**, **Navajo**, and **Abkhazian**, are represented by only a single film, indicating their rarity in mainstream cinema.

3. **Insights on Language Diversity**:
   - The variety of languages demonstrates the diversity in film production across different cultures, although English remains the dominant language.
   - The presence of lesser-known languages highlights efforts by filmmakers to explore and represent diverse linguistic and cultural backgrounds.

### Conclusion

The analysis shows that while English dominates the film industry, a wide array of languages are also represented. This linguistic diversity reflects the multicultural nature of cinema and the growing trend towards inclusivity in global storytelling.