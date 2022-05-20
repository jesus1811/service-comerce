import { useState, useEffect } from "react";
const Store = () => {
  const initial = {
    user: [],
    onDark: false,
  };
  const [store, setStore] = useState(initial);
  useEffect(() => {
    setStore(JSON.parse(localStorage.getItem("store")) || initial);
  }, []);

  return { store, setStore };
};

export default Store;
