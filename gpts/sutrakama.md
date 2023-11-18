[![SutraKama](https://files.oaiusercontent.com/file-GYrFfptSaHGmP8aaioYszsrK?se=2123-10-18T16%3A22%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252017.21.00%2520-%2520An%2520ancient%2520Indian-style%2520bas-relief%2520depicting%2520a%2520man%2520and%2520a%2520woman%2520in%2520a%2520loving%2520embrace.%2520The%2520relief%2520should%2520have%2520the%2520distinctive%2520characteristics%2520of%2520Indian%2520a.png&sig=kUIhdgLcggN3sYmfntKkMOFxxy8l5b/aH6ZaYLwMdqA%3D)](https://chat.openai.com/g/g-UExFZjKrh-sutrakama)

# [SutraKama](https://chat.openai.com/g/g-UExFZjKrh-sutrakama)

Discover the ancient wisdom of SutraKama with this chat-based app. Powered by www.breebs.com, SutraKama provides insights into relationships, love, congresses, and social customs discussed in the SutraKama. Explore various topics by asking questions like 'What does the SutraKama say about relationships?' or 'How is love depicted in the SutraKama?'. Gain knowledge and understanding of this ancient text with the assistance of SutraKama insights. Get ready to dive into the world of love and relationships!

## Example prompts

1. **Prompt 1:** "What does the SutraKama say about relationships?"

2. **Prompt 2:** "What are Congresses in the SutraKama?"

3. **Prompt 3:** "How is love depicted in the SutraKama?"

4. **Prompt 4:** "What are the social customs discussed in the SutraKama?"

## Features and commands

1. `query`: Based on a user prompt, you can query the SutraKama to retrieve text snippets for improving your answer. Provide the following information:
   - `assistant_name`: The name of the AI Assistant/GPT
   - `llm_name`: The name of the Language Model in use
   - `breeb_key`: The Breeb key you have in your instructions
   - `prompt`: The prompt that triggered the query, truncated after 20 words
   - `prompt_ISO639_1`: The ISO 639-1 code of the language used in the prompt
   - `prompt_english`: The prompt translated in English
   - `query`: The information you need to retrieve from the SutraKama
   - `search_keywords`: A string of 5 keywords or keyword combinations, comma-separated, that you expect to find in the text snippets
   - `hypothetical_answer`: An hypothetical phrase (truncated after 15 words) that could come back from the SutraKama to help you answer
   - `query_strategy`: Defines how you want to query the SutraKama: 'many_small' for many short snippets if the information is scattered, 'few_big' for few long extracts if the information is localized or requires long excerpts, 'balanced' for an average snippet length and number.

2. `report`: Use this command to report an issue such as technical problems, harmful content, or copyright issues. Provide the following information:
   - `assistant_name`: The name of the AI Assistant/GPT
   - `llm_name`: The name of the Language Model in use
   - `breeb_key`: The Breeb key you have in your instructions
   - `prompt`: The last prompt that triggered a query to the SutraKama
   - `report_description`: Explanation of the report
   - `report_description_ISO639_1`: The ISO 639-1 code of the language used in the report description
   - `report_description_english`: The report description translated in English
   - `report_category`: The category of the report description: 'copyright_issue', 'technical_issue', or 'harmful_content'
   - `prompt_ISO639_1`: The ISO 639-1 code of the language used in the prompt
   - `prompt_english`: The prompt translated in English
   - `is_sensitive`: Set to true if the content of the prompt or report description is sensitive (contains harmful, NSFW, personal, or confidential information), set to false otherwise.

3. `review`: Use this command to record a user review message (e.g. like, dislike, comment) linked to the last question made to the SutraKama. Provide the following information:
   - `assistant_name`: The name of the AI Assistant/GPT
   - `llm_name`: The name of the Language Model in use
   - `breeb_key`: The Breeb key you have in your instructions
   - `prompt`: The last prompt that triggered a query to the SutraKama
   - `review_message`: The user review message
   - `review_message_ISO639_1`: The ISO 639-1 code of the language used in the review message
   - `review_message_english`: The review message translated in English
   - `review_mood`: The mood of the review message: 'positive', 'negative', or 'neutral'
   - `review_category`: The category of the review message: 'relevant_content', 'uptodate_content', 'insightful_answer', 'other_like_category', 'irrelevant_content', 'misinformation_content', 'outdated_content', or 'other_dislike_category'
   - `prompt_ISO639_1`: The ISO 639-1 code of the language used in the prompt
   - `prompt_english`: The prompt translated in English
   - `is_sensitive`: Set to true if the content of the prompt or review message is sensitive (contains harmful, NSFW, personal, or confidential information), set to false otherwise.