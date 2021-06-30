/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createQuote = /* GraphQL */ `
  mutation CreateQuote(
    $input: CreateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    createQuote(input: $input, condition: $condition) {
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
export const updateQuote = /* GraphQL */ `
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
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
export const deleteQuote = /* GraphQL */ `
  mutation DeleteQuote(
    $input: DeleteQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    deleteQuote(input: $input, condition: $condition) {
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
export const createTopicTag = /* GraphQL */ `
  mutation CreateTopicTag(
    $input: CreateTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    createTopicTag(input: $input, condition: $condition) {
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
export const updateTopicTag = /* GraphQL */ `
  mutation UpdateTopicTag(
    $input: UpdateTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    updateTopicTag(input: $input, condition: $condition) {
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
export const deleteTopicTag = /* GraphQL */ `
  mutation DeleteTopicTag(
    $input: DeleteTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    deleteTopicTag(input: $input, condition: $condition) {
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
export const createTopicQuote = /* GraphQL */ `
  mutation CreateTopicQuote(
    $input: CreateTopicQuoteInput!
    $condition: ModelTopicQuoteConditionInput
  ) {
    createTopicQuote(input: $input, condition: $condition) {
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
export const updateTopicQuote = /* GraphQL */ `
  mutation UpdateTopicQuote(
    $input: UpdateTopicQuoteInput!
    $condition: ModelTopicQuoteConditionInput
  ) {
    updateTopicQuote(input: $input, condition: $condition) {
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
export const deleteTopicQuote = /* GraphQL */ `
  mutation DeleteTopicQuote(
    $input: DeleteTopicQuoteInput!
    $condition: ModelTopicQuoteConditionInput
  ) {
    deleteTopicQuote(input: $input, condition: $condition) {
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
