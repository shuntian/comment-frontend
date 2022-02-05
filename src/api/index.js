import axios from "axios";

class CommentAPI {

  constructor() {
    this.req = axios.create({baseURL: 'http://127.0.0.1:8000'});
  }

  listArticles (search_text) {
    let url = '/articles';
    if (search_text) {
      url = '/articles?search_text=' + search_text;;

    }
    return this.req.get(url);
  }

  getArticle(id) {
    const url = '/articles/' + id;
    return this.req.get(url);
  }

  addArticle(article) {
    const url = '/articles';
    const data = { article };
    return this.req.post(url, data, {headers: {'Content-Type': 'application/json'}});
  }

  addComment(id, comment) {
    const url = '/articles/' + id + '/comments';
    const data = { comment };
    return this.req.post(url, data, {headers: {'Content-Type': 'application/json'}});
  }

  updateContent(id, content) {
    const url = '/articles/' + id;
    const data = { content };
    return this.req.put(url, data, {'Content-Type': 'application/json'});
  }

}

const commentAPI = new CommentAPI();
export default commentAPI;