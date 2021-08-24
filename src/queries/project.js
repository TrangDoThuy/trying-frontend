/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_PROJECT = gql`
  query project($id: ID!, $commentsFilter: JSON) {
    project(id: $id) {
      id
      address
      category {
        name
      }
      description
      amount
      location
      cover {
        url
      }
      name
      note
      locale
      localizations {
        id
        locale
      }
      investment_terms {
        id
        item
        detail
      }
      phone
      noteDetails {
        note
        count
      }
      comments {
        id
        note
        content
        created_at
        author {
          username
          picture {
            url
          }
        }
      }
      remarks {
        id
        phone
        amount
        time
        created_at
        users_permissions_user {
          id
          username
          email
          picture {
            url
          }
        }
      }
      website
    }
    commentsConnection(where: $commentsFilter) {
      aggregate {
        count
      }
    }
  }
`;

export { GET_PROJECT };
