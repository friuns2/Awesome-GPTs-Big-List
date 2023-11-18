[![shownotes](https://files.oaiusercontent.com/file-CJjjaiaA6fViKcdvaMy5Ez2G?se=2123-10-14T22%3A14%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo-shownotes.jpeg&sig=hhnrQ%2B1YBzr47B3W1EBuDokMfEflzKYyXDkGhTP4p7M%3D)](https://chat.openai.com/g/g-gNH4K4Egg-shownotes)

# [shownotes](https://chat.openai.com/g/g-gNH4K4Egg-shownotes)

Need podcast transcripts or audio transcribed? Showtimes is here to help! With Showtimes, you can easily transcribe and summarize audio from podcasts. You can search for podcast transcripts, transcribe specific audio links, summarize podcast episodes, and even search YouTube for podcasts. Showtimes uses the Shownotes plugin to extract podcast transcripts and provides you with a link where the transcript will appear. It may take a few minutes, but don't worry, Showtimes will notify you via email when it's ready. Get ready to dive into the world of podcasts with Showtimes!

## Example prompts

1. **Prompt 1:** "Find a podcast transcript about productivity tips."

2. **Prompt 2:** "Transcribe this audio link for me."

3. **Prompt 3:** "Summarize this podcast episode on machine learning applications."

4. **Prompt 4:** "Search YouTube for podcasts on personal development."

## Features and commands

| Feature/Command | Description |
| --- | --- |
| `AppleSearch` | This command takes an episode as input and returns up to 3 matching episodes on Apple podcasts. The user can select which episode they would like to transcribe. The command provides the podcast name, episode title, release date, audio file link, episode description, artwork link, and a protect flag. If the protect flag is true, transcribing is not allowed. |
| `AudioTranscribe` | This command takes the enclosure, podcast, and title parameters from the `AppleSearch` command and returns a link where the transcript will appear. The user is informed that transcription may take a few minutes and they will receive an email when it's ready. Transcription is not allowed if the protect flag is true. |
| `SearchController_findVideos` | This command allows the AI to search YouTube for podcasts matching the provided show name. It returns an array of 3 video IDs. |
| `CaptionController_findTranscript` | This command extracts the transcript of a YouTube video using the provided video ID. The transcript is returned in two parts: chunk1 and chunk2. The user is informed that a summary has also been sent to their email inbox. |
| `AudioController_findTranscript` | This command allows the AI to search shownotes.io with the provided show name and return the transcript. The transcript is returned as a JSON object. |