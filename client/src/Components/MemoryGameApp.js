import React from "react";
import { observer } from "mobx-react";
import { Header } from "./Header";
import { GameDisplay } from "./GameDisplay";
import { CardDisplay } from "./CardDisplay";

export const MemoryGameApp = observer(() => {
  return (
    <div className="app">
      <Header />
      <GameDisplay />
      <CardDisplay />
    </div>
  );
});
