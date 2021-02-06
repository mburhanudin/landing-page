import React, { Component } from "react";
import { Link } from "react-scroll";
export default class TheNavbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let mobileToggle;
    if (this.state.isOpen) {
      mobileToggle = (
        <div className="block sm:hidden justify-between place-items-center p-8 text-white z-10">
          <div className="font-bold text-lg">
            <span>20</span>
            <span className="text-red-500">21</span>
          </div>
          <div className="block cursor-pointer">
            <Link
              to="ui-ux"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              UI/UX
            </Link>
            <Link
              to="front-end"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              Front-End
            </Link>
            <Link
              to="back-end"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              Back-End
            </Link>
            <Link
              to="qa"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              QA
            </Link>
            <Link
              to="devops"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              DevOps
            </Link>
          </div>
        </div>
      );
    } else {
      mobileToggle = "";
    }
    return (
      <div className="fixed w-full top-0 backdrop-blur shadow-md z-20">
        <div className="hidden sm:flex justify-between place-items-center h-16 px-4 text-white z-10">
          <div className="font-bold text-lg">
            <span>20</span>
            <span className="text-red-500">21</span>
          </div>
          <div className="flex cursor-pointer">
            <Link
              to="ui-ux"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              UI/UX
            </Link>
            <Link
              to="front-end"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              Front-End
            </Link>
            <Link
              to="back-end"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              Back-End
            </Link>
            <Link
              to="qa"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              QA
            </Link>
            <Link
              to="devops"
              spy={true}
              smooth={true}
              duration={500}
              className="px-2 block"
              activeClass="scrollactive-item"
              offset={-100}
            >
              DevOps
            </Link>
          </div>
        </div>
        <div
          className="block sm:hidden absolute p-1 top-0 right-0 w-10 h-10 cursor-pointer "
          onClick={this.toggleButton}
        >
          <div className="my-1 w-full bg-white h-1"></div>
          <div className="my-1 w-full bg-white h-1"></div>
          <div className="my-1 w-full bg-white h-1"></div>
        </div>
        {mobileToggle}
      </div>
    );
  }
}
