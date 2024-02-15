import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PostCard({ post, className }) {
  return (
    <Card className={`no-border ${className}`}>
      <Card.Body>
        <Card.Title>
          <Link to={`/post/${post.id}`} className="no-highlight-link">
            {post.title}
          </Link>
        </Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="info" size="sm" href={`/post/${post.id}/edit`}>
          Edit
        </Button>
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default PostCard
