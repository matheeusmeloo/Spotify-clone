import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* {Item List Artistas} */}
      <ItemList title="Artistas" items={5} />
      {/* {Item List Musicas} */}
      <ItemList title="Musicas" items={10} />
    </div>
  );
};

export default Main;
