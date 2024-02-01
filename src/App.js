import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShowDetailsScreen from "./screens/ShowDetailsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={HomeScreen} />
        <Route path="/show/:id" component={ShowDetailsScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
