import React from "react";
import Row from "./Row";

const Table = ({ repos, refrance }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Repositories</th>
        </tr>
      </thead>
      <tbody>
        {/* Create row for each repo */}
        {repos.map(function (repo, index) {
          if (repos.length === index + 1) {
            return (
              <Row
                num={index}
                key={repo.id}
                img={repo.owner.avatar_url}
                repoName={repo.full_name}
                description={repo.description}
                numStars={repo.stargazers_count}
                numIssues={repo.open_issues_count}
                timeInterval={repo.created_at}
                ownerName={repo.owner.login}
                repoURL={repo.html_url}
                refrance={refrance}
              />
            );
          } else {
            return (
              <Row
                num={index + 1}
                key={repo.id}
                img={repo.owner.avatar_url}
                repoName={repo.full_name}
                description={repo.description}
                numStars={repo.stargazers_count}
                numIssues={repo.open_issues_count}
                timeInterval={repo.created_at}
                ownerName={repo.owner.login}
                repoURL={repo.html_url}
              />
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default Table;
