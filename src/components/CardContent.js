import React, { Component } from "react";

export default class CardContent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    const { imgUrl } = this.props;
    return (
      <div className="container bg-dark-1 rounded shadow-lg mx-auto my-4 p-8">
        <div
          className={
            "text-3xl font-bold pb-16 " +
            (this.props.reverse ? "text-right" : "text-left")
          }
        >
          {this.props.title}
        </div>
        <div className="flex flex-wrap">
          <div
            className={
              "px-0 sm:px-4 py-4 sm:py-0 w-full sm:w-1/2 " +
              (this.props.reverse ? "order-1" : "order-1 sm:order-2")
            }
          >
            <img className="block mx-auto" src={imgUrl} alt="" />
          </div>
          <div
            className={
              "w-full sm:w-1/2 " +
              (this.props.reverse ? "order-2" : "order-2 sm:order-1")
            }
          >
            {this.props.children ? this.props.children : null}
          </div>
        </div>
      </div>
    );
  }
}
