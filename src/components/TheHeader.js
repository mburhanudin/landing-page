import React, { Component } from "react";
import "./TheHeader.css";

export default class TheHeader extends Component {
  constructor() {
    super();
    this.state = {
      theme: localStorage.getItem("theme") || "dark"
    };
  }
  componentDidMount() {
    this.selectTheme(localStorage.getItem("theme") || "dark");
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  selectTheme(theme) {
    console.log(theme);
    localStorage.setItem("theme", theme);
    this.setState({
      theme: theme
    });
    const d = document.getElementById("App");
    if (theme !== "vue") {
      d.setAttribute("class", `theme-${theme} `);
      localStorage.setItem("theme", theme);
      if (theme === "light") {
        document.getElementById("neon").classList.remove("neon");
        document.getElementById("middleBox").classList.remove("--line");
      } else {
        document.getElementById("neon").classList.add("neon");
        document.getElementById("middleBox").classList.add("--line");
      }
    } else {
      d.setAttribute("class", "text-inverse");
      localStorage.removeItem("theme");
    }
  }
  render() {
    return (
      <div className="min-h-screen grid place-items-center bg-dark-2 overflow-hidden relative shadow-lg">
        <div
          id="middleBox"
          className={
            "header__bg -" +
            (localStorage.getItem("theme") === "theme-light" ? "" : "--line")
          }
        ></div>
        <div className="z-10">
          <div className="text-white">Tentukan pilihan mu</div>
          <div className="font-bold text-7xl">
            <span
              id="neon"
              className={
                "text-white" +
                (localStorage.getItem("theme") === "theme-light" ? "" : "neon")
              }
            >
              IT
            </span>
            <span className="text-white">20</span>
            <span className="text-red-500">21</span>
          </div>
          <div className="flex my-5 text-sm">
            <div
              onClick={event => this.selectTheme("dark")}
              className={
                "btn mr-2 " +
                (this.state.theme === "dark" ? "bg-green-400" : "")
              }
            >
              Dark
            </div>
            <div
              onClick={event => this.selectTheme("light")}
              className={
                "btn " + (this.state.theme !== "dark" ? "bg-green-400" : "")
              }
            >
              Light
            </div>
          </div>
        </div>
      </div>
    );
  }
}
