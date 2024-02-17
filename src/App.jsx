import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes } from 'react-router-dom'
import PostPage from './pages/PostPage'
import EditPostPage from './pages/EditPostPage'
import { Row } from 'react-bootstrap'
import AddPostPage from './pages/AddPostPage'
import PostsPage from './pages/PostsPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Row>
        <Link to="/">
          <h1 className="title">Awesome Blog</h1>
        </Link>
      </Row>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/:id/edit" element={<EditPostPage />} />
        <Route path="/post/add" element={<AddPostPage />} />
      </Routes>
      <footer>
        <Row>
          <Link to="/">Home</Link>
        </Row>
      </footer>
      <ToastContainer />
    </>
  )
}

export default App
