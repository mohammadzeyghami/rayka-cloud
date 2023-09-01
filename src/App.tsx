import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NetworkList from "./pages/NetworkList";
import CreateServer from "./pages/cloud/Create/CreateServer";
import CreateServerSetting from "./pages/cloud/Create/CreateServerSetting";
import CreateServerPlan from "./pages/cloud/Create/CreateServerPlan";
import CreateServerNetwork from "./pages/cloud/Create/CreateServerNetwork";
import CreateServerPassword from "./pages/cloud/Create/CreateServerPassword";
import CreateServerLastStep from "./pages/cloud/Create/CreateServerLastStep";
import CreateServerSecurity from "./pages/cloud/Create/CreateServerSecurity";

import { store } from "./stores/store";
import { Provider } from "react-redux";
import Users from "./pages/users/Users";
import Charts from "./pages/charts/charts";

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
            <Route path="/users" element={<Users />}></Route>
            <Route path="/charts" element={<Charts />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
