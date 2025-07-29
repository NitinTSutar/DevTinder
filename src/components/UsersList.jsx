import React from "react";

const UsersList = (listData) => {
  const data = listData.data;
  // console.log(data)
  return (
    <div>
      <ul className="list bg-base-300 rounded-box shadow-md m-2">
        <li className="p-4 pb-2 text-xl tracking-wide">
          Connections
        </li>

        {data.map((e, index) => (
          <li  key={e._id} className="list-row bg-base-200 m-2 ">
            <div className="text-4xl font-thin opacity-30 tabular-nums">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <div>
              <img className="size-10 rounded-box" src={e.photoUrl} />
            </div>
            <div className="list-col-grow">
              <div>{e.firstName + " " + e.lastName}</div>
              {e.skills && (
                <div className="text-xs uppercase font-semibold opacity-60">
                  {e.skills}
                </div>
              )}
            </div>
            <button className="btn btn-square btn-ghost">
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
