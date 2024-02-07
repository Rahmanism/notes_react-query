import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from 'react-router-dom'
import PostList from './pages/PostList'
import Post from './pages/Post'
import EditPost from './pages/EditPost'
import { Row } from 'react-bootstrap'
import AddPost from './pages/AddPost'

function App() {
  return (
    <>
      <Row>
        <h1 className="title">Awesome Blog</h1>
      </Row>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/post/add" element={<AddPost />} />
      </Routes>
      <footer>
        <Row>
          <Link to="/">Home</Link>
        </Row>
      </footer>
    </>
  )
}

export default App
