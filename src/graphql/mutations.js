// eslint-disable
// this is an auto generated file. This will be overwritten

export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
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
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
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
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
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
export const createAnswer = `mutation CreateAnswer($input: CreateAnswerInput!) {
  createAnswer(input: $input) {
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
export const updateAnswer = `mutation UpdateAnswer($input: UpdateAnswerInput!) {
  updateAnswer(input: $input) {
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
export const deleteAnswer = `mutation DeleteAnswer($input: DeleteAnswerInput!) {
  deleteAnswer(input: $input) {
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
