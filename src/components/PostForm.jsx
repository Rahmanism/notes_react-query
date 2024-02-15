import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const defaultPost = {
  title: '',
  body: '',
}

const PostForm = ({ postToEdit }) => {
  console.log('postToEdit', postToEdit)
  const [post, setPost] = useState(postToEdit)

  // useEffect(() => {
  //   console.log('🤩🚘 postToEdit in useeffect', postToEdit)
  //   setPost(postToEdit ? { ...postToEdit } : { ...defaultPost })
  // }, [])

  console.log('post in postform:', post)

  const handleChangeInput = e => {
    setPost(p => ({
      ...p,
      [e.target.name]: e.target.value,
    }))
  }

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
    console.log(post)
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
