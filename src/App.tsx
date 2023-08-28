import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NetworkList from "./pages/NetworkList";
import CreateServer from "./pages/CreateServer";
import CreateServerSetting from "./pages/CreateServerSetting";
import CreateServerPlan from "./pages/CreateServerPlan";
import CreateServerNetwork from "./pages/CreateServerNetwork";
import CreateServerPassword from "./pages/CreateServerPassword";
import CreateServerLastStep from "./pages/CreateServerLastStep";
import CreateServerSecurity from "./pages/CreateServerSecurity";

import { store } from "./stores/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} index />
            <Route path="/cloud/list" element={<NetworkList />} />
            <Route path="/cloud/create-server" element={<CreateServer />}>
              <Route
                path="/cloud/create-server/"
                element={<CreateServerSetting />}
              />
              <Route
                path="/cloud/create-server/plan"
                element={<CreateServerPlan />}
              />
              <Route
                path="/cloud/create-server/network"
                element={<CreateServerNetwork />}
              />
              <Route
                path="/cloud/create-server/security"
                element={<CreateServerSecurity />}
              />
              <Route
                path="/cloud/create-server/password"
                element={<CreateServerPassword />}
              />
              <Route
                path="/cloud/create-server/last-step"
                element={<CreateServerLastStep />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
