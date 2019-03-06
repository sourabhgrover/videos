import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

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
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
