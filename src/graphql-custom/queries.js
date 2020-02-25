export const nextQuestions = /* GraphQL */ `
query ListRandomQuestions(
  $filter: ModelRandomQuestionFilterInput
  $nextToken: String
  $nextTokenQuestion: String
) {
  listRandomQuestions(filter: $filter, limit: 1, nextToken: $nextToken) {
    items {
      id
      questions(limit: 1, nextToken: $nextTokenQuestion) {
        items {
          answers {
            items {
              id
              answer
              correct
            }
          }
          id
          explaination
          question
        }
        nextToken
      }
    }
    nextToken
  }
}
`;