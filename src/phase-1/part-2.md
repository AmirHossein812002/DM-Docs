# Part 2 Analysis

## Data Quality

![alt text](/public/image-20.png)

### Metrics Overview

- **Count**: Total entries per column.
- **Null Count**: Entries with missing (null) data.
- **Zero Count**: Entries with a zero value, possibly placeholders in numerical fields.
- **Accuracy (%)**: Percentage of non-zero, non-null values, indicating reliable data.
- **Completeness (%)**: Percentage of non-null values.
- **Validity (%)**: Percentage of entries with valid (non-zero, non-null) data.
- **Consistency (%)**: Uniformity based on patterns or standards.
- **Currentness (%)**: Applies to `release_date` only, reflecting how recent the data is.

### Key Findings

1. **Revenue and Budget**
   - **Low Accuracy and Validity**: Very low scores for accuracy (2.12% for revenue, 3.08% for budget) due to many zero values, likely placeholders.
   - **Completeness**: Fully complete but with high zero counts, affecting reliability.
   - **Consistency**: Low consistency (0.48%), likely due to inconsistent entries.

2. **Release Date**
   - **High Accuracy and Validity**: Scores show most dates are valid.
   - **Completeness**: High completeness (95.88%), with minimal missing data.
   - **Currentness**: Low currentness (35.95%) suggests older entries dominate.

### Summary

- **Revenue and Budget**: High zero counts and low accuracy limit reliability.
- **Release Date**: Generally accurate but lacks recent entries.

### Recommendations

1. **Replace Zeros in Financial Data**: Use estimates or imputation to improve accuracy.
2. **Add Recent Data**: Update `release_date` for better currentness.
3. **Standardize Data Entry**: Clear entry guidelines can improve consistency.

These changes will enhance data quality for more reliable analysis.

## Column-by-Column Analysis

This section reviews each column, highlighting data issues and proposing simple fixes.

---

### 1. **Revenue**

- **Issues**:
  - **Zero Values**: Many entries have zero revenue, likely missing data.
  - **Low Accuracy**: Only 2.12% of records are valid.
- **Recommendations**:
  - **Impute Missing Data**: Estimate revenue for zero entries.
  - **Cross-Verify**: Check against external data sources.

### 2. **Budget**

- **Issues**:
  - **Zero Values**: High number of zero entries, indicating missing data.
  - **Low Accuracy**: Only 3.08% of records are valid.
- **Recommendations**:
  - **Estimate Budgets**: Use averages by genre or revenue.
  - **Standardize Entries**: Set clear guidelines for budget entry.

### 3. **Release Date**

- **Issues**:
  - **Missing Dates**: Around 4% lack release dates.
  - **Outdated Records**: Low currentness score.
- **Recommendations**:
  - **Estimate Missing Dates**: Use references if available.
  - **Filter Older Entries**: Focus on recent data when relevant.

### 4. **Vote Average**

- **Issues**:
  - **Low Vote Counts**: Skews ratings for some entries.
- **Recommendations**:
  - **Weighted Ratings**: Apply weights to low-vote entries.

### 5. **Vote Count**

- **Issues**:
  - **Low Counts**: Some entries have few votes, affecting analysis.
- **Recommendations**:
  - **Set Minimum Threshold**: Filter out low vote counts.

### 6. **Genres**

- **Issues**:
  - **Multiple Genres**: Some movies list several genres.
- **Recommendations**:
  - **Standardize Labels**: Use consistent genre names.

### 7. **Production Companies**

- **Issues**:
  - **Multiple Entries**: Some movies list more than one company.
- **Recommendations**:
  - **Consistent Naming**: Standardize company names.

### 8. **Popularity**

- **Issues**:
  - **Skewed Scores**: High popularity for recent films may skew data.
- **Recommendations**:
  - **Adjust for Release Year**: Normalize scores by release year.

### 9. **Spoken Languages**

- **Issues**:
  - **Multiple Languages**: Some entries have several languages.
- **Recommendations**:
  - **Primary Language Tag**: Add a tag for the main language.

### 10. **Adult**

- **Issues**:
  - **Limited Data**: Few entries marked as adult.
- **Recommendations**:
  - **Detailed Ratings**: Add more specific content ratings if possible.

This analysis provides a straightforward roadmap for improving data quality and consistency in each column.

## Data Quality Improvements

1. **Impute or Replace Missing Values**:
   - Use estimates to fill missing values in `budget`, `revenue`, and `release_date` based on similar records.

2. **Standardize Data Entry**:
   - Set consistent entry rules for `genres`, `production_companies`, and `spoken_languages`.

3. **Use External Data Sources**:
   - Cross-check `budget`, `revenue`, and `release_date` with external sources like IMDb for accuracy.

4. **Flag Outliers for Review**:
   - Mark outliers in `vote_average`, `vote_count`, `popularity`, `revenue`, and `budget` for further investigation.

5. **Document Data Transformation Rules**:
   - Keep a record of data transformations to ensure transparency.

### Single-Schema Problems

1. **Inconsistent Zero Values**:
   - Ensure zeros in `budget` and `revenue` represent actual zeroes, not missing data. Use `NaN` for missing values.

2. **Standard Naming Conventions**:
   - Apply consistent naming for `genres`, `spoken_languages`, and `production_companies`.

### Single-Instance Problems

1. **Outliers in Financial Data**:
   - Review extreme values in `revenue` and `budget` for accuracy.

2. **Non-Numeric Entries in Numeric Fields**:
   - Confirm that numeric fields contain only valid numbers.

3. **Invalid Dates**:
   - Check `release_date` entries to avoid future or implausible dates.

Implementing these changes will improve the dataset’s quality, making it more reliable for analysis.
