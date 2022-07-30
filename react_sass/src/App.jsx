import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import './styles/components/app.sass';

export default function App(){
  return(
    <div id="portfolio">
      <h1>Alan Lima</h1>

      <Sidebar/>
      <MainContent/>
    </div>
  )
}