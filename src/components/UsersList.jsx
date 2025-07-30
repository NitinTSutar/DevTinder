import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequests } from "../utils/requestSlice";

const UsersList = ({ userData, fromRequests }) => {
  const data = userData;
  const dispatch = useDispatch();
console.log({data})
  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(_id));
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <ul className="list bg-base-300 rounded-box shadow-md m-2">
        <li className="p-4 pb-2 text-xl tracking-wide">
          {fromRequests ? "Connections" : "Requests"}
        </li>

        {data.map((e, index) => (
          <li
            key={fromRequests ? e._id : e.fromUserId?._id }
            className="list-row bg-base-200 m-2 p-2 rounded-md"
          >
            {/* {console.log(e._id)} */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
              {/* User Info Section */}
              <div className="flex items-center gap-4 flex-1">
                <div className="text-4xl font-thin opacity-30 tabular-nums flex-shrink-0">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <img
                  className="size-10 rounded-box"
                  src={fromRequests ? e.photoUrl : e.fromUserId.photoUrl}
                />
                <div className="list-col-grow">
                  <div>
                    {fromRequests ? e.firstName : e.fromUserId.firstName}{" "}
                    {fromRequests ? e.lastName : e.fromUserId.lastName}
                  </div>
                  {fromRequests
                    ? e.skills?.length > 0 && (
                        <div className="text-xs uppercase font-semibold opacity-60">
                          {e.skills.map((s, i) => (
                            <span key={i}> {s}</span>
                          ))}
                        </div>
                      )
                    : e.fromUserId?.skills?.length > 0 && (
                        <div className="text-xs uppercase font-semibold opacity-60">
                          {e.fromUserId.skills.map((s, i) => (
                            <span key={i}> {s}</span>
                          ))}
                        </div>
                      )}
                </div>
              </div>

              {/* Action Buttons Section */}
              {!fromRequests && (
                <div className="flex gap-2 md:justify-end">
                  <button
                    className="btn btn-soft btn-success w-auto"
                    onClick={() => handleRequest("accepted", e._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-soft btn-error w-auto"
                    onClick={() => handleRequest("rejected", e._id)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
