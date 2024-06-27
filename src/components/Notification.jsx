import React from "react";

const Notification = ({ message, show }) => {
  return show && <div>{message}</div>;
};

export default Notification;
