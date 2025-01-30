import { CDN_URL } from "../utils/constants";

const Restrocard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="restro-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>Delivery: {sla.slaString}</h4>
    </div>
  );
};

export default Restrocard;
