/* eslint-disable no-unused-vars */

import propTypes from "prop-types";
import React, { Component } from "react";

export class GraphSidebar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="summarygraph">
        <ul>
          <li>
            <div class="progress">
              <div class="progress_inner"></div>
            </div>
          </li>
          <li>
            <div class="progress">
              <div class="progress_inner"></div>
            </div>
          </li>
          <li>
            <div class="progress">
              <div class="progress_inner"></div>
            </div>
          </li>
        </ul>
        <div className="collegelocator">
          <ul>
            <li>
              <span>0</span>Government Colleges
            </li>
            <li>
              <span>0</span>Private College
            </li>
            <li>
              <span>0</span>Deemed Colleges
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default GraphSidebar;
