export const ADD_POST= 'ADD_POST'
export const SET_FILTER = 'SET_FILTER'
export const GET_CATEGORIES = 'GET_CATEGORIES'
// export const POST_CONTENT = 'POST_CONTENT'
// export const COMMENT_POST = 'COMMENT_POST'
// export const COMMENT_USER_POST = 'COMMENT_USER_POST'
// export const VOTE_POST = 'VOTE_POST'
// export const VOTE_COMMENT = 'VOTE_COMMENT'
// export const EDIT_COMMENT = 'EDIT_COMMENT'
// export const EDIT_POST = 'EDIT_POST'
// export const DELETE_COMMENT = 'DELETE_COMMENT'
// export const DELETE_POST= 'DELETE_POST'


export function getCategories ({id, payload }){
    return {
        type: GET_CATEGORIES,
        id,
        filter,
    }
}

export function setFilter ({filter}){
    return {
        type: SET_FILTER,
        filter,
    }
}

export function addPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted:false
  }
}

// export function postContent ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
//   return {
//     type: POST_CONTENT,
//     id,
//     timestamp,
//     title,
//     body,
//     author,
//     category,
//     voteScore,
//     deleted:false,
//   }
// }
//
// export function commentPost ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
//   return {
//     type: COMMENT_POST,
//     id,
//     parentId,
//     timestamp,
//     body,
//     author,
//     voteScore,
//     parentDeleted: false,
//   }
// }
//
// export function commentUserPost ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
//   return {
//     type: COMMENT_USER_POST,
//     id,
//     parentId,
//     timestamp,
//     body,
//     author,
//     voteScore,
//     deleted,
//     parentDeleted
//   }
// }
//
// export function votePost ({ id, timestamp, author, voteScore }) {
//   return {
//     type: VOTE_POST,
//     id,
//     timestamp,
//     author,
//     voteScore,
//   }
// }
//
// export function voteComment ({ id, timestamp, author, voteScore }) {
//   return {
//     type: VOTE_COMMENT,
//     id,
//     timestamp,
//     author,
//     voteScore,
//   }
// }
//
// export function editComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
//   return {
//     type: EDIT_COMMENT,
//     id,
//     parentId,
//     timestamp,
//     body,
//     author,
//     voteScore,
//     deleted,
//     parentDeleted
//
//   }
// }
//
// export function editPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
//   return {
//     type: EDIT_POST,
//     id,
//     timestamp,
//     title,
//     body,
//     author,
//     category,
//     voteScore,
//     deleted,
//   }
// }
//
// export function deleteComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
//   return {
//     type: DELETE_COMMENT,
//     id,
//     parentId,
//     timestamp,
//     body,
//     author,
//     voteScore,
//     deleted,
//     parentDeleted
//
//   }
// }
//
// export function deletePost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
//   return {
//     type: DELETE_POST,
//     id,
//     timestamp,
//     title,
//     body,
//     author,
//     category,
//     voteScore,
//     deleted,
//   }
// }
