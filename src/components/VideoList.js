import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const renderList = this.props.videos.map(video => {
      return <VideoItem />;
    });

    // return <div>VideoList {this.props.videos.length}</div>;
    return <div> {renderList}</div>;
  }
}

export default VideoList;
