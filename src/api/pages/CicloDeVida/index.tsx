import axios from "axios";

const Base = "https://jsonplaceholder.typicode.com";
const BaseMovies = "https://api.b7web.com.br/cinema/";

export const api = {
  getAllMovies: async () => {
    let res = await axios.get(`${BaseMovies}`);
    return res.data;
  },

  getAllPosts: async () => {
    let res = await axios.get(`${Base}/posts`);
    return res.data;
  },

  addNewPost: async (title: string, body: string, userId: number) => {
    let res = await axios.post(`${Base}/posts`, {
      title,
      body,
      userId,
    });

    return res.data;
  },
};
