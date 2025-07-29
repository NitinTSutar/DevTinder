import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import UsersList from "../components/UsersList";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
      // console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRequests();
  },[]);
  if (!requests) return;
  if (requests.length === 0) return <div>No Requests Found</div>;

  const fromUsers = requests.map((request) => request.fromUserId);
  console.log(fromUsers);
  return (
    <div>
      <UsersList data={fromUsers} />
    </div>
  );
};

export default Requests;
