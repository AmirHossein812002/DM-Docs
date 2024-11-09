# Part 1 Analysis

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

1. **General Trend**: Films with bigger budgets often earn more revenue, suggesting that a higher budget can boost financial performance.

2. **Mixed Results**: Some high-budget films still earn low revenue, while a few low-budget films manage to achieve high revenue. This shows that budget alone doesn't guarantee success.

3. **Notable Outliers**: A few blockbuster films with very high revenue stand out, likely due to strong fan support and marketing efforts.

### Conclusion

While a higher budget can improve a film’s chances of success, factors like marketing, timing, and audience appeal are also essential for strong revenue performance.

## Vote Average Distribution

The histogram below shows the distribution of `vote_average` for movies:

![alt text](/public/image-9.png)

1. **Skewed Towards Zero Values**: Many `vote_average` values are zero, likely representing missing ratings rather than actual low scores. This skews the histogram toward zero.

2. **Mid-Range Cluster**: For movies with recorded ratings, `vote_average` values generally fall between 5 and 7, suggesting that most rated films receive moderate scores.

### Conclusion

The skewed distribution is largely due to unprocessed zero values representing missing data. Addressing these missing values would clarify the actual rating distribution and provide more reliable insights into audience preferences.


## Vote Count vs Vote Average

The scatter plot below shows the relationship between the number of votes (`vote_count`) and the average rating (`vote_average`) for movies:

![alt text](/public/image-10.png)

### Insights

1. **Zero Vote Counts**: Many movies have a `vote_count` of zero, which likely means missing data.

2. **Stable Ratings with More Votes**: Movies with higher vote counts tend to have ratings between 6 and 8, showing more stability.

3. **Moderate Ratings for Popular Movies**: Popular movies with many votes usually have moderate to positive ratings, rarely very high or low.

### Conclusion

Movies with more votes generally have stable, moderate ratings. Many zero vote counts likely represent missing data, so cleaning this up would improve accuracy.

## Animation Film Release Dates

The line chart below shows the number of animation films released each year:

![alt text](/public/image-11.png)

1. **Slow Growth Until the 1990s**: Animation releases increased gradually from the 1800s until the early 1990s, limited by high production costs and technological constraints.

2. **Rise in the 2000s**: Releases began rising noticeably in the late 1990s and into the 2000s as computer animation made production faster and more accessible.

3. **Peak in 2010s**: Animation releases peaked around 2018-2019, supported by digital animation and increased demand from streaming platforms.

4. **Recent Decline**: The decline after 2019 may reflect incomplete data or disruptions like COVID-19 affecting production and release schedules.

### Conclusion

This trend highlights the influence of technology and demand on the animation industry’s growth, especially since the 2000s, as animation became a major entertainment sector with increasing production rates.


## Popular Film Genres

This analysis examines popular genres based on the number of films, average ratings (`vote_average`), and average revenue (`revenue`) to identify which genres perform best with audiences.

### Genre Statistics

The tables below highlight top genres by average ratings and revenue:

1. **Sorted by Vote Average**  
   Displays genres with the highest average audience ratings.

   ![alt text](/public/image-12.png)

2. **Sorted by Revenue**  
   Shows genres that generate the highest average revenue.

   ![alt text](/public/image-15.png)

### Key Findings

1. **Top Genres by Rating**:
   - **Action** and **TV Movie** are among the highest-rated genres.
   - Other well-rated genres include **Mystery**, **Adventure**, and **Crime**.
   - **Animation**, while popular, has a lower average rating, indicating mixed reception.

2. **Top Genres by Revenue**:
   - **Adventure** leads in revenue, suggesting it has strong box office potential.
   - **Family** and **Fantasy** genres also show high revenue, likely due to their broad appeal.
   - **Animation** is frequently produced but has lower average revenue, reflecting diverse budgets and returns.

### Conclusion

**Action** and **Adventure** emerge as successful genres in terms of ratings and revenue. **Animation** is popular but varies in financial and audience success. These insights can guide decisions in production and marketing by focusing on consistently high-performing genres.

## High-Rated Films by Companies

The table below lists production companies with the most high-rated films (those with a `vote_average` of 7 or higher), along with average metrics for popularity, rating, and revenue.

![alt text](/public/image-16.png)

### Key Findings

1. **Top Producers**  
   Companies like **Soyuzmultfilm**, **Walter Lantz Productions**, and **Toei Animation** consistently produce high-rated films, indicating they create content that resonates well with audiences.

2. **Popularity and Revenue**  
   **Toei Animation** and **Warner Bros. Animation** not only produce well-rated films but also achieve higher popularity and revenue, likely due to broader appeal and stronger distribution. **Walter Lantz Productions**, while producing quality films, has lower popularity and revenue, possibly due to a niche audience or limited reach.

3. **Quality vs. Financial Success**  
   High ratings alone don’t guarantee financial success. Some companies produce excellent films that don’t perform as well financially, highlighting the importance of effective marketing and distribution.

### Conclusion

Producing high-rated films is valuable, but popularity and revenue require more than just quality. Successful companies balance production quality with strategic marketing and distribution to maximize reach and profitability.

## Adult vs. Non-Adult Movies

This analysis compares adult movies (films intended for adult audiences) with non-adult movies based on average rating (`vote_average`), revenue, and popularity.

![alt text](/public/image-17.png)

### Key Findings

1. **Average Rating**  
   Non-adult movies have a higher average rating (2.60) compared to adult movies (1.87), indicating that they generally receive more favorable feedback.

2. **Revenue**  
   Non-adult movies generate substantially higher average revenue (1.87 million) than adult movies (5.83), suggesting they are more commercially successful.

3. **Popularity**  
   Non-adult movies also show slightly higher popularity (1.89) than adult movies (1.43), indicating broader audience interest.

### Conclusion

Non-adult movies outperform adult movies in ratings, revenue, and popularity, likely due to their accessibility and appeal to a wider audience, while adult films seem more limited in reach.

## Revenue-to-Budget Ratio

This analysis reviews the revenue-to-budget ratio for films to see which achieved high returns relative to their production costs.

![alt text](/public/image-18.png)

### Key Findings

1. **Top Profitable Films**  
   - **Bambi** shows the highest profitability with a ratio around 311.
   - Other classics like **Snow White and the Seven Dwarfs** and **Cinderella** also have high ratios, proving the lasting appeal of well-known stories.

2. **Lower Performing Films**  
   - Films like **Foodfight!** have very low ratios, indicating limited success, likely due to low audience interest or marketing.

3. **General Trend**  
   - Animated classics and popular franchises generally achieve higher ratios, while niche films or those with limited resources have lower returns.

### Conclusion

A high revenue-to-budget ratio often points to financial success. Popular franchises and well-known stories usually yield the best returns.

## Spoken Languages in Movies

This analysis categorizes movies by spoken language, highlighting the most common languages in film.

![alt text](/public/image-19.png)

### Key Findings

1. **Most Common Languages**  
   - **English** leads with 13,415 films, showing its global reach in cinema.
   - **No Language** follows with 6,259 films, likely representing silent, animated, or experimental films.
   - **Japanese**, **French**, and **Russian** are also frequent, reflecting their impact on global cinema.

2. **Rare Languages**  
   - Languages like **Ossetian**, **Occitan**, **Navajo**, and **Abkhazian** appear in only one film, highlighting their rarity.

3. **Diverse Representation**  
   - Despite English dominance, other languages add cultural diversity and inclusivity in film.

### Conclusion

English is the main language in cinema, but movies in various languages add depth and diversity, reflecting a broader range of cultural perspectives.