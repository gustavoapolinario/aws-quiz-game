/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRandomQuestion = /* GraphQL */ `
  mutation CreateRandomQuestion(
    $input: CreateRandomQuestionInput!
    $condition: ModelRandomQuestionConditionInput
  ) {
    createRandomQuestion(input: $input, condition: $condition) {
      id
      questions {
        items {
          id
          question
          randomNumber
          explaination
          DocPage
          DocText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const updateRandomQuestion = /* GraphQL */ `
  mutation UpdateRandomQuestion(
    $input: UpdateRandomQuestionInput!
    $condition: ModelRandomQuestionConditionInput
  ) {
    updateRandomQuestion(input: $input, condition: $condition) {
      id
      questions {
        items {
          id
          question
          randomNumber
          explaination
          DocPage
          DocText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const deleteRandomQuestion = /* GraphQL */ `
  mutation DeleteRandomQuestion(
    $input: DeleteRandomQuestionInput!
    $condition: ModelRandomQuestionConditionInput
  ) {
    deleteRandomQuestion(input: $input, condition: $condition) {
      id
      questions {
        items {
          id
          question
          randomNumber
          explaination
          DocPage
          DocText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      category
      questions {
        items {
          id
          question
          randomNumber
          explaination
          DocPage
          DocText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      category
      questions {
        items {
          id
          question
          randomNumber
          explaination
          DocPage
          DocText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      category
      questions {
        items {
          id
          question
          randomNumber
          explaination
          DocPage
          DocText
          timestamp
        }
        nextToken
      }
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      question
      randomNumber
      explaination
      DocPage
      DocText
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      question
      randomNumber
      explaination
      DocPage
      DocText
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      question
      randomNumber
      explaination
      DocPage
      DocText
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
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      answer
      correct
      question {
        id
        question
        randomNumber
        explaination
        DocPage
        DocText
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      answer
      correct
      question {
        id
        question
        randomNumber
        explaination
        DocPage
        DocText
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
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      answer
      correct
      question {
        id
        question
        randomNumber
        explaination
        DocPage
        DocText
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
