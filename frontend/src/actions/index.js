export const ADD_POST= 'ADD_POST'
export const DELETE_POST= 'DELETE_POST'
export const EDIT_POST= 'EDIT_POST'



export function addPost (post) {
  return {
    type: ADD_POST,
    id: nextTodoId++,
    post,
    deleted: false //<-- initially this is set to false
  }
}

export function deletePost (id, deleted) {
  return {
    type: DELETE_POST,
    id,
    deleted:false
  }
}

export function editPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: EDIT_POST,
    id,
    deleted:false
  }
}
