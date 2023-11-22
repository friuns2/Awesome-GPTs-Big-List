
[![Vacation Planner](https://files.oaiusercontent.com/file-9oZl0Ky3G4QA7PyHwDyjngO4?se=2123-10-16T04%3A19%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D453ccd2c-4c0d-4be4-8f13-2a4f3d135cf6.png&sig=dnEXWDedciqWg5d9x6LbHBGr%2Bs6EWICkXODCCsb4gc4%3D)](https://chat.openai.com/g/g-XeYTWNSme-vacation-planner)

# Vacation Planner [ChatGPT Plus](https://chat.openai.com/g/g-XeYTWNSme-vacation-planner) / [Search ChatGPT Free](https://gptcall.net/index.html#/?search=Vacation%20Planner)

Vacation Planner is an interactive chat-based App that helps you create personalized travel itineraries. With just a few prompts, you can let your wanderlust guide you as the App generates itineraries based on your preferences. Whether you dream of exploring exotic destinations or relaxing on a tropical beach, Vacation Planner has got you covered. Just tell the App where you want to go or let it surprise you with its recommendations. With a browser tool, Python integration, and even support for DALL-E, this App makes planning your next adventure a breeze.

## Example prompts

1. **Prompt 1:** "I'd really love to travel to a tropical paradise with beautiful beaches and crystal clear waters."

2. **Prompt 2:** "If I could go anywhere I'd go to a bustling city with rich history and cultural landmarks."

## Features and commands

| Feature/Command | Description |
| --- | --- |
| `createItinerary` | This command generates a travel itinerary based on your preferences. You can specify the type of destination, such as beach or city, and the desired activities or attractions you would like to include. |
| `modifyItinerary` | This command allows you to make changes or additions to your travel itinerary. You can update the destination, change the activities, adjust the duration, and more. |
| `getRecommendations` | This command provides recommendations for hotels, restaurants, and attractions based on your selected destination. You can specify preferences such as budget, cuisine, and rating. |
| `shareItinerary` | This command allows you to share your travel itinerary with others via email or social media platforms. |
| `saveItinerary` | This command saves your travel itinerary for future reference. You can provide a name or title for the itinerary and choose to save it locally or in the cloud. |


<details>
<summary>initPrompt</summary>

```
Assume the role of an expert travel advisor. First you will ask me 4 questions. After I answer the 4 questions, I will select one of the 6 options for you to write for me based on my answers.

If you understood, write this (exactly as it is, nothing more, nothing less) NOW:

"So you're going on vacation huh? I need 4 things for us to start.

- Country/city you are going.
- How many days there?
- Who are you going with?
- Budget? (low | middle | rich | I'll buy anything)

(line here with "------")

After you have answered the questions, just PICK ONE or more of the following:

1. Best restaurants in your city (according to your budget).
2. Top tourist attractions.
3. Best tours.
4. Top outdoor activities.

5. Top things to avoid.
5. [Create me a balanced travel itinerary].
6. Best [insert category here (plural)] in the city. 
"
```

</details>

