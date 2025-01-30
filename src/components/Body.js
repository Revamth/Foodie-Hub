import Restrocard from "./Restocard";
import resList from "../utils/resList";

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="restro-container">
        {resList.map((restauant) => (
          <Restrocard key={restauant.info.id} resData={restauant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
