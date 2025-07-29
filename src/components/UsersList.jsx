import React from "react";

const UsersList = (listData) => {
  console.log(listData.data[0])
  const data = (listData.data)
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Connections
        </li>

        {data.map((e, index)=>(
<li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">{(index + 1).toString().padStart(2, "0")}</div>
          <div>
            <img
              className="size-10 rounded-box"
              src={e.photoUrl}
            />
          </div>
          <div className="list-col-grow">
            <div>{e.firstName + " " + e.lastName}</div>
            {e.skills && <div className="text-xs uppercase font-semibold opacity-60">
              {e.skills}
            </div>}
          </div>
          <button className="btn btn-square btn-ghost">
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 3L20 12 6 21 6 3z"></path>
              </g>
            </svg>
          </button>
        </li>
        ))}

        

       
          
      </ul>
    </div>
  );
};

export default UsersList;
