[![Developer Doc Search](null)](https://chat.openai.com/g/g-AINygIiYy-developer-doc-search)

# [Developer Doc Search](https://chat.openai.com/g/g-AINygIiYy-developer-doc-search)

Developer Doc Search is the ultimate tool for effortless exploration of thousands of open source packages and their GitHub documentation. With just a simple search term, you can find the packages that match your needs. Whether you're a seasoned developer or just starting out, Developer Doc Search is your gateway to the world of Open Source development.

## Example prompts

1. **Prompt 1:** "Can you explain how to use OpenAI python sdk based on this docs: https://github.com/openai/openai-python/blob/main/README.md"

2. **Prompt 2:** "Can you explain me the new next js app router file conventions from: https://github.com/vercel/next.js/tree/canary/docs/02-app/02-api-reference"

3. **Prompt 3:** "Can you help me understand the css from https://github.com/vercel-labs/ai-chatbot/blob/main/app/globals.css"

4. **Prompt 4:** "I am new to using stripe. Can you check this latest stripe docs and explain how to use stripe. https://github.com/stripe/react-stripe-js/blob/master/README.md"


## Features and commands

| Feature/Command | Description |
| --- | --- |
| `search_packages` | This command allows you to search for packages based on a search term. It returns a list of packages that match the search term. You can also specify the number of search results to return. |
| `get_package` | This command returns information about a specific package in a specified programming language. It uses an LRU cache for efficient repeated queries. You need to provide the name of the package and the programming language. |
| `get_md_contents` | This command takes a list of URLs as input, each pointing to a Markdown file. It returns the heading titles content of these Markdown files. |
| `get_folders_files` | This command returns a list of all folders and markdown files in a given GitHub repository. You can filter the files based on a specific folder path and control the depth of subdirectories to traverse. You need to provide the GitHub URL of the repository. |
| `get_github_content` | This command returns the content of a specific file from a GitHub repository. You need to provide the URL of the file in the GitHub repository. |