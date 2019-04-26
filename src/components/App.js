import React from "react";

import UnsplashAPI from "../api/UnsplashAPI";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  onSubmitSearch = async term => {
    const response = await UnsplashAPI.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSubmitSearch} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
