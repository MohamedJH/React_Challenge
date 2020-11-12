import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './Components/Side Bar Component/SideBar';
import './Components/Main Component/Main';
import Main from './Components/Main Component/Main';

function App() {
  return (
    <div className="app">
        <SideBar />
        <Main/>
    </div>
  );
}

export default App;
