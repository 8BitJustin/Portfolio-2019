import React, { Component } from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import ProjectsList from "../components/ProjectsList";

class Work extends Component {
  state = {};
  render() {
    const ProjList = ProjectsList.map(project => {
      return (
        <ProjectDisplay
          key={project.id}
          image={project.image}
          alt={project.alt}
          title={project.title}
          subtitle={project.subtitle}
          desc={project.desc}
          git={project.git}
          site={project.site}
        />
      );
    });
    return (
      <div className="work-page pages" id="work">
        <div className="work-header">
          <h1>Some of my <span className="rose-color">work</span></h1>
        </div>
        <div className="projects_container">
          <div className="projects_list_container">{ProjList}</div>
        </div>
      </div>
    );
  }
}

export default Work;
