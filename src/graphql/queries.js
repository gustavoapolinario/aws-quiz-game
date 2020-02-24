// eslint-disable
// this is an auto generated file. This will be overwritten

export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    question
    multipleChoice
    rightAnswer
    answers {
      items {
        id
        answer
      }
      nextToken
    }
    explaination
    DocPage
    DocText
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      multipleChoice
      rightAnswer
      answers {
        nextToken
      }
      explaination
      DocPage
      DocText
    }
    nextToken
  }
}
`;
export const getAnswer = `query GetAnswer($id: ID!) {
  getAnswer(id: $id) {
    id
    answer
    question {
      id
      question
      multipleChoice
      rightAnswer
      answers {
        nextToken
      }
      explaination
      DocPage
      DocText
    }
  }
}
`;
export const listAnswers = `query ListAnswers(
  $filter: ModelAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      answer
      question {
        id
        question
        multipleChoice
        rightAnswer
        explaination
        DocPage
        DocText
      }
    }
    nextToken
  }
}
`;
