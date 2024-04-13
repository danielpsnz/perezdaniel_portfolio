import React from "react";

function ProjectCard(props) {
  return (
    <button href={props.repoLink} className="project-card-view" target="_blank">
      <div className="content-card">
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.description}</div>
        <div className="languages">{props.languages}</div>
      </div>
    </button>
  );
}
export default ProjectCard;