import React from "react";
import moment from "moment";

const Row = ({
  img,
  repoName,
  description,
  numStars,
  numIssues,
  timeInterval,
  ownerName,
  repoURL,
  refrance,
  num,
}) => {
  return (
    <tr ref={refrance}>
      <th scope="row">{num}</th>
      <td>
        <a href={repoURL} target="_blank">
          <img src={img} alt="" width="110" height="110" />
        </a>
      </td>
      <td>
        <h3>{repoName}</h3>
        <p>{description}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="stars">Stars: {numStars}</div>
          <div className="issues">Issues: {numIssues}</div>
          <p>
            {/* Set time to the required formate */}
            Submitted {moment(timeInterval).fromNow()} by {ownerName}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default Row;
