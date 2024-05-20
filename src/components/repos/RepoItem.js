import React from "react";

const RepoItem = (props) => {
  const { name, language, html_url } = props.repo;

  return (
    <div className="card text-center">
      <h2>{name}</h2>
      <h3 style={{ color: "yellowgreen" }}>{language ? language : "No language"}</h3>
      <div>
        <a
          href={html_url}
          className="btn btn-dark my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show Github Repo
        </a>
      </div>
    </div>
  );
};

export default RepoItem;