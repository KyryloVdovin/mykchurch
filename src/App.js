import './App.css';
import Header from './components/header/header';

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
      </div>
    </div>
  )
}

export default App;
