import React from "react";

const isNew = (date) => {
  const today = new Date();
  const uploadedDate = new Date(date);
  const isNew = today.getDate() - uploadedDate.getDate() <= 1;
  return isNew;
};

export default isNew;
