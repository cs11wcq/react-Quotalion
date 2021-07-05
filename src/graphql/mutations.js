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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createTopicTag = /* GraphQL */ `
  mutation CreateTopicTag(
    $input: CreateTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    createTopicTag(input: $input, condition: $condition) {
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
export const updateTopicTag = /* GraphQL */ `
  mutation UpdateTopicTag(
    $input: UpdateTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    updateTopicTag(input: $input, condition: $condition) {
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
export const deleteTopicTag = /* GraphQL */ `
  mutation DeleteTopicTag(
    $input: DeleteTopicTagInput!
    $condition: ModelTopicTagConditionInput
  ) {
    deleteTopicTag(input: $input, condition: $condition) {
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
export const createTopicQuote = /* GraphQL */ `
  mutation CreateTopicQuote(
    $input: CreateTopicQuoteInput!
    $condition: ModelTopicQuoteConditionInput
  ) {
    createTopicQuote(input: $input, condition: $condition) {
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
export const updateTopicQuote = /* GraphQL */ `
  mutation UpdateTopicQuote(
    $input: UpdateTopicQuoteInput!
    $condition: ModelTopicQuoteConditionInput
  ) {
    updateTopicQuote(input: $input, condition: $condition) {
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
export const deleteTopicQuote = /* GraphQL */ `
  mutation DeleteTopicQuote(
    $input: DeleteTopicQuoteInput!
    $condition: ModelTopicQuoteConditionInput
  ) {
    deleteTopicQuote(input: $input, condition: $condition) {
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
