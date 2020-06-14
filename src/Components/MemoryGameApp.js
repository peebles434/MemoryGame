import React from "react";
import { observer } from "mobx-react";
import { Header } from "./Header";
import { GameDisplay } from "./GameDisplay";
import { CardDisplay } from "./CardDisplay";
import { CatDogSwitch } from "./CatDogSwitch";

export const MemoryGameApp = observer(() => {
  return (
    <div>
      <Header />
      <GameDisplay />
      <CardDisplay />
      <CatDogSwitch />
    </div>
  );
});
