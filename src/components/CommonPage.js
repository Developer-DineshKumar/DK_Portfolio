import "./CommonPageStyles.css";

import React, { Component } from "react";

class ProjectPage extends Component {
  render() {
    return (
      <div className={this.props.togglemode}>
        <div className="bg-image">
          <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
