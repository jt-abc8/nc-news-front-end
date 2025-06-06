import axios from "axios";

const api = axios.create({
   baseURL: "https://nc-news-i5we.onrender.com/api",
});

export const getArticles = (p, limit, topic, sort_by, order) => {
   return api
      .get("/articles", {
         params: {
            p,
            limit,
            topic,
            sort_by,
            order
         },
      })
      .then(({ data }) => data);
};

export const getArticle = (article_id) => {
   return api.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const getComments = (article_id) => {
   return api.get(`/articles/${article_id}/comments`).then(({ data }) => data);
};

export const patchVotes = (table, id, inc_votes) => {
   return api.patch(`/${table}/${id}`, { inc_votes });
};

export const getUser = (username) => {
   return api.get(`/users/${username}`).then(({ data }) => data);
};

export const postComment = (article_id, username, body) => {
   return api
      .post(`/articles/${article_id}/comments`, { username, body })
      .then(({ data }) => data);
};

export const deleteComment = (comment_id) => {
   return api.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
   return api.get("/topics").then(({ data }) => data);
};
