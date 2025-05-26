import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <ul>
        <li className="lg:mr-10 px-4 bg-white "
        
        >
          <a href={route.path}>{route.name}</a>
        </li>
      </ul>
    </div>
  );
};

export default Link;
