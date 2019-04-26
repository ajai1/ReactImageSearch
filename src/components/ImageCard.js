import React from "react";
import "./imagelist.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <img className="ui link cards card" alt={description} src={urls.small} />
    );
  }
}
export default ImageCard;
