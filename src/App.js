import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  react from "react"
import Chat from "./Components/ChatScreen/Chat";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/room/:roomId" element={<Chat/>}/>
            <Route path="/" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
