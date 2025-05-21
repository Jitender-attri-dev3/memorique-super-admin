import "./App.css";
import MainContainer from "./components/MainContainer";
import Content from "./pages/content/Content";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContainer />}>
              <Route index path="content" element={<Content />}></Route>
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
