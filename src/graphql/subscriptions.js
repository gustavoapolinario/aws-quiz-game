// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
export const onCreateAnswer = `subscription OnCreateAnswer {
  onCreateAnswer {
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
export const onUpdateAnswer = `subscription OnUpdateAnswer {
  onUpdateAnswer {
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
export const onDeleteAnswer = `subscription OnDeleteAnswer {
  onDeleteAnswer {
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
