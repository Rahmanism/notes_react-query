import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <Card className="no-border">
      <Card.Body>
        <Card.Title>
          <Link to={`/post/${post.id}`} className="no-highlight-link">
            {post.title}
          </Link>
        </Card.Title>
        <Button variant="info">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default PostCard
