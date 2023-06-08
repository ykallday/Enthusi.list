import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Grid = styled.div`
  margin: 5px;
`;
const Button = styled.button`
  background-color: black;
  width: fit-content;
  height: auto;
  font-size: 1em;
  border-color: transparent;
  border-radius: 10px;
  margin: 5px;
  text-decoration: none;
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  }
`;

const NavGrid = () => {
  return (
    <Grid>
      <GrMenu color="black" size={30} onClick={toggleView} />
      <Button>
        <StyledLink to="/">Home</StyledLink>
      </Button>
      <Button>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </Button>
      <Button>
        <StyledLink to="/login">Login</StyledLink>
      </Button>
    </Grid>
  );
};

export default NavGrid;
