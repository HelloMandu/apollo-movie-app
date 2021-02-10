import { RouteComponentProps } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

interface MatchParams {
    id: string;
  }
  

function Detail({match}:RouteComponentProps<MatchParams>) {
  const { id } = match.params;
  console.log(id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  return(
      <>
      {loading && <span>loading</span>}
      {data.title}
      </>
  )
};

export default Detail;