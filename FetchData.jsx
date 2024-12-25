import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos");
  }, []);
  return <div></div>;
};

export default FetchData;
