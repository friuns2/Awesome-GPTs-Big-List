[![Decision Journal](https://files.oaiusercontent.com/file-TXT7HWUBINgfZkqgu2kmnNiV?se=2123-10-14T18%3A34%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dicon-rounded.png&sig=/9CZNxcdZw/kqNEg8x9bKW0vU5pj9FEp0OblgNmM4BQ%3D)](https://chat.openai.com/g/g-Yrhca6pAj-decision-journal)

# [Decision Journal](https://chat.openai.com/g/g-Yrhca6pAj-decision-journal)

The Decision Journal app is your personal assistant for making decisions. It helps you keep track of the decisions you've made and review them later on. Whether you need help deciding on a new job, choosing a school, or investing in a stock, this app has got you covered. With its simple and intuitive interface, you can create and update decisions easily. Plus, it provides valuable insights into the outcomes of your decisions, allowing you to understand the role of skill and luck. Take control of your decision-making process with the Decision Journal app!

## Example prompts

1. **Prompt 1:** "Help me make a decision about a new job."

2. **Prompt 2:** "I'd like help deciding between what school to go to."

3. **Prompt 3:** "I need help deciding on a job candidate."

4. **Prompt 4:** "Help me decide on a new house."

5. **Prompt 5:** "I need help deciding whether or not to invest in a stock."


## Features and commands

1. **Get Decisions**
   - Description: Get decisions with a query and optional filters as parameters. Refine results by status or whether or not they are due for review.
   - Command: `get_decisions <parameters>`
   - Example: `get_decisions status=published limit=5`
   
2. **Create Decision**
   - Description: Create decisions with information about the decision (e.g. title, tags, expected outcomes, feelings, etc). Set the status to "published" when the decision has been made. All decisions not yet made should be "draft" status.
   - Command: `create_decision <decision_data>`
   - Example: `create_decision {"title": "New Job Decision", "status": "draft", "tags": ["job", "career"], "expectedOutcome": "Job satisfaction and growth"}`
   
3. **Get Decision** 
   - Description: Get a specific decision with its id.
   - Command: `get_decision <decision_id>`
   - Example: `get_decision 123456`
   
4. **Update Decision**
   - Description: Update a specific decision with information about the decision. Update the decision's status to "published" when the decision has been made.
   - Command: `update_decision <decision_id> <decision_data>`
   - Example: `update_decision 123456 {"status": "published", "outcomeEstimates": [{"text": "Positive outcome", "probability": "70%"}, {"text": "Negative outcome", "probability": "30%"}]}`
   
5. **Create Review**
   - Description: Create a review for a decision with information about the review (e.g. accuracy score, actual outcome, learnings, etc). Set the status to "published" when the review has been finalized. Otherwise, the status should be "draft".
   - Command: `create_review <decision_id> <review_data>`
   - Example: `create_review 123456 {"accuracyScore": 8, "actualOutcome": "Positive", "skillLuckWeight": 0.6, "outcomeEstimates": [{"text": "Positive outcome", "probability": "80%"}, {"text": "Negative outcome", "probability": "20%"}]}`
   
6. **Update Review**
   - Description: Update a review for a decision with information about the review (e.g. accuracy score, actual outcome, learnings, etc). Set the status to "published" when the review has been finalized. Otherwise, the status should be "draft".
   - Command: `update_review <decision_id> <review_data>`
   - Example: `update_review 123456 {"learningsAndReview": "I learned a lot from this decision and the outcome was positive.", "skillLuckWeight": 0.7}`