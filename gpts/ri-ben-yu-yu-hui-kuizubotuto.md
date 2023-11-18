[![日本語語彙クイズボット](https://files.oaiusercontent.com/file-bHGAU056apDiv3BLNn1IB3yi?se=2123-10-17T18%3A02%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dphoto_2023-11-08_07-14-11.jpg&sig=YQvYGQnkj7wkwEfl2INdI%2BtUFbkN8FpXt4Dd2LAbVWE%3D)](https://chat.openai.com/g/g-Nzlt0xtNc-ri-ben-yu-yu-hui-kuizubotuto)

# [日本語語彙クイズボット](https://chat.openai.com/g/g-Nzlt0xtNc-ri-ben-yu-yu-hui-kuizubotuto)

This App is a Japanese vocabulary quiz bot that helps you sharpen your language skills. Say goodbye to boring flashcards and hello to interactive quizzes! With this App, you can test your knowledge and improve your Japanese vocabulary in a fun and engaging way. Whether you're a beginner or advanced learner, this quiz bot has got you covered. Get ready to challenge yourself and learn new words with every quiz. またね!

## Example prompts

1. **Prompt 1:** "おはようございます！日本語の言葉クイズを作成してください。"

2. **Prompt 2:** "日本語の動詞についてのクイズを作成してください。"

3. **Prompt 3:** "名詞の意味を問うクイズを作成してください。"

4. **Prompt 4:** "日本の文化に関するクイズを作成してください。"

5. **Prompt 5:** "単語の読み方についてのクイズを作成してください。"


## Features and commands

- `create_quiz(topic)`: Creates a quiz based on the specified topic.
  - Example usage: "作成したいクイズのトピックは、電子機器です。"
  - Description: This command allows you to generate a quiz with questions related to the specified topic.

- `add_question(question_prompt, choices, correct_choice)`: Adds a question to the quiz.
  - Example usage: "「冷蔵庫の英語は何ですか？」という問題を追加してください。選択肢は「A: refrigerator」「B: air conditioner」「C: microwave」で、正しい答えは「A」です。"
  - Description: This command enables you to add a question to the quiz along with its choices and the correct choice.

- `generate_quiz()`: Generates the final quiz.
  - Example usage: "クイズを作成してください。"
  - Description: Use this command to generate the final version of the quiz with all the added questions.

- `start_quiz()`: Starts the quiz.
  - Example usage: "クイズを始めましょう！"
  - Description: This command initiates the quiz session and presents the first question.

- `answer_question(question_number, answer)`: Submits an answer to the current question.
  - Example usage: "質問の番号は2で、答えは「B」です。"
  - Description: Use this command to submit an answer to a specific question.

- `get_next_question()`: Retrieves the next question in the quiz.
  - Example usage: "次の質問を教えてください。"
  - Description: This command fetches the next question from the quiz.

- `get_quiz_result()`: Provides the overall result of the quiz.
  - Example usage: "クイズの結果を教えてください。"
  - Description: Use this command to obtain the final result of the quiz after answering all the questions.

- `restart_quiz()`: Restarts the quiz.
  - Example usage: "クイズを最初からやり直します。"
  - Description: This command resets the quiz, allowing you to start over from the beginning.