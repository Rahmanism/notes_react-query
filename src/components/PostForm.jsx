import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { addPost, updatePost } from '../api/posts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const defaultPost = {
  id: 0,
  title: '',
  body: '',
}

const PostForm = ({ postToEdit = defaultPost }) => {
  const [post, setPost] = useState(postToEdit)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleChangeInput = e => {
    setPost(p => ({
      ...p,
      [e.target.name]: e.target.value,
    }))
  }

  const mutation = useMutation({
    mutationFn: () => {
      if (post.id === 0) {
        delete post.id
        console.log('post without id ', post)
        return addPost(post)
      }
      return updatePost(post)
    },
    onSuccess: () => {
      toast('Saved!')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      navigate('/')
    },
  })

  const renderField = ({ label, multiline = false }) => (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      {!multiline && (
        <Form.Control
          type="text"
          name={label.toLowerCase()}
          value={post[label.toLowerCase()]}
          onChange={handleChangeInput}
        />
      )}
      {multiline && (
        <Form.Control
          as="textarea"
          rows={5}
          name={label.toLowerCase()}
          value={post[label.toLowerCase()]}
          onChange={handleChangeInput}
        />
      )}
    </Form.Group>
  )

  const handleSubmit = e => {
    e.preventDefault()
    mutation.mutate(post)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {renderField({ label: 'Title' })}
      {renderField({ label: 'Body', multiline: true })}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default PostForm
