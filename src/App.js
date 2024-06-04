import NavBar from './NavBar'
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import NewBlog from './NewBlog';
import Home from './Home';
import BlogPage from './BlogPage';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route Component={Home} path='/'/>
          <Route Component={NewBlog} path='/newblog'/>
          <Route Component={BlogPage} path='/blogs/:id' />
        </Routes>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
