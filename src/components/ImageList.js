import React from "react";
import "./imagelist.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(image => {
      return (
        <div key={image.id} className="">
          <div className="image">
            <ImageCard image={image} />
          </div>
        </div>
      );
    });
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
