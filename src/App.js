import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import MainPage from './components/MainPage/mainPage';
import TaskPadContainer from './components/TaskPadContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <div className="App">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/todo' element={<TaskPadContainer />} />
          </Routes>
      
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
