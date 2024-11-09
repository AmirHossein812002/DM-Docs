# Part 1 Analysis

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
