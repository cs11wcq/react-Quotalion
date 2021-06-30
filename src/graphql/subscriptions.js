/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
      id
      title
      description
      quotes {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
      id
      title
      description
      quotes {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
      id
      title
      description
      quotes {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      tag
      topics {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      quotes {
        items {
          id
          body
          type
          likeCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      tag
      topics {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      quotes {
        items {
          id
          body
          type
          likeCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      tag
      topics {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      quotes {
        items {
          id
          body
          type
          likeCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuote = /* GraphQL */ `
  subscription OnCreateQuote {
    onCreateQuote {
      id
      body
      type
      likeCount
      tag {
        id
        tag
        topics {
          nextToken
        }
        quotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      topics {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuote = /* GraphQL */ `
  subscription OnUpdateQuote {
    onUpdateQuote {
      id
      body
      type
      likeCount
      tag {
        id
        tag
        topics {
          nextToken
        }
        quotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      topics {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuote = /* GraphQL */ `
  subscription OnDeleteQuote {
    onDeleteQuote {
      id
      body
      type
      likeCount
      tag {
        id
        tag
        topics {
          nextToken
        }
        quotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      topics {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTopicTag = /* GraphQL */ `
  subscription OnCreateTopicTag {
    onCreateTopicTag {
      id
      topicId
      tagId
      topic {
        id
        title
        description
        quotes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        tag
        topics {
          nextToken
        }
        quotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTopicTag = /* GraphQL */ `
  subscription OnUpdateTopicTag {
    onUpdateTopicTag {
      id
      topicId
      tagId
      topic {
        id
        title
        description
        quotes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        tag
        topics {
          nextToken
        }
        quotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTopicTag = /* GraphQL */ `
  subscription OnDeleteTopicTag {
    onDeleteTopicTag {
      id
      topicId
      tagId
      topic {
        id
        title
        description
        quotes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        tag
        topics {
          nextToken
        }
        quotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTopicQuote = /* GraphQL */ `
  subscription OnCreateTopicQuote {
    onCreateTopicQuote {
      id
      topicId
      quoteId
      topic {
        id
        title
        description
        quotes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      quote {
        id
        body
        type
        likeCount
        tag {
          id
          tag
          createdAt
          updatedAt
        }
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTopicQuote = /* GraphQL */ `
  subscription OnUpdateTopicQuote {
    onUpdateTopicQuote {
      id
      topicId
      quoteId
      topic {
        id
        title
        description
        quotes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      quote {
        id
        body
        type
        likeCount
        tag {
          id
          tag
          createdAt
          updatedAt
        }
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTopicQuote = /* GraphQL */ `
  subscription OnDeleteTopicQuote {
    onDeleteTopicQuote {
      id
      topicId
      quoteId
      topic {
        id
        title
        description
        quotes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      quote {
        id
        body
        type
        likeCount
        tag {
          id
          tag
          createdAt
          updatedAt
        }
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
