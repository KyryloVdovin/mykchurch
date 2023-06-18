import './App.css';
import Header from './components/header/header';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

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
        <NavLink to="/">
          <img class="custom-header" src="https://nikchurch.files.wordpress.com/2016/12/cropped-6973028-dove-sun-rays5.jpg" width="937" height="443" alt=""></img>
        </NavLink>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/aboutUs" element={<div>о нас</div>} />
            <Route path='/repent' element={<div> покаяние</div>} />
            <Route path='/photos' element={<div>фотоальбом</div>} />
            <Route path="/contactUs" element={<div> обратная связь</div>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
