<h1 align="center">Movie App with GraphQL</h1>

## API
 - movie: https://yts.mx/api/v2
 
## Tech
 - GraphQL
 - Apollo
 - React-Hooks
 - styled-component
 - React-Router
 
## Screen Shots
<p align="center">
  <img src="https://user-images.githubusercontent.com/45222982/107736416-5b7cab00-6d45-11eb-92b2-859a806a993b.png" width="600" height="350"/> 
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/45222982/107736420-5c154180-6d45-11eb-95f3-d8e1bf4f0d34.png" width="600" height="350"/> 
</p>

## Explain
 - movieapi를 이용해 graphql 서버를 생성
 - query, mutation을 이용해 api요청, local state를 이용해 data 수정

### Source

## fetch data
```ts
//query
const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            language
            rating
            description_intro
            isLiked @client
        }
        suggestions(id: $id) {
          id
          medium_cover_image
        }
    }
`;

//mutaion, local state
const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id) @client
  }
`;
```
## apollo client
```
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            isLiked: (isLiked: boolean) => !isLiked
          },
        });
      }
    }
  }
});
```