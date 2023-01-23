import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./commponents/pages/home/Home";
import Landing from "./commponents/pages/landing/Landing";
import Login from "./commponents/pages/login/Login";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Landing" element={<Landing />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
       </AuthContextProvider>
    </div>
  );
}

export default App;
