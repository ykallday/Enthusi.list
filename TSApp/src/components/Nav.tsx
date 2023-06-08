import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
/***styles***/
const Grid = styled.div`
  padding: 10px;
  display: flex;
`;
const Button = styled.button`
  background-color: #276df4;
  border-radius: 20px;
  border: 1px solid transparent;
  margin: 0px 10px;
  padding-bottom: 3px;
  font-size: 0.7em;
  height: 2em;
  :hover {
    font-weight: 500;
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: 2px;
    width: 80vw;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  border-radius: 10px;
  padding: 5px;
  @media (max-width: 400px) {
    margin: 0 auto;
  }
`;
/****/
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleView = () => {
    setToggle(!toggle);
  };

  return (
    <Grid>
      <GrMenu size={20} onClick={toggleView} />
      {toggle ? (
        <div>
          <Button>
            <StyledLink to="/">Home</StyledLink>
          </Button>
          <Button>
            <StyledLink to="/signup">Sign Up</StyledLink>
          </Button>
          <Button>
            <StyledLink to="/login">Login</StyledLink>
          </Button>
        </div>
      ) : null}
    </Grid>
  );
};
export default Nav;
