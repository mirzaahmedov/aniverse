import axios from "axios";

axios.defaults.baseURL = "https://api.jikan.moe/v4";
axios.defaults.params = { sfw: true };

export * from "./anime";
export * from "./constants";
