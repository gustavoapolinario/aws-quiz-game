/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRandomQuestion = /* GraphQL */ `
  subscription OnCreateRandomQuestion {
    onCreateRandomQuestion {
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
export const onUpdateRandomQuestion = /* GraphQL */ `
  subscription OnUpdateRandomQuestion {
    onUpdateRandomQuestion {
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
export const onDeleteRandomQuestion = /* GraphQL */ `
  subscription OnDeleteRandomQuestion {
    onDeleteRandomQuestion {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
