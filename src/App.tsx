import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import { ApiProvider } from "./context/ApiContext";

const App: React.FC = () => (
  <ApiProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:username" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  </ApiProvider>
);

export default App;
