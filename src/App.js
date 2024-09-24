import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile, { ProfilePosts, ProfileSettings } from './components/Profile';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile/devvinodtk">Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:username' Component={Profile} >
          <Route path='settings' element={<ProfileSettings />} />
          <Route path='posts' Component={ProfilePosts} />
        </Route>
        <Route path='*' Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
