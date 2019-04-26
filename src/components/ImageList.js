import React from "react";
import "./imagelist.css";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(({ id, description, urls }) => {
      return (
        <div key={id} className="">
          <div className="image">
            <img
              className="ui link cards card"
              alt={description}
              src={urls.small}
            />
          </div>
        </div>
      );
    });
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
