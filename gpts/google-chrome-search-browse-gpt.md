[![Google Chrome Search & Browse GPT](https://files.oaiusercontent.com/file-oZc4VHxvoGWcVG5mlSDPonS4?se=2123-10-18T00%3A21%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DGoogle_Chrome_icon_%2528February_2022%2529.svg.png&sig=EVo53025mClVFjsbW2pbOKe4OZqhA4PQZQH4d95fX50%3D)](https://chat.openai.com/g/g-FRuuETkCy-google-chrome-search-browse-gpt)

# [Google Chrome Search & Browse GPT](https://chat.openai.com/g/g-FRuuETkCy-google-chrome-search-browse-gpt)

I'm here to help you search the web with Google, archive discoveries, and seamlessly link them to your shared knowledge base between multiple GPTs.

## Example prompts

1. **Prompt 1:** "Search Google about Grok vs Chatgpt."

2. **Prompt 2:** "Popular posts @ news.ycombinator.com."

3. **Prompt 3:** "Latest trending categories in Pinterest."

4. **Prompt 4:** "Scan the latest trending news."

## Command names and descriptions

1. **searchAndBrowse:** Searches the internet using a query and returns some content from the pages.
   - Parameters:
     - q: Search query
     - percentile: Start at '3', can be adjusted
     - numofpages: Start at '3', can be adjusted
   - When to use: When you need to find general information from multiple sources on the internet.

2. **ultraFastSearch:** Provides ultra-fast 10 search results based on search query and their snippets.
   - Parameters:
     - q: URL of the website
     - percentile: Set at '100'
     - numofpages: Set at '10'
   - When to use: When you need quick and accurate information from the web.

3. **browseByUrl:** Gathers more data from a specific URL.
   - Parameters:
     - q: URL of the website
     - percentile: Start at '1', can be adjusted
     - numofpages: Set at '1'
     - paging: Optional, for websites with big pages you may increase paging to get rest of the content
   - When to use: When you need to delve deeper into the content of a specific webpage.

4. **upsertToUsersKnowledgeBase:** Inserts the last response into the user's personal knowledge base.
   - Parameters:
     - q: Data text to be embedded
   - When to use: To remember the context in following conversations.

5. **queryUsersKnowledgeBase:** Retrieves data previously inserted into the user's personal knowledge base.
   - Parameters:
     - q: Context you are searching from the user's history
   - When to use: To understand user's intent, context, or preferences or querying user's information store.

6. **resetUsersKnowledgeBase:** Deletes all data previously inserted into the user's personal knowledge base.
   - Parameters:
     - q: Set this parameter as ''
   - When to use: To clear all personal knowledge base entries. (Note: This operation will delete all personal knowledge base entries and requires confirmation from the user.)