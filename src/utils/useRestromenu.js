import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestromenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log("Fetched Menu Data:", json); // Debugging
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (resId) fetchData();
  }, [resId]); // ✅ Correct dependency

  return resInfo;
};

export default useRestromenu;
