import React from "react";
import { Header } from "./Header";
import { GameDisplay } from "./GameDisplay";
import { CardDisplay } from "./CardDisplay";

export const MemoryGame = () => {
  return (
    <div>
      <Header />
      <GameDisplay />
      <CardDisplay />
    </div>
  );
};
