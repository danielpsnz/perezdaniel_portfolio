import React from "react";
import Link from "react-dom";

function ProjectCard(props) {
  return (
    <a href={props.repoLink}>
    <button className="project-card-view" target="_blank">
      <div className="content-card">
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.description}</div>
        <div className="languages">{props.languages}</div>
      </div>
    </button>
    </a>
  );
}
export default ProjectCard;