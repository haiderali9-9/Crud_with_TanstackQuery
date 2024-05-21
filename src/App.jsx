import { Route, Routes} from 'react-router-dom'
import PostLists from './pages/PostLists'
import Post from './pages/Post'
import EditPost from './pages/EditPost'

function App() {


  return (
    <div>
      <h1> Awesome Blog</h1>
      <Routes>
        <Route path='/' element={<PostLists/>} />
        <Route path='/posts/:id' element={<Post/>} />
        <Route path='/posts/:id/edit' element={<EditPost/>} />
      </Routes>
    </div>
  )
}

export default App
