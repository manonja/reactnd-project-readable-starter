const api = "localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers }).then(res => res.json());

export const getPosts = () =>
  fetch(`${api}/posts`, {
      headers
  }).then(res => res.json());

// Get all the comments for a single post
export const getComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, {
    method: 'GET',
    headers
  }).then(res => res.json())

export const addPost = postData =>
  fetch(`${api}/posts`, {
      method: "POST",
      headers: {
          ...headers,
          "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
})
  .then(res => res.json())
  .catch(function(error) {
    console.log("Unable to add post: " + error);
});
