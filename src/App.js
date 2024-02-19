import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
