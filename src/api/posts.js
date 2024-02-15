/**
 * Fetches all posts from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of post objects.
 */
export const fetchPosts = async () => {
  const postsRaw = await fetch('http://localhost:3000/posts')
  const posts = await postsRaw.json()
  return posts
}

/**
 * Fetches a single post by its ID from the API.
 * @param {number|string} id - The ID of the post to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the fetched post object.
 */
export const fetchPost = async id => {
  console.log('🤷🏻 id in fetchPost', id)
  const postRaw = await fetch(`http://localhost:3000/posts?id=${id}`)
  console.log('postRaw', postRaw)
  const post = await postRaw.json()
  return post
}

/**
 * Adds a new post to the API.
 * @param {Object} post - The post object to add.
 * @returns {Promise<void>} A promise that resolves when the post is added.
 */
export const addPost = async post => {
  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
}

/**
 * Updates an existing post in the API.
 * @param {Object} post - The post object to update, which must include the post ID.
 * @returns {Promise<void>} A promise that resolves when the post is successfully updated.
 */
export const updatePost = async post => {
  await fetch(`http://localhost:3000/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
}

/**
 * Deletes a post by its ID from the API.
 * @param {number|string} id - The ID of the post to delete.
 * @returns {Promise<void>} A promise that resolves when the post is successfully deleted.
 */
export const deletePost = async id => {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  })
}
