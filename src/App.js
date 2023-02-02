import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { server } from "./components/utils/WhichServer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { instsActions } from "./redux/Insts";
import { playersActions } from "./redux/Players";
import { gigsActions } from "./redux/Gigs";
import { refreshActions } from "./redux/Refresh";

import useGrabList from "./hooks/useGrabList";

import Players from "./components/players/Players";
import SmallGigs from "./components/gigs/gigs/SmallGigs";
import Insts from "./components/instruments/Insts";

import Layout from "./components/UI/Layout";
import MyModal from "./components/UI/MyModal";
import LargeGigs from "./components/gigs/gigs/LargeGigs";

function App() {
  const dispatch = useDispatch();
  const refreshFlag = useSelector((state) => state.refresh);

  useEffect(() => {
    const replenishInsts = async () => {
      const response = await fetch(server + "insts");
      if (response.ok) {
        const jsonedList = await response.json();
        dispatch(instsActions.refresh(jsonedList.insts));
      }
    };

    const replenishGigs = async () => {
      const response = await fetch(server + "gigs");
      if (response.ok) {
        const jsonedList = await response.json();
        dispatch(gigsActions.refresh(jsonedList.gigs));
      }
    };

    const replenishPlayers = async () => {
      const response = await fetch(server + "players");
      if (response.ok) {
        const jsonedList = await response.json();
        dispatch(playersActions.refresh(jsonedList.players));
      }
    };

    if (refreshFlag) {
      replenishInsts();
      replenishGigs();
      replenishPlayers();
      dispatch(refreshActions.toggle(false));
    }
  }, [refreshFlag]);

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
