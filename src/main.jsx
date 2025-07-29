import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import { store } from "./utils/store.js";
import { Provider } from "react-redux";
import Feed from "./pages/Feed.jsx";
import Connections from "./pages/Connections.jsx";
import Requests from "./pages/Requests.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/request" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
