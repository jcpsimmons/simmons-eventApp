import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import GameList from "./components/GameList/GameList";
import EventPage from "./components/EventPage/EventPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route path="/event/:id" children={<EventPage />} />
          <Route path="/">
            <GameList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
