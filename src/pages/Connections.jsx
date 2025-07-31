import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import UsersList from "../components/UsersList";

const Connections = () => {
  const connectionData = useSelector((store) => store.connection);
  const dispatch = useDispatch();
  

  const handleConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    handleConnections();
  }, []);
  if (!connectionData) return;

  if (connectionData.length === 0) return <div className="flex justify-center">No Connection Found</div>;
  return (
    <div className="p-2 md:p-5">
      <UsersList userData={connectionData} fromRequests={true}/>
    </div>
  );
};

export default Connections;
