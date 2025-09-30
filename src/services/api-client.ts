import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e7417590f6543c1b4b14e6915a7ed23",
  },
});
