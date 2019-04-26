import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0eda86b7b676995eb1174f0e7e737aed6a6ba8858ea6f5804b7576c362cfa979"
  }
});
