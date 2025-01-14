# Classification Analysis 

## is_popular Classification

### Feature Selection

To analyze movie success and popularity, the following steps were performed:

- A **combined popularity score** was computed using a weighted average of features:
  - **Popularity**: Weight = 0.5
  - **ROI**: Weight = 0.3
  - **Vote Average**: Weight = 0.2
- A threshold was set at the **median** of the combined score to classify movies as:
  - **Popular (`is_popular = 1`)**
  - **Not Popular (`is_popular = 0`)**

#### Results:

**Distribution of `is_popular`**:
| `is_popular` | Proportion |
|--------------|------------|
| 0 (Not Popular) | 50.57% |
| 1 (Popular) | 49.43% |

---

### Train-Test Split

- The dataset was split into:
  - **80% Training Set**
  - **20% Testing Set**
- The split was stratified to maintain the class proportions.

#### Results:

**Train/Test Set Distribution**:
| Class | Train Proportion | Test Proportion |
|-------|------------------|-----------------|
| 0 | 50.57% | 50.57% |
| 1 | 49.43% | 49.43% |

**Number of Samples**:

- **Train Set**: 16,484 samples
- **Test Set**: 4,121 samples

---

### Model Training and Initial Accuracy

Three models were trained:

1. **Decision Tree**
2. **SVM**
3. **Naive Bayes**

#### Results:

**Training Accuracies**:
| Model | Training Accuracy |
|-------------------|-------------------|
| **Decision Tree** | 1.00 |
| **SVM** | 1.00 |
| **Naive Bayes** | 0.78 |

---

### Hyperparameter Tuning

#### Best Parameters:

| Model             | Best Parameters                                             |
| ----------------- | ----------------------------------------------------------- |
| **Decision Tree** | `max_depth=10`, `min_samples_split=2`, `min_samples_leaf=1` |
| **SVM**           | `C=1`, `gamma=scale`, `kernel=linear`                       |
| **Naive Bayes**   | `var_smoothing=1e-09`                                       |

---

### Test Set Evaluation

The tuned models were evaluated on the test set.

#### Results:

**Test Accuracies**:
| Model | Accuracy |
|-------------------|----------|
| **Decision Tree** | 1.00 |
| **SVM** | 1.00 |
| **Naive Bayes** | 0.79 |

**Classification Reports**:

#### **Decision Tree**:

| Class | Precision | Recall | F1-Score |
| ----- | --------- | ------ | -------- |
| **0** | 1.00      | 1.00   | 1.00     |
| **1** | 1.00      | 1.00   | 1.00     |

#### **SVM**:

| Class | Precision | Recall | F1-Score |
| ----- | --------- | ------ | -------- |
| **0** | 0.99      | 1.00   | 1.00     |
| **1** | 1.00      | 0.99   | 1.00     |

#### **Naive Bayes**:

| Class | Precision | Recall | F1-Score |
| ----- | --------- | ------ | -------- |
| **0** | 0.71      | 0.98   | 0.83     |
| **1** | 0.96      | 0.60   | 0.74     |

---

### Misclassification Analysis

The number of misclassified movies for each model was calculated:

**Misclassified Movies**:
| Model | Misclassified Movies |
|-------------------|-----------------------|
| **Decision Tree** | 2940 |
| **SVM** | 2935 |
| **Naive Bayes** | 2934 |

---

### Failed vs. Successful Movies Analysis

#### Feature Distribution Visualizations:

1. **Budget**:
   ![alt text](/public/phase-2/image-19.png)

2. **Popularity**:
   ![alt text](/public/phase-2/image-18.png)

3. **ROI**:
   ![alt text](/public/phase-2/image-17.png)

---

### Feature Importance:

The **Decision Tree** model identified the following feature importances:

| Feature        | Importance |
| -------------- | ---------- |
| **Popularity** | 0.974      |
| **ROI**        | 0.017      |
| **Budget**     | 0.008      |

- **Popularity** is the dominant feature for determining movie success, followed by **ROI**.

## vote_average Classification

### Discretization:

- The `vote_average` column was divided into **4 equal-frequency bins**:
  - **Class 1**: 5.02 to 6.00
  - **Class 2**: 6.00 to 6.21
  - **Class 3**: 6.21 to 6.45
  - **Class 4**: 6.45 to 7.64

### Distribution of Classes:

| Class       | Count |
| ----------- | ----- |
| **Class 1** | 5928  |
| **Class 2** | 4601  |
| **Class 3** | 5116  |
| **Class 4** | 4960  |

---

### Feature Selection

The following features were selected for predicting `vote_average_category`:

- **ROI** (Revenue-to-Budget Ratio)
- **Popularity**
- **Budget**
- **Revenue**

#### Target Variable Distribution:

| Class       | Count |
| ----------- | ----- |
| **Class 1** | 5928  |
| **Class 2** | 4601  |
| **Class 3** | 5116  |
| **Class 4** | 4960  |

---

### Train-Test Split

The dataset was split into:

- **80% Training Set**
- **20% Testing Set**

#### Train-Test Distribution:

| Class       | Train Proportion | Test Proportion |
| ----------- | ---------------- | --------------- |
| **Class 1** | 28.77%           | 28.78%          |
| **Class 2** | 22.33%           | 22.32%          |
| **Class 3** | 24.83%           | 24.82%          |
| **Class 4** | 24.07%           | 24.07%          |

---

### Model Training and Initial Accuracy

Three models were trained on the training data:

1. **Decision Tree**
2. **SVM**
3. **Naive Bayes**

#### Training Accuracies:

| Model             | Training Accuracy |
| ----------------- | ----------------- |
| **Decision Tree** | 0.30              |
| **SVM**           | 0.29              |
| **Naive Bayes**   | 0.24              |

---

### Hyperparameter Tuning

#### Best Parameters:

| Model             | Best Parameters                                             |
| ----------------- | ----------------------------------------------------------- |
| **Decision Tree** | `max_depth=10`, `min_samples_leaf=5`, `min_samples_split=2` |
| **SVM**           | `C=0.1`, `gamma=scale`                                      |
| **Naive Bayes**   | `var_smoothing=1e-07`                                       |

---

### Test Set Evaluation

The tuned models were evaluated on the test set for accuracy and classification performance.

#### Test Accuracies:

| Model             | Accuracy |
| ----------------- | -------- |
| **Decision Tree** | 0.29     |
| **SVM**           | 0.29     |
| **Naive Bayes**   | 0.29     |

#### Classification Reports:

##### Decision Tree:

| Class       | Precision | Recall | F1-Score |
| ----------- | --------- | ------ | -------- |
| **Class 1** | 0.282     | 0.943  | 0.434    |
| **Class 2** | 0.286     | 0.004  | 0.009    |
| **Class 3** | 0.227     | 0.005  | 0.010    |
| **Class 4** | 0.435     | 0.054  | 0.097    |

##### SVM:

| Class       | Precision | Recall | F1-Score |
| ----------- | --------- | ------ | -------- |
| **Class 1** | 0.288     | 1.000  | 0.447    |
| **Class 2** | 0.000     | 0.000  | 0.000    |
| **Class 3** | 0.000     | 0.000  | 0.000    |
| **Class 4** | 0.000     | 0.000  | 0.000    |

##### Naive Bayes:

| Class       | Precision | Recall | F1-Score |
| ----------- | --------- | ------ | -------- |
| **Class 1** | 0.288     | 0.995  | 0.447    |
| **Class 2** | 0.000     | 0.000  | 0.000    |
| **Class 3** | 0.200     | 0.001  | 0.002    |
| **Class 4** | 0.316     | 0.006  | 0.012    |

---

### Feature Validation

#### Correlation vs. Decision Tree Importance:

| Feature        | Correlation with `vote_average` | Decision Tree Importance |
| -------------- | ------------------------------- | ------------------------ |
| **Popularity** | -0.005249                       | 0.974231                 |
| **ROI**        | -0.000980                       | 0.017402                 |
| **Budget**     | 0.002067                        | 0.008368                 |

#### Observations:

- **Popularity** dominates as the most important feature for the Decision Tree model.
- Correlations for other features are weak and show minimal importance in the model.