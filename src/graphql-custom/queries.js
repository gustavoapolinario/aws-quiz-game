export const nextQuestions = `query ListQuestions(
    $filter: ModelQuestionFilterInput
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: 1, nextToken: $nextToken) {
      items {
        id
        question
        multipleChoice
        rightAnswer
        answers {
          nextToken
        }
      }
      nextToken
    }
  }
  `;