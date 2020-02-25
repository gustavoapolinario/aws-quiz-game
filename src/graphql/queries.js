/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRandomQuestion = /* GraphQL */ `
  query GetRandomQuestion($id: ID!) {
    getRandomQuestion(id: $id) {
      id
      questions {
        items {
          id
          question
          randomNumber
          explanation
          docPage
          docText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const listRandomQuestions = /* GraphQL */ `
  query ListRandomQuestions(
    $filter: ModelRandomQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRandomQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      category
      questions {
        items {
          id
          question
          randomNumber
          explanation
          docPage
          docText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        questions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      question
      randomNumber
      explanation
      docPage
      docText
      timestamp
      answers {
        items {
          id
          answer
          correct
        }
        nextToken
      }
      category {
        id
        category
        questions {
          nextToken
        }
      }
      randomQuestion {
        id
        questions {
          nextToken
        }
      }
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        randomNumber
        explanation
        docPage
        docText
        timestamp
        answers {
          nextToken
        }
        category {
          id
          category
        }
        randomQuestion {
          id
        }
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      answer
      correct
      question {
        id
        question
        randomNumber
        explanation
        docPage
        docText
        timestamp
        answers {
          nextToken
        }
        category {
          id
          category
        }
        randomQuestion {
          id
        }
      }
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        answer
        correct
        question {
          id
          question
          randomNumber
          explanation
          docPage
          docText
          timestamp
        }
      }
      nextToken
    }
  }
`;
