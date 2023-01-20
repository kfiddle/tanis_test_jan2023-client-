import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import Players from "./components/players/Players";
import Gigs from "./components/gigs/Gigs";

import Layout from "./components/UI/Layout";
import MyModal from "./components/UI/MyModal";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/players" element={<Players />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/modal" element={<MyModal />} />
      </Routes>
    </Layout>
  );
}

export default App;
