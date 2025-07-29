import React from "react";

const UserCard = (feed) => {
  console.log(feed);
  const { firstName, lastName, age, photoUrl, gender, about, skills } = feed.user;
  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName+ " " +lastName} </h2>
        {age && gender && <h2 className="card-title">{age+ " " +gender} </h2>}
        {about && <p>
          {about}
        </p>}
       {skills && <p>
          <b>Skills:</b> {skills.map((e)=> e + " ")}
        </p>}
        <div className="card-actions">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
