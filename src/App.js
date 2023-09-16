import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import react from "react";
import Chat from "./Components/ChatScreen/Chat";

import Login from "./Components/Login/Login";
import { useStateValue } from "./Context/StateProvider";

function App() {
  const [{ user }, disapatch] = useStateValue();
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />

              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/" />
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
