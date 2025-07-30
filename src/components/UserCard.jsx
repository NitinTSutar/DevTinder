import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../utils/feedSlice";

const UserCard = ({ user, feed }) => {
  const dispatch = useDispatch();
  if (!user) return <div>NO NEW USERS FOUND!!</div>;
  const { _id, firstName, lastName, age, photoUrl, gender, about, skills } =
    user;

  const handleSendRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFromFeed(_id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName} </h2>
        {age && gender && <h2 className="card-title">{age + " " + gender} </h2>}
        {about && <p>{about}</p>}

        {skills?.length > 0 && (
          <p>
            <b>Skills:</b> {skills.map((e) => e + " ")}
          </p>
        )}

        {feed && (
          <div className="card-actions">
            <button
              className="btn btn-outline btn-secondary"
              onClick={() => handleSendRequest("ignore", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-outline btn-primary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
