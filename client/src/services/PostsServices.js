import AbstractService from "./AbstractService";
import Axios from 'axios';

const API = Axios.create({ baseURL: '/api/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


class PostService extends AbstractService {

    async getAll() {
      
        let promise;
    
        await API.get("/posts").then(
            (response) => {
                promise = this.getRequest(response, true);
            }
        );

        return promise;
    }

    async create(post) {

        let promise;

        await API.post("/posts", post).then(
            (response) => {
                promise = this.getRequest(response, true);
            }
        );

        return promise;
    }

    async update(id, post) {

        let promise;

        await API.put(`/posts/${id}`, post).then(
            (response) => {
                promise = this.getRequest(response, true);
            }
        );

        return promise;
    }

    async delete(id) {

        let promise;

        await API.delete(`/posts/${id}`).then(
            (response) => {
                promise = this.getRequest(response, true);
            }
        );

        return promise;
    }

    async updateLike(id) {

        let promise;

        await API.patch(`/posts/${id}/likePost`).then(
            (response) => {
                promise = this.getRequest(response, true);
            }
        );

        return promise;
    }


}

const postService = new PostService();
export default postService;