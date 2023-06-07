import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Main;
