import { gql } from '@apollo/client/core'

export const GET_MOVIES = gql`
  query GetUsers {
    users {
      _id
      name
      email
      password
    }
  }
`
