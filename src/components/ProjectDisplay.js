import React from "react";

const ProjectDisplay = props => {
  if (props.site === "") {
    return (
      <div
        className="project_card"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      >
        <h4 className="project_title">{props.title}</h4>
        <h5 className="project_subtitle">{props.subtitle}</h5>

        <a
          href={props.git}
          className="project_git"
          // eslint-disable-next-line
          target="_blank"
          style={{ width: "100%" }}
        >
          <button>Github</button>
        </a>
      </div>
    );
  } else {
    return (
      <div
        className="project_card"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      >
        <h4 className="project_title">{props.title}</h4>
        <h5 className="project_subtitle">{props.subtitle}</h5>
        {/* eslint-disable-next-line */}
        <a href={props.git} className="project_git" target="_blank">
          <button>Github</button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={props.site} className="project_site" target="_blank">
          <button>Site</button>
        </a>
      </div>
    );
  }
};

export default ProjectDisplay;
