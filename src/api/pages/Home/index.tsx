import axios from "axios";

const Base = "https://jsonplaceholder.typicode.com";

export const api = {
  getAllPosts: async () => {
    let postsRes = axios.get(`${Base}/posts`);
    let photoRes = axios.get(`${Base}/photos`);

    const [posts, photos] = await Promise.all([postsRes, photoRes]);
    const postJson = await posts.data;
    const photoJson = await photos.data;
    const postsAndPhotos = postJson.map((post: any, index: any) => {
      return { ...post, cover: photoJson[index].url };
    });

    return postsAndPhotos;
  },
};
