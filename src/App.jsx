import { Navigate, Outlet, useNavigate } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { addUser } from "./utils/userSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user?.user);
  const fetchUser = async () => {
    if(userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) navigate("/login");
      console.error(err);
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <div className="flex h-dvh flex-col justify-between ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
