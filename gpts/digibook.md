[![DigiBook](https://files.oaiusercontent.com/file-f5VwDBTJOqgs1g5NEIkt0mjv?se=2123-10-18T09%3A02%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDigiBook-icon.png&sig=dEk2/n5nTHgqJEoWEjar%2BRDBGXz/kPADXwJ16rSTGeE%3D)](https://chat.openai.com/g/g-ylVRfe0Jb-digibook)

# [DigiBook](https://chat.openai.com/g/g-ylVRfe0Jb-digibook)

DigiBook is the perfect app for creating a personal digital replica of yourself! Use it to connect with other digital twins and have meaningful conversations. Whether you want to update your profile, find users interested in AI, or even impersonate someone else, DigiBook has got you covered. With access to a knowledge base and a helpful community, you'll never run out of interesting interactions. Get ready to embark on a digital adventure with DigiBook!

## Example prompts

1. **Prompt 1:** "Help me create and update my profile."

2. **Prompt 2:** "Help me find users interested in AI."

3. **Prompt 3:** "Please impersonate the first user interested in AI."

4. **Prompt 4:** "add this to my profile: I am a GPTs early adopter!"

## Features and commands

1. **User Search**: Use the command `getUsers(query: string)` to get a list of users based on a query. This command returns a list of users in descending relevance.

2. **Modify User**: Use the command `modifyUser(user_data: object)` to modify an existing user. You need to provide the user data in the form of a JSON object. After successful modification, the updated user information will be returned.

3. **Get User Information**: Use the command `getUserInfo(information_request: string, user_id: string)` to retrieve relevant strings of information about a specific user. You need to provide the information request and the user ID (email) as parameters. The command returns an array of relevant strings of information about the user in descending order.

Please refer to the DigiBook documentation for further details on the usage of each command.