import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { instsActions } from "./redux/Insts";

import useGrabList from "./hooks/useGrabList";

import Players from "./components/players/Players";
import Gigs from "./components/gigs/gigs/Gigs";
import Insts from "./components/instruments/Insts";

import Layout from "./components/UI/Layout";
import MyModal from "./components/UI/MyModal";

function App() {
  const dispatch = useDispatch();
  const allInsts = useGrabList("insts");
  dispatch(instsActions.refresh(allInsts));

  // useEffect(() => {
  //   const allInsts = useGrabList("insts");
  //   dispatch(instsActions.refresh(allInsts));
  // }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/players" element={<Players />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/instruments" element={<Insts />} />
      </Routes>
    </Layout>
  );
}

export default App;
