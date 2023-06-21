import './App.css';
import Header from './components/header/header';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import AboutUsContainer from './components/aboutUs/aboutUs-container';
import RepentanceContainer from './components/repentance/repentanc-container';
import PhotoAlbumContainer from './components/photo-album/photo-album-container';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <div className='body'>
        <PageContent />
      </div>
    </div>
  );
}

const PageContent = () => {
  return (
    <div className='page-wrapper'>
      <div className='page'>
        <Header />
        <NavLink className="church-logo" to="/">
          <img src="https://nikchurch.files.wordpress.com/2016/12/cropped-6973028-dove-sun-rays5.jpg" width="937" height="443" alt=""></img>
        </NavLink>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/aboutUs" element={<AboutUsContainer />} />
            <Route path='/repent' element={<RepentanceContainer />} />
            <Route path='/photos' element={<PhotoAlbumContainer />} />
            <Route path="/contactUs" element={<div> обратная связь</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
