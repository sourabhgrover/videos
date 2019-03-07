import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const renderList = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId} 
          onVideoSelect={this.props.onVideoSelect}
          video={video}
        />
      );
    });

    // return <div>VideoList {this.props.videos.length}</div>;
    return <div className="ui relaxed divided list"> {renderList}</div>;
  }
}

export default VideoList;
