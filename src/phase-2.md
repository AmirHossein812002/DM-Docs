# Phase 2 Analysis

## Data Quality

![alt text](/public/image-20.png)

| Metric               | Explanation                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| **Count**            | The total number of records in each column.                                                           |
| **Null Count**       | The number of records with null values only, indicating missing data.                                 |
| **Zero Count**       | The number of records with a zero value, indicating potentially inaccurate data for numerical fields. |
| **Accuracy (%)**     | The proportion of records with non-zero, non-null values, indicating accurate data.                   |
| **Completeness (%)** | The proportion of non-null records, meaning only null values affect this metric.                      |
| **Validity (%)**     | The proportion of records considered valid (non-zero or non-null) for each column.                    |
| **Consistency (%)**  | The degree of consistency in data, which can vary based on business rules or patterns in the dataset. |
| **Currentness (%)**  | Only applicable to `release_date`, reflecting how up-to-date the entries are.                         |

### Key Findings

1. **Revenue and Budget Columns**

   - **Low Accuracy and Validity**: Both `revenue` and `budget` columns have very low accuracy (2.12% for revenue and 3.08% for budget). This low accuracy is primarily due to the high occurrence of zero values, indicating that much of the data in these columns may not represent actual financial data.
   - **Completeness**: Both columns show 100% completeness, meaning there are no null values in these fields. However, the high zero counts (50,845 for revenue and 50,342 for budget) suggest that zero values are used as placeholders, affecting data reliability.
   - **Consistency**: The consistency scores (0.48%) are also low, which may indicate variations in data entry or incomplete information, particularly with budget and revenue values.

2. **Release Date Column**
   - **High Accuracy and Validity**: The `release_date` column has relatively high accuracy and validity scores (95.88%), indicating that most entries have valid dates.
   - **Completeness**: The completeness score of 95.88% reflects some null values, but the majority of records are complete for this column.
   - **Consistency**: With a consistency score of 95.85%, the `release_date` data appears to be relatively consistent.
   - **Currentness**: The currentness score of 35.95% suggests that much of the data is older and may not reflect recent releases. This is an important consideration if up-to-date information is essential.

### Overall Data Quality Summary

- **Revenue and Budget**: These columns suffer from substantial quality issues, with high zero counts and low accuracy, validity, and consistency scores. This limits the usability of financial data for accurate analysis, as zero values are prevalent.
- **Release Date**: This column has high completeness, accuracy, and validity. However, the low currentness score indicates that a significant portion of the data may be outdated.

### Recommendations

1. **Address Zero Values in Financial Data**: Since zero values likely represent missing data, consider filling them with estimates or using imputation techniques based on similar records to improve accuracy.

2. **Update Data for Recent Releases**: Updating the dataset with recent entries, especially for `release_date`, can enhance the currentness score and provide a more accurate view of trends.

3. **Implement Data Consistency Standards**: Establishing consistency rules for data entry can reduce the use of placeholders and improve the dataset's reliability.

By implementing these changes, the dataset can achieve better quality, making it more suitable for comprehensive analysis.

## Column-by-Column Analysis

This section provides a detailed analysis of each column in the dataset, identifying issues and recommending improvements.

---

### 1. **Revenue**

- **Issues**:
  - **Zero Values**: Many records have zero in the `revenue` column, likely indicating missing data rather than actual zero revenue.
  - **Low Accuracy and Validity**: Only 2.12% of records contain reliable revenue data.
  - **Consistency**: Low consistency (0.48%) suggests inconsistencies in data entry.
- **Recommendations**:
  - **Impute Missing Values**: For records with zero revenue, impute values based on similar movies (e.g., same genre, budget).
  - **External Verification**: Cross-reference with external sources (e.g., IMDb).
  - **Flag Records for Review**: Mark zero revenue records for manual verification.

### 2. **Budget**

- **Issues**:
  - **Zero Values**: Similar to `revenue`, `budget` has numerous zero values, likely indicating missing data.
  - **Low Accuracy and Validity**: Only 3.08% of records have reliable budget data.
  - **Consistency**: Low consistency (0.48%) suggests recording inconsistencies.
- **Recommendations**:
  - **Impute or Estimate Budget**: Use median or mean imputation based on genre, revenue, and popularity.
  - **External Verification**: Validate data with external databases.
  - **Standardize Data Entry**: Set guidelines for budget recording.

### 3. **Release Date**

- **Issues**:
  - **Null Values**: Around 4% of records are missing release dates.
  - **Currentness**: Low currentness score (35.95%) suggests many records are outdated.
- **Recommendations**:
  - **Estimate Missing Dates**: For movies without release dates, use available references.
  - **Filter Older Entries**: Focus on recent records if more relevant.
  - **Standardize Date Format**: Use a consistent date format (e.g., YYYY-MM-DD).

### 4. **Vote Average**

- **Issues**:
  - **Skewed Distribution**: Low vote counts may cause skewed ratings.
  - **Potential Outliers**: Extremely high or low ratings could indicate outliers.
- **Recommendations**:
  - **Normalize Ratings**: Consider a weighted rating approach for low-vote movies.
  - **Flag Outliers**: Identify movies with very high or low ratings for review.

### 5. **Vote Count**

- **Issues**:
  - **Sparse Data**: Some records have low vote counts, affecting popularity assessments.
  - **Outliers**: Exceptionally high vote counts may skew analyses.
- **Recommendations**:
  - **Filter Low Counts**: Apply a minimum vote threshold.
  - **Flag High Outliers**: Mark movies with very high vote counts for review.

### 6. **Genres**

- **Issues**:
  - **Multiple Genres**: Some movies have multiple genres, complicating genre analysis.
  - **Inconsistent Labels**: Potential inconsistencies in genre names.
- **Recommendations**:
  - **Standardize Genre Labels**: Ensure consistent naming across genres.
  - **Split Multi-Genre Entries**: For analysis, separate multi-genre entries into individual rows.

### 7. **Production Companies**

- **Issues**:
  - **Multiple Companies**: Some movies have multiple production companies listed.
  - **Sparse Data for Small Companies**: Small companies may only appear once or twice.
- **Recommendations**:
  - **Standardize Company Names**: Ensure consistent company naming.
  - **Focus on Major Companies**: Analyze companies with significant movie counts.

### 8. **Popularity**

- **Issues**:
  - **Skewed Distribution**: Some movies may have high popularity due to recent promotion, skewing the data.
  - **Potential Outliers**: High popularity scores may distort average calculations.
- **Recommendations**:
  - **Normalize Popularity Scores**: Adjust scores relative to release year.
  - **Identify Outliers**: Flag movies with exceptionally high popularity scores for review.

### 9. **Spoken Languages**

- **Issues**:
  - **Multiple Languages**: Some movies include multiple languages.
  - **Inconsistent Language Codes**: Language labels may vary.
- **Recommendations**:
  - **Standardize Language Labels**: Ensure consistent naming.
  - **Primary Language Indicator**: Add a primary language label if possible.

### 10. **Adult**

- **Issues**:
  - **Binary Classification Only**: Limited insights from a binary `adult` indicator.
  - **Sparse Data for Adult Movies**: Few movies are tagged as adult, limiting its relevance.
- **Recommendations**:
  - **Enhance Classification**: Add detailed content ratings if available.
  - **Filter Based on Analysis Goals**: Focus on non-adult movies if analyzing general trends.

## Data Quality Improvements

1. **Impute or Replace Missing Values**:

   - Use appropriate imputation methods for missing values in `budget`, `revenue`, and `release_date`.

2. **Standardize Data Entry**:

   - Define clear data entry standards to maintain consistency, especially for `genres`, `production_companies`, and `spoken_languages`.

3. **Use External Data Sources**:

   - Integrate external sources (e.g., IMDb) for validation and enrichment of budget, revenue, and release date data.

4. **Flag Outliers for Review**:

   - Identify and flag outliers in `vote_average`, `vote_count`, `popularity`, `revenue`, and `budget` for further review.

5. **Document Data Transformation Rules**:
   - Keep records of transformations and replacements to ensure transparency and reproducibility.

### Single-Schema Problems

1. **Inconsistent Representation of Zero Values**:

   - Zero values should only represent actual zero values in `budget` and `revenue`, not missing data. Use `NaN` for missing data instead.

2. **Lack of Standard Naming Conventions**:
   - Ensure consistent naming conventions across `genres`, `spoken_languages`, and `production_companies`.

### Single-Instance Problems

1. **Outliers in Financial Fields**:

   - Review records with extreme values in `revenue` and `budget` to ensure they are accurate.

2. **Non-Numeric Entries in Numeric Columns**:

   - Ensure numeric fields do not contain non-numeric entries.

3. **Invalid or Implausible Dates**:
   - Validate `release_date` entries to ensure they are plausible (e.g., no future dates).

By addressing these issues and implementing the recommended strategies, the dataset will become more accurate, consistent, and suitable for reliable analysis.