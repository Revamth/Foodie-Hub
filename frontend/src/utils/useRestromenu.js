import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestromenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(`menu-${resId}`);
        if (cachedData) {
          setResInfo(JSON.parse(cachedData));
        } else {
          const data = await fetch(MENU_URL + resId);
          const json = await data.json();
          localStorage.setItem(`menu-${resId}`, JSON.stringify(json.data));
          setResInfo(json.data);
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (resId) fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestromenu;
