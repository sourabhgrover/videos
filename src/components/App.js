import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    // console.log(term);
    const respone = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    console.log(respone);
    this.setState({ videos: respone.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        `I have {this.state.videos.length} videos.`
      </div>
    );
  }
}

export default App;
