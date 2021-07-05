/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuote = /* GraphQL */ `
  query GetQuote($id: ID!) {
    getQuote(id: $id) {
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
export const listQuotes = /* GraphQL */ `
  query ListQuotes(
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTopicsByCreatedAtDate = /* GraphQL */ `
  query GetTopicsByCreatedAtDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTopicsByCreatedAtDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
