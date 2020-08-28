import React from "react";

//stateless component
const Like = ({ liked, onClick }) => {
  let classses = "fa fa-heart";
  if (!liked) classses += "-o";
  return (
    <i
      className={classses}
      aria-hidden="true"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
