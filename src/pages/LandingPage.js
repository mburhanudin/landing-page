import React from "react";
import CardContent from "../components/CardContent";
import axios from "axios";
import NProgress from "nprogress";

export default class LandingPage extends React.Component {
  state = {
    apiUrl:
      "https://raw.githubusercontent.com/mburhanudin/landing-page/master/src/data.json",
    data: []
  };

  async getData() {
    NProgress.start();
    await axios
      .get(this.state.apiUrl)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(res => {
        this.setState({
          data: [
            {
              title: "Tidak dapat mendapatkan data"
            }
          ]
        });
      });
    NProgress.done();
    return;
  }
  urlChange = e => {
    this.setState({ apiUrl: e.target.value });
  };
  async componentDidMount() {
    await this.getData();
  }

  render() {
    return (
      <div>
        <div className="container mx-auto">
          {/* <div
            className="bg-dark-1 p-2 rounded text-center cursor-pointer hover:shadow-lg border border-dark-2"
            onClick={async () => await this.getData()}
          >
            Refresh
          </div> */}
          {/* <input
            className="bg-dark-1 w-full block mt-4 p-2 rounded hover:shadow-lg outline-none focus:shadow-lg border border-dark-2"
            type="text"
            value={this.state.apiUrl}
            onChange={this.urlChange}
          /> */}
        </div>
        {this.state.data.map(data => {
          return (
            <div
              key={data.id || data.title}
              name={data.id || data.title.toLowerCase()}
            >
              <CardContent
                title={data.title}
                imgUrl={data.imgUrl}
                reverse={data.reverse}
              >
                {data.desc}
              </CardContent>
            </div>
          );
        })}
      </div>
    );
  }
}
