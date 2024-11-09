# Phase 2 Analysis

## Data Quality

![alt text](/public/image-20.png)

| Metric               | Explanation                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| **Count**            | Total number of records in each column.                                                               |
| **Null Count**       | Number of records with null values only, indicating missing data.                                     |
| **Zero Count**       | Number of records with zero values, potentially indicating inaccurate data for numerical fields.      |
| **Accuracy (%)**     | Proportion of records with non-zero, non-null values, indicating accurate data.                       |
| **Completeness (%)** | Proportion of non-null records, meaning only null values affect this metric.                          |
| **Validity (%)**     | Proportion of records considered valid (non-zero or non-null) for each column.                        |
| **Consistency (%)**  | Degree of consistency in data, based on patterns or business rules.                                   |
| **Currentness (%)**  | Applicable to `release_date`, reflecting how up-to-date the entries are.                              |

### Key Findings

1. **Revenue and Budget Columns**
   - **Low Accuracy and Validity**: `Revenue` and `budget` have very low accuracy scores (2.12% for revenue and 3.08% for budget), mainly due to high zero counts, suggesting these values might be placeholders rather than actual data.
   - **Completeness**: Both columns show 100% completeness, with no null values. However, high zero counts (50,845 for revenue and 50,342 for budget) affect data reliability.
   - **Consistency**: The consistency scores (0.48%) are low, indicating likely inconsistencies in data entry for financial fields.

2. **Release Date Column**
   - **High Accuracy and Validity**: The `release_date` column has high accuracy and validity scores (95.88%), meaning most entries are valid dates.
   - **Completeness**: With a completeness score of 95.88%, this column has minimal missing data.
   - **Currentness**: A currentness score of 35.95% suggests much of the data is older, so recent releases might not be well-represented.

### Overall Data Quality Summary

- **Revenue and Budget**: These columns face major quality issues due to high zero counts and low accuracy and consistency. This limits the reliability of financial data for analysis.
- **Release Date**: While generally complete and accurate, `release_date` has a low currentness score, meaning many entries may be outdated.

### Recommendations

1. **Address Zero Values in Financial Data**: Consider replacing zero values with estimates or using imputation techniques to improve data accuracy.
2. **Update Recent Entries**: Adding more recent data, especially in `release_date`, can enhance currentness and help capture recent trends.
3. **Improve Data Consistency Standards**: Setting clear standards for data entry can reduce placeholder values and improve overall reliability.

Implementing these changes can enhance data quality, making the dataset more robust for detailed analysis.

## Column-by-Column Analysis

This section provides an overview of each column in the dataset, identifying data issues and suggesting improvements.

---

### 1. **Revenue**

- **Issues**:
  - **Zero Values**: Many entries have zero in `revenue`, likely indicating missing data.
  - **Low Accuracy**: Only 2.12% of records contain valid revenue data.
  - **Inconsistencies**: Low consistency suggests varying data entry practices.
- **Recommendations**:
  - **Impute Missing Data**: Fill zero values with estimated revenue based on similar films.
  - **Cross-Verify**: Validate with external sources.
  - **Flag Zero Entries**: Mark these records for review.

### 2. **Budget**

- **Issues**:
  - **Zero Values**: Many zero entries, indicating possible missing data.
  - **Low Accuracy**: Only 3.08% of records have reliable budget data.
- **Recommendations**:
  - **Estimate Missing Budgets**: Use average budget values based on genre or revenue.
  - **Standardize Entries**: Set clear budget entry guidelines.

### 3. **Release Date**

- **Issues**:
  - **Missing Dates**: Around 4% of entries lack release dates.
  - **Outdated Records**: Low currentness score indicates older data.
- **Recommendations**:
  - **Estimate Missing Dates**: Use references where available.
  - **Filter Older Entries**: Focus on recent data if more relevant.

### 4. **Vote Average**

- **Issues**:
  - **Low Vote Count Influence**: Low vote counts may skew ratings.
- **Recommendations**:
  - **Weighted Ratings**: Use a weighted approach to account for low-vote entries.

### 5. **Vote Count**

- **Issues**:
  - **Low Counts**: Some entries have few votes, affecting analysis.
  - **Outliers**: Exceptionally high counts could skew results.
- **Recommendations**:
  - **Set Minimum Threshold**: Filter entries with low vote counts.

### 6. **Genres**

- **Issues**:
  - **Multiple Genres**: Some movies list multiple genres.
- **Recommendations**:
  - **Standardize Labels**: Ensure consistent genre names.

### 7. **Production Companies**

- **Issues**:
  - **Multiple Entries**: Some movies list multiple companies.
- **Recommendations**:
  - **Consistent Naming**: Standardize company names for analysis.

### 8. **Popularity**

- **Issues**:
  - **Skewed Scores**: High popularity for recent films may skew data.
- **Recommendations**:
  - **Adjust for Release Year**: Normalize scores based on the release date.

### 9. **Spoken Languages**

- **Issues**:
  - **Multiple Languages**: Some movies list several languages.
- **Recommendations**:
  - **Primary Language Tag**: Add an indicator for the primary language.

### 10. **Adult**

- **Issues**:
  - **Limited Data**: Few entries are marked as adult.
- **Recommendations**:
  - **Additional Ratings**: Add more detailed content ratings if available.
  
This column-by-column analysis provides a roadmap for improving data quality and consistency in the dataset.

## Data Quality Improvements

1. **Impute or Replace Missing Values**:
   - Apply imputation methods for missing values in `budget`, `revenue`, and `release_date` using estimates or similar records.

2. **Standardize Data Entry**:
   - Set clear standards for entering data consistently, particularly for `genres`, `production_companies`, and `spoken_languages`.

3. **Use External Data Sources**:
   - Validate and enhance `budget`, `revenue`, and `release_date` data with external sources like IMDb.

4. **Flag Outliers for Review**:
   - Identify and mark outliers in `vote_average`, `vote_count`, `popularity`, `revenue`, and `budget` for further investigation.

5. **Document Data Transformation Rules**:
   - Maintain records of data transformations and replacements to support transparency and reproducibility.

### Single-Schema Problems

1. **Inconsistent Representation of Zero Values**:
   - Ensure zero values in `budget` and `revenue` reflect actual zeroes, not missing data. Use `NaN` for missing entries instead.

2. **Lack of Standard Naming Conventions**:
   - Standardize names across `genres`, `spoken_languages`, and `production_companies`.

### Single-Instance Problems

1. **Outliers in Financial Fields**:
   - Review extreme values in `revenue` and `budget` to ensure accuracy.

2. **Non-Numeric Entries in Numeric Columns**:
   - Verify that numeric fields contain only valid numeric entries.

3. **Invalid or Implausible Dates**:
   - Check `release_date` entries for validity (e.g., no future dates).

By implementing these improvements, the dataset will be more accurate, consistent, and better suited for reliable analysis.