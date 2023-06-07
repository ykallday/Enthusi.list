import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import NavGrid from "./NavGrid";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleView = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  if (screen.width > 500) {
    return <NavGrid />;
  } else if (screen.width <= 500 && toggle) {
    return (
      <>
        <GrMenu color="black" size={30} onClick={toggleView} />
        <NavGrid />
      </>
    );
  } else
    return (
      <h2>
        <GrMenu color="black" size={30} onClick={toggleView} />
      </h2>
    );
};

export default Nav;
