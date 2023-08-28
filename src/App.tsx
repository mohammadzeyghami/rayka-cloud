import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NetworkList from "./pages/NetworkList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/cloud/list" element={<NetworkList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
