import axios from "axios";

export default axios.create({
  basURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID uGTDcSQ35edwFgzJgCCK0Yh7x2eNHAxh9LJXXfJWZ9I",
  },
});
