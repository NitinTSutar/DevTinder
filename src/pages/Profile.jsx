import React, { useState } from "react";
import UserCard from "../components/UserCard";
import { useSelector } from "react-redux";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user?.user);
  const [edit, setEdit] = useState(true);

  return (
    <div className="flex justify-center items-center p-2 flex-col">
      {edit && <UserCard user={user} feed={false} />}
      {!edit && <EditProfile user={user} />}
      <button
        className="btn btn-outline btn-primary mt-5"
        onClick={() => setEdit(!edit)}
      >
        {edit ? "Edit Profile" : "Done"}
      </button>

      {/* {edit && <UserCard/>} */}
    </div>
  );
};

export default Profile;
