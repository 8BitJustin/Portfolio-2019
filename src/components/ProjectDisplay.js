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
          &#183;&nbsp;Github&nbsp;&#183;
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
          &#183;&nbsp;Github&nbsp;&#183;
        </a>
        {/* eslint-disable-next-line */}
        <a href={props.site} className="project_site" target="_blank">
          &#183;&nbsp;Site&nbsp;&#183;
        </a>
      </div>
    );
  }
};

export default ProjectDisplay;
