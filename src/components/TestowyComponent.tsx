import React, { Component } from "react";

export default class TestowyComponent extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <div></div>;
  }
}
