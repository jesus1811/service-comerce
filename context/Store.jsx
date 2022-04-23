import { useState } from "react";

const Store = () => {
  const initial = {
    user: [],
  };
  const [store, setStore] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("store"))) ||
      initial
  );

  return { store, setStore };
};

export default Store;
