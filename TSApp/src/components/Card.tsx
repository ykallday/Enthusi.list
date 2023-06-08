import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    "title title picture"
    "info rating picture";
  grid-template-rows: 1fr 2fr;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  box-shadow: 2px 2px 2px lightgray;
  border-radius: 5px;
  padding: 5px;
`;
const Title = styled.h4`
  background-color: #585e71;
  border-radius: 5px;
  font-size: 2vw;
  padding-left: 5px;
  height: fit-content;
  padding: 0.5vw;
  color: white;
  text-align: left;
  grid-area: title;
  font-weight: 300;
`;

const Info = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: left;
  grid-area: info;
  text-align: left;
  line-height: 2vw;
`;

const Item = styled.li`
  font-size: 1.5vw;
  @media (max-width: 500px) {
    font-size: 3vw;
    line-height: 5vw;
  }
`;

const Rating = styled.div`
  grid-area: rating;
  background-color: #e1e2ec;
  border-radius: 5px;
  font-size: 1.5vw;
  height: Fit-content;
  @media (max-width: 500px) {
    font-size: 3vw;
    line-height: 5vw;
  }
`;

const PosterSpot = styled.div`
  grid-area: picture;
  width: 100%;
  padding: 0.5vw;
`;
const Poster = styled.img`
  width: inherit;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Card = () => {
  return (
    <Container>
      <Title>1.Titanic</Title>
      <Info>
        <Item>Released: 1997</Item>
        <Item>Runtime: 3h 14m</Item>
        <Item>Rated: PG-13</Item>
        <Item>Drama / Romance</Item>
      </Info>
      <Rating>test</Rating>
      <PosterSpot>
        <Poster src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" />
      </PosterSpot>
    </Container>
  );
};

export default Card;
