import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com';

class Services {
  getPosts() {
    return axios.get(`${API}/posts`);
  }
  getComments(postId: number) {
    return axios.get(`${API}/posts/${postId}/comments`);
  }
  getUser(userId: number) {
    return axios.get(`${API}/users/${userId}`);
  }
}

const services = new Services();
export default services;
