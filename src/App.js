import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { instsActions } from "./redux/Insts";

import useGrabList from "./hooks/useGrabList";

import Players from "./components/players/Players";
import SmallGigs from "./components/gigs/gigs/SmallGigs";
import Insts from "./components/instruments/Insts";

import Layout from "./components/UI/Layout";
import MyModal from "./components/UI/MyModal";
import LargeGigs from "./components/gigs/gigs/LargeGigs";

function App() {
  const dispatch = useDispatch();
  const allInsts = useGrabList("insts");
  dispatch(instsActions.refresh(allInsts));

  const isSmall = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Layout>
      <Routes>
        <Route path="/players" element={<Players />} />
        <Route path="/gigs" element={isSmall ? <SmallGigs /> : <LargeGigs />} />
        <Route path="/instruments" element={<Insts />} />
      </Routes>
    </Layout>
  );
}

export default App;
