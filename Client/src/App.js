import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LikedSongs from './pages/LikedSongs/LikedSongs';
import Library from './pages/Library/Library';
import Playlist from './pages/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search/>} />
      <Route path="/liked" element={<LikedSongs/>} />
      <Route path="/library" element={<Library/>} />
      <Route path="/playlist/:playlistName" element={<Playlist/>} />
      
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;
