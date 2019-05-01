import React from "react";

const ProjectDisplay = props => {
  if (props.site === "") {
    return (
      <div className="project_card">
        <h4 className="project_title">{props.title}</h4>
        <h5 className="project_subtitle">{props.subtitle}</h5>
        {/* eslint-disable-next-line */}
        <a href={props.git} className="project_git" target="_blank">
          Github
        </a>
      </div>
    );
  } else {
    return (
      <div className="project_card">
        <h4 className="project_title">{props.title}</h4>
        <h5 className="project_subtitle">{props.subtitle}</h5>
        {/* eslint-disable-next-line */}
        <a href={props.git} className="project_git" target="_blank">
          Github
        </a>
        {/* eslint-disable-next-line */}
        <a href={props.site} className="project_site" target="_blank">
          Site
        </a>
      </div>
    );
  }
};

export default ProjectDisplay;
