import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = (user) => {
  const [firstName, setFirstName] = useState(user.user?.firstName);
  const [lastName, setLastName] = useState(user.user?.lastName);
  const [age, setAge] = useState(user.user?.age);
  const [gender, setGender] = useState(user.user?.gender);
  const [photoUrl, setPhotoUrl] = useState(user.user?.photoUrl);
  const [about, setAbout] = useState(user.user?.about);
  const [skills, setSkills] = useState(user.user?.skills);
  const [error, setError] = useState("");
  const [toast, settoast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, photoUrl, about, skills },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      settoast(true)
      setTimeout(() => {
        settoast(false)
      }, 3000);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="flex items-center gap-10 flex-col-reverse md:flex-row">
        <div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Edit Profile</legend>

            <label className="label">First Name</label>
            <input
              type="text"
              className="input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="label">Last Name</label>
            <input
              type="text"
              value={lastName}
              className="input"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />

            <label className="label">Age</label>
            <input
              type="text"
              value={age}
              className="input"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />

            <label className="label">Gender</label>
            <input
              type="text"
              value={gender}
              className="input"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              value={photoUrl}
              className="input"
              placeholder="Photo URL"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />

            <label className="label">About</label>
            <input
              type="text"
              value={about}
              className="input"
              placeholder="About"
              onChange={(e) => setAbout(e.target.value)}
            />

            <label className="label">Skills</label>
            <input
              type="text"
              value={skills}
              className="input"
              placeholder="Skills"
              onChange={(e) => setSkills(e.target.value)}
            />
            {error && (
              <div className="text-red-500 text-sm mt-2 mb-2">{error}</div>
            )}
            <button
              className="btn btn-outline btn-success mt-4"
              onClick={saveProfile}
            >
              Save Changes
            </button>
          </fieldset>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, photoUrl, about, skills }}
          feed={false}
        />
      </div>
      {toast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div>}
    </>
  );
};

export default EditProfile;
