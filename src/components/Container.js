import React from "react";
import Table from "./Table";

const Container = ({ repos, refrance }) => {
  return (
    <div className="container">
      <h1>Top Github repositories created in the last 30 days</h1>
      <br />
      <Table repos={repos} refrance={refrance} />
    </div>
  );
};

export default Container;
