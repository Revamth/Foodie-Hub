import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestromenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (resId) fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestromenu;
