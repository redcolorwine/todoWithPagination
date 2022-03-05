import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import TaskPadContainer from './components/TaskPadContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <div className="App">

          <TaskPadContainer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
