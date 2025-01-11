# Clustering Analysis

## Meaningful Features Clustering 

### Feature Selection

To cluster movies meaningfully, the following features were selected:

#### Numerical Features:

- **Popularity**: A measure of how well-known a movie is.
- **Vote Average**: The average rating a movie has received.
- **ROI (Revenue-to-Budget Ratio)**: Indicates financial success relative to the movie's budget.

#### Categorical Features:

- **Genres**: Transformed into binary columns using one-hot encoding to represent each genre as a separate feature.

---

### KMeans Clustering

#### Objective

To group movies into distinct clusters using the KMeans algorithm and determine the optimal number of clusters based on the Silhouette Score.

#### Results

- **Best Silhouette Score:** `0.7686`
- **Optimal Number of Clusters:** `3`

#### Cluster Sizes

The number of movies in each cluster is as follows:

| Cluster       | Number of Movies |
| ------------- | ---------------- |
| **Cluster 0** | 19,881           |
| **Cluster 2** | 704              |
| **Cluster 1** | 20               |

![alt text](/src/public/phase-2/image.png)

#### Cluster Averages

The average values of the selected numerical features for each cluster:

| KMeans_Cluster | Popularity | Vote_Average | ROI      |
| -------------- | ---------- | ------------ | -------- |
| **Cluster 0**  | 0.600609   | 6.290750     | 3.910983 |
| **Cluster 1**  | 0.608000   | 6.273238     | 9.643287 |
| **Cluster 2**  | 0.698432   | 6.306051     | 3.909453 |

![alt text](/src/public/phase-2/image-1.png)

#### Visualization

Clusters were visualized using **Principal Component Analysis (PCA)**:

![alt text](/src/public/phase-2/image-2.png)

#### Analysis

- **Cluster 0:** Represents the majority of movies, with moderate popularity and ROI.
- **Cluster 1:** A small cluster of movies with exceptionally high ROI, likely blockbusters or niche hits.
- **Cluster 2:** Movies with higher popularity but average ROI, potentially representing widely viewed but moderately successful films.

---

### DBSCAN Clustering

#### Objective

To group movies into clusters using the DBSCAN algorithm and determine optimal parameters (`eps` and `min_samples`) through tuning.

#### Results

- **Best Silhouette Score:** Achieved during tuning with sampled data.
- **Optimal Parameters:**
  - `eps = 0.3`
  - `min_samples = 9`

#### Cluster Sizes

The number of movies in each cluster (excluding noise) is as follows:

| Cluster       | Number of Movies |
| ------------- | ---------------- |
| **Cluster 0** | 14,991           |
| **Cluster 3** | 3,077            |
| **Cluster 2** | 200              |
| **Cluster 1** | 112              |
| **Cluster 6** | 63               |
| **Cluster 5** | 37               |
| **Cluster 4** | 30               |

![alt text](/src/public/phase-2/image-3.png)

#### Cluster Averages

The average values of the selected numerical features for each cluster:

| DBSCAN_Cluster | Popularity | Vote_Average | ROI      |
| -------------- | ---------- | ------------ | -------- |
| **Cluster 0**  | 0.600002   | 6.139569     | 3.911143 |
| **Cluster 1**  | 0.600009   | 5.266340     | 3.911143 |
| **Cluster 2**  | 0.600015   | 7.283500     | 3.911143 |
| **Cluster 3**  | 0.600002   | 6.976442     | 3.911143 |
| **Cluster 4**  | 0.600000   | 5.408832     | 3.911143 |
| **Cluster 5**  | 0.621027   | 6.000000     | 3.911143 |
| **Cluster 6**  | 0.600000   | 7.500700     | 3.911143 |

![alt text](/src/public/phase-2/image-4.png)

#### Visualization

Clusters were visualized using **Principal Component Analysis (PCA)** for dimensionality reduction:

![alt text](/src/public/phase-2/image-5.png)

#### Analysis

- **Cluster 0:** Contains the majority of movies with average `vote_average` and `ROI`.
- **Cluster 3:** The second-largest cluster, representing movies with higher average `vote_average`.
- **Cluster 2:** A smaller cluster with the highest average `vote_average`.
- **Cluster 6:** A very small cluster with distinctively high `vote_average`.
- **Noise Points:** DBSCAN inherently identifies noise points (not included in the clusters) that don’t fit well with others in the dataset.

---

### Conclusion

#### Summary

The clustering analysis using both **KMeans** and **DBSCAN** provided meaningful insights into the movie dataset:

- **KMeans Clustering:**

  - Grouped movies into 3 clusters, with clear separation in PCA visualization.
  - Identified a small cluster (Cluster 1) of movies with exceptionally high ROI, likely representing blockbuster hits or niche successes.
  - Majority of movies were in Cluster 0, representing general characteristics with moderate popularity and ROI.

- **DBSCAN Clustering:**
  - Identified 7 clusters (excluding noise), with varying sizes.
  - Captured smaller clusters like Cluster 2 (highest `vote_average`) and Cluster 6 (distinctively high `vote_average`).
  - Highlighted noise points in the data, showcasing DBSCAN's ability to handle outliers.

#### Observations

- **Feature Contributions:** Both clustering methods demonstrated that `vote_average` and `ROI` played significant roles in forming distinct groups.
- **Algorithm Strengths:**
  - KMeans is effective for balanced clustering but struggles with irregular shapes or noise.
  - DBSCAN is better at identifying smaller, irregular clusters and outliers.

---

## Year and Season-Based Clustering 

### KMeans Clustering

#### Objective

To cluster movies based on their release year and season using the KMeans algorithm. The goal is to identify patterns in movie releases over time and across seasons.

#### Results

- **Best Silhouette Score:** `0.5673`
- **Optimal Number of Clusters:** `7`

#### Cluster Sizes

The number of movies in each cluster is as follows:

| Cluster       | Number of Movies |
| ------------- | ---------------- |
| **Cluster 0** | 19,881           |
| **Cluster 2** | 704              |
| **Cluster 1** | 20               |

![alt text](/src/public/phase-2/image-6.png)

#### Visualization

Clusters were visualized using **Principal Component Analysis (PCA)**:

![alt text](/src/public/phase-2/image-8.png)

#### Analysis

- **Cluster 0:** Represents the majority of movies with a balanced distribution across seasons and years.
- **Cluster 1:** A small cluster, likely consisting of movies released in specific seasons or years with unique patterns.
- **Cluster 2:** Smaller but distinct in release patterns, likely influenced by specific seasonal or yearly trends.

---

### DBSCAN Clustering

#### Objective

To cluster movies based on their release year and season using the DBSCAN algorithm, which can handle noise and irregular cluster shapes effectively.

#### Results

- **Cluster Sizes:**

| Cluster       | Number of Movies |
| ------------- | ---------------- |
| **Cluster 3** | 8,393            |
| **Cluster 0** | 3,889            |
| **Cluster 1** | 3,666            |
| **Cluster 2** | 3,650            |

![alt text](/src/public/phase-2/image-9.png)

#### Visualization

Clusters were visualized using **Principal Component Analysis (PCA)**:

![alt text](/src/public/phase-2/image-10.png)

#### Analysis

- **Cluster 3:** The largest cluster, representing movies with common release patterns across multiple years and seasons.
- **Clusters 0, 1, and 2:** Similar in size, potentially capturing movies with more distinct seasonal or yearly release trends.

---

### Summary

Both KMeans and DBSCAN clustering provide unique insights into movie release patterns:

- **KMeans:** Suitable for balanced clustering and offers a clear structure.
- **DBSCAN:** Captures irregular cluster shapes and handles potential noise effectively.

---

## Visualization

### KMeans Additional Analysis

#### Genre Distribution

The percentage of movies across genres for each KMeans cluster:

![alt text](/src/public/phase-2/image-11.png)

**Observations:**

- Cluster 0 has a significant percentage of `Animation` and `Comedy` movies.
- Cluster 2 shows higher percentages in `Drama`, `Comedy`, and `Adventure`.

---

#### Seasonal Distribution

The percentage of movies released in each season for KMeans clusters:

![alt text](/src/public/phase-2/image-12.png)

**Observations:**

- Cluster 0 has the highest percentage of movies released in the **Winter** season.
- Cluster 1 shows dominance in **Fall**, followed by **Spring**.

---

#### Release Year Trends

The trend of movie releases over years grouped by KMeans clusters:

![alt text](/src/public/phase-2/image-13.png)

**Observations:**

- Cluster 0 exhibits a steady increase in releases, peaking in the 2010s.
- Clusters 1 and 2 show smaller release volumes with slight peaks in the late 1990s.

---

#### Cluster Summary

A summary of the top genres, dominant seasons, and average release year for each KMeans cluster:

| KMeans Cluster | Top Genres                 | Dominant Season | Average Release Year |
| -------------- | -------------------------- | --------------- | -------------------- |
| **0**          | Animation, Comedy, Drama   | Winter          | 1995.0               |
| **1**          | Animation, Comedy, Fantasy | Fall            | 1998.8               |
| **2**          | Animation, Comedy, Drama   | Winter          | 1986.0               |

---

### DBSCAN Additional Analysis

#### Genre Distribution

The percentage of movies across genres for each DBSCAN cluster:

![alt text](/src/public/phase-2/image-14.png)

**Observations:**

- All clusters show a dominant percentage in the `Animation` genre.
- Cluster 0 shows some representation of `Western` and `Crime` genres.

---

#### Seasonal Distribution

The percentage of movies released in each season for DBSCAN clusters:

![alt text](/src/public/phase-2/image-15.png)

**Observations:**

- Cluster 5 shows the highest percentage of movies released in **Winter** (62%).
- Clusters 0 and 6 also show strong dominance in **Winter** releases.

---

#### Release Year Trends

The trend of movie releases over years grouped by DBSCAN clusters:

![alt text](/src/public/phase-2/image-16.png)

**Observations:**

- Cluster 0 shows a consistent rise in releases, peaking in the 2010s.
- Other clusters display smaller release volumes with scattered trends.

---

#### Cluster Summary

A summary of the top genres, dominant seasons, and average release year for each DBSCAN cluster:

| DBSCAN Cluster | Top Genres                | Dominant Season | Average Release Year |
| -------------- | ------------------------- | --------------- | -------------------- |
| **0**          | Animation, Western, Crime | Winter          | 1995.6               |
| **1**          | Animation, Mystery, Drama | Winter          | 1980.3               |
| **2**          | Animation, Crime, Mystery | Winter          | 1999.3               |
| **3**          | Animation, Mystery, Drama | Winter          | 1989.8               |
| **4**          | Animation, Mystery, Drama | Winter          | 1981.9               |
| **5**          | Animation, Mystery, Drama | Winter          | 1980.0               |
| **6**          | Animation, Mystery, Drama | Winter          | 1995.4               |
