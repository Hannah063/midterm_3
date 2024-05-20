import React from "react";
import RepoItem from "./RepoItem";
const Repos = (props) => {
  const { repos } = props;
  return (
    <div style={repoStyle}>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
const repoStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Repos;
