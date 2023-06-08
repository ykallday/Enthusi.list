import { styled } from "styled-components";
import Card from "../components/Card";
import smile from "../assets/smile.png";

/*Styles*/
const Top = styled.div`
  background-color: #276df4;
  padding: 20px;
  padding-top: 40vh;
  color: white;
`;
const Tagline = styled.h4`
  padding: 20px;
  text-align: center;
  font-weight: 300;
  line-height: 2em;
`;

const IntroCard = styled.div`
  width: 60%;
  padding-top: 5%;
  background-color: #fefbff;
  box-shadow: 3px 2px 5px lightgray;
  border-radius: 10px;
  height: fit-content;
  margin: 0 auto;
  text-align: center;
  line-height: 2em;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Container = styled.div`
  background-color: #e1e2ec;
  width: 100%;
  height: fit-content;
  margin-top: 10%;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 3px 2px 5px lightgray;
`;

const TopRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const Person = styled.img`
  border-radius: 100%;
  width: 20%;
  border: 1px solid black;
`;

const ListTitle = styled.h5`
  font-weight: bold;
  padding-left: 10px;
  line-height: 1.5em;
  text-align: left;
`;

const CTA = styled.h2`
  font-size: 4vh;
  line-height: 4vh;
`;
const Home = () => {
  return (
    <>
      <Top>
        <h1>Enthusi.list</h1>
        <h4>An app for enthusiasts and their friends.</h4>
      </Top>
      <Tagline>
        The easiest way to share your recommendations! <br></br> Share
        <i> what </i> you love with the <i>people</i> you love.
      </Tagline>
      <IntroCard>
        <CTA>
          Sign up & create<br></br>your first list today!
        </CTA>
        <Container>
          <TopRow>
            <Person src={smile} />
            <ListTitle>
              FAVORITE MOVIES OF THE 1990'S<br></br>@this_could_be_you
            </ListTitle>
          </TopRow>
          <Card />
        </Container>
      </IntroCard>
    </>
  );
};

export default Home;
