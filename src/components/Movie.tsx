import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
// import { useMutation } from "@apollo/client";

// const LIKE_MOVIE = gql`
//   mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
//     toggleLikeMovie(id: $id, isLiked: $isLiked) @client
//   }
// `;

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

interface PosterProps{
    bg: string;
}

const Poster = styled.div`
  background-image: url(${(props: PosterProps) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

interface MovieProps{
    id: string,
    bg: string,
    isLiked: boolean
}

function Movie({ id, bg, isLiked }: MovieProps) {
//   const [toggleMovie] = useMutation(LIKE_MOVIE, {
//     variables: { id: parseInt(id), isLiked }
//   });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      {/* <button onClick={toggleMovie}>{isLiked ? "Unlike" : "Like"}</button> */}
    </Container>
  );
};

export default Movie;