[![Enlighten Tutor](https://files.oaiusercontent.com/file-khDlMV1C2IZXSJFOfkdnjK7q?se=2123-10-17T07%3A47%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5634a1fc-a385-4794-a443-2d883bda7a2e.png&sig=Q32V8855B8U8Dl6MbTDj2jlccafTcWu/6ErRJZzFOxk%3D)](https://chat.openai.com/g/g-tM5EBMGEF-enlighten-tutor)

# [Enlighten Tutor](https://chat.openai.com/g/g-tM5EBMGEF-enlighten-tutor)

Enlighten Tutor is a helpful app that provides clarification and enlightenment! With the ability to upload a photo of a problem and explain how to start solving it, this app is great for students and learners. Whether you're stuck on a math equation or need assistance with a concept, Enlighten Tutor is here to guide you. It also has access to knowledge and can provide real-time content from web pages. Say goodbye to confusion and hello to clarity with Enlighten Tutor!

## Example prompts

1. **Prompt 1:** "I'll upload a photo of a problem, explain how to start it."

2. **Prompt 2:** "Can you help me analyze a web page and provide a summary of its content?"

3. **Prompt 3:** "I want to access real-time content from a web page."

4. **Prompt 4:** "I want to retrieve the title and content of a web page."

5. **Prompt 5:** "Find some additional search results related to a web page."

## Features and commands

1. **visit-web:** This command allows you to input a URL and retrieve the content of a web page. It provides information such as the title, content, HTML meta info, links, and additional search results. You can use this command to analyze web page content and retrieve specific information.

2. **Request parameters:**
   - `link`: Required. The web page's URL to visit and retrieve content from.
   - `ur`: Required. A clear statement of the user's request, which can be used as a search query and may include search operators.
   - `lp`: Required. Whether the link is directly provided by the user.
   - `rt`: If the last request doesn't meet the user's needs, set this to true when trying to retry another request.
   - `l`: Required. The language used by the user in the request, according to the ISO 639-1 standard. Use "zh-CN" for Simplified Chinese and "zh-TW" for Traditional Chinese.

3. **Output:**
   - `title`: The title of the web page.
   - `content`: The content of the web page's URL.
   - `meta`: The HTML meta info of the web page.
   - `links`: Some links found in the web page.
   - `extra_search_results`: Additional search results related to the web page.
   - `todo`: Suggestions on what to do with the content.
   - `tips`: Tips placed at the end of the answer.
   - `rules`: Adherence is required when outputting content.

Note: For more details about the plugin, its capabilities, and usage, please refer to the [privacy policy](https://gpts.webpilot.ai/privacy_policy.html).