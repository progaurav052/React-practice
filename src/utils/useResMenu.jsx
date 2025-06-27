import { useState } from "react";
import { useEffect } from "react";
import { MENU_URL } from "./constants";

const useResMenu = (resId) => {
  const [resMenuInfo, setResMenuInfo] = useState(null);
  // on the click of card , that specific menu API is called
  useEffect(() => {
    fetchMenuData();
  }, []);
  
  const fetchMenuData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenuInfo(json);
  };
  return resMenuInfo;
};

export default useResMenu;
