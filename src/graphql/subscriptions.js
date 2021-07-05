/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($owner: String) {
    onCreateTopic(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
      tags {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      quotes {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($owner: String) {
    onUpdateTopic(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
      tags {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      quotes {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($owner: String) {
    onDeleteTopic(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
      tags {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      quotes {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
      id
      tag
      createdAt
      updatedAt
      owner
      quotes {
        items {
          id
          body
          type
          likeCount
          imageUrl
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      topics {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
      id
      tag
      createdAt
      updatedAt
      owner
      quotes {
        items {
          id
          body
          type
          likeCount
          imageUrl
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      topics {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
      id
      tag
      createdAt
      updatedAt
      owner
      quotes {
        items {
          id
          body
          type
          likeCount
          imageUrl
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      topics {
        items {
          id
          topicId
          tagId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateQuote = /* GraphQL */ `
  subscription OnCreateQuote($owner: String) {
    onCreateQuote(owner: $owner) {
      id
      body
      type
      likeCount
      imageUrl
      createdAt
      updatedAt
      tag {
        id
        tag
        createdAt
        updatedAt
        owner
        quotes {
          nextToken
        }
        topics {
          nextToken
        }
      }
      owner
      topics {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateQuote = /* GraphQL */ `
  subscription OnUpdateQuote($owner: String) {
    onUpdateQuote(owner: $owner) {
      id
      body
      type
      likeCount
      imageUrl
      createdAt
      updatedAt
      tag {
        id
        tag
        createdAt
        updatedAt
        owner
        quotes {
          nextToken
        }
        topics {
          nextToken
        }
      }
      owner
      topics {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteQuote = /* GraphQL */ `
  subscription OnDeleteQuote($owner: String) {
    onDeleteQuote(owner: $owner) {
      id
      body
      type
      likeCount
      imageUrl
      createdAt
      updatedAt
      tag {
        id
        tag
        createdAt
        updatedAt
        owner
        quotes {
          nextToken
        }
        topics {
          nextToken
        }
      }
      owner
      topics {
        items {
          id
          topicId
          quoteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateTopicTag = /* GraphQL */ `
  subscription OnCreateTopicTag($owner: String) {
    onCreateTopicTag(owner: $owner) {
      id
      topicId
      tagId
      createdAt
      updatedAt
      topic {
        id
        title
        description
        createdAt
        updatedAt
        owner
        tags {
          nextToken
        }
        quotes {
          nextToken
        }
      }
      tag {
        id
        tag
        createdAt
        updatedAt
        owner
        quotes {
          nextToken
        }
        topics {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateTopicTag = /* GraphQL */ `
  subscription OnUpdateTopicTag($owner: String) {
    onUpdateTopicTag(owner: $owner) {
      id
      topicId
      tagId
      createdAt
      updatedAt
      topic {
        id
        title
        description
        createdAt
        updatedAt
        owner
        tags {
          nextToken
        }
        quotes {
          nextToken
        }
      }
      tag {
        id
        tag
        createdAt
        updatedAt
        owner
        quotes {
          nextToken
        }
        topics {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteTopicTag = /* GraphQL */ `
  subscription OnDeleteTopicTag($owner: String) {
    onDeleteTopicTag(owner: $owner) {
      id
      topicId
      tagId
      createdAt
      updatedAt
      topic {
        id
        title
        description
        createdAt
        updatedAt
        owner
        tags {
          nextToken
        }
        quotes {
          nextToken
        }
      }
      tag {
        id
        tag
        createdAt
        updatedAt
        owner
        quotes {
          nextToken
        }
        topics {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateTopicQuote = /* GraphQL */ `
  subscription OnCreateTopicQuote($owner: String) {
    onCreateTopicQuote(owner: $owner) {
      id
      topicId
      quoteId
      createdAt
      updatedAt
      topic {
        id
        title
        description
        createdAt
        updatedAt
        owner
        tags {
          nextToken
        }
        quotes {
          nextToken
        }
      }
      quote {
        id
        body
        type
        likeCount
        imageUrl
        createdAt
        updatedAt
        tag {
          id
          tag
          createdAt
          updatedAt
          owner
        }
        owner
        topics {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateTopicQuote = /* GraphQL */ `
  subscription OnUpdateTopicQuote($owner: String) {
    onUpdateTopicQuote(owner: $owner) {
      id
      topicId
      quoteId
      createdAt
      updatedAt
      topic {
        id
        title
        description
        createdAt
        updatedAt
        owner
        tags {
          nextToken
        }
        quotes {
          nextToken
        }
      }
      quote {
        id
        body
        type
        likeCount
        imageUrl
        createdAt
        updatedAt
        tag {
          id
          tag
          createdAt
          updatedAt
          owner
        }
        owner
        topics {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteTopicQuote = /* GraphQL */ `
  subscription OnDeleteTopicQuote($owner: String) {
    onDeleteTopicQuote(owner: $owner) {
      id
      topicId
      quoteId
      createdAt
      updatedAt
      topic {
        id
        title
        description
        createdAt
        updatedAt
        owner
        tags {
          nextToken
        }
        quotes {
          nextToken
        }
      }
      quote {
        id
        body
        type
        likeCount
        imageUrl
        createdAt
        updatedAt
        tag {
          id
          tag
          createdAt
          updatedAt
          owner
        }
        owner
        topics {
          nextToken
        }
      }
      owner
    }
  }
`;
