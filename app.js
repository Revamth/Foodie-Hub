import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGR_e0KO1_QlnsND7ypy4L1uulHSuVg-TVQ&s"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

const Restrocard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="restro-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>Delivery: {sla.slaString}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "765152",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/95189a93-5dc8-49ea-9a4b-986687ddc7a8_765152.jpg",
      locality: "Pimpri chinchwad",
      areaName: "Punawale",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/pizza-hut-pimpri-chinchwad-punawale-rest765152",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "36014",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/8d7b9fd4-0779-429b-95b2-ab28b268dfbd_36014.JPG",
      locality: "KAILASH HOTEL",
      areaName: "Tathawade",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4,
      parentId: "2",
      avgRatingString: "4.0",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/subway-kailash-hotel-tathawade-rest36014",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "569867",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Grand Highstreet Mall",
      areaName: "Hinjawadi",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "192",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/baskin-robbins-ice-cream-desserts-grand-highstreet-mall-hinjawadi-rest569867",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "496037",
      name: "Home Plate by EatFit",
      cloudinaryImageId: "e975b355e30661b40e3522641689cede",
      locality: "Wakd Road",
      areaName: "Hinjawadi",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Home Food",
        "Healthy Food",
        "Indian",
        "Punjabi",
        "South Indian",
        "Rajasthani",
        "Maharashtrian",
        "Snacks",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "301197",
      avgRatingString: "4.2",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 8.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/home-plate-by-eatfit-wakd-road-hinjawadi-rest496037",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "752535",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a63b8ecb-89f9-449d-9b51-4dbaa27efe40_752535.JPG",
      locality: "Dattwadi",
      areaName: "Puna wale",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/kfc-dattwadi-puna-wale-rest752535",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "643827",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/6f670ade-6fa0-464e-b6a3-d03065967418_643827.JPG",
      locality: "Mulshi",
      areaName: "Marunji",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.4,
      parentId: "355285",
      avgRatingString: "4.4",
      totalRatingsString: "247",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/wefit-protein-bowls-salads-and-sandwiches-mulshi-marunji-rest643827",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750391",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750391.JPG",
      locality: "Village Marunji",
      areaName: "Infotech Park",
      costForTwo: "₹250 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.3,
      parentId: "444382",
      avgRatingString: "4.3",
      totalRatingsString: "328",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/daily-kitchen-homely-meals-village-marunji-infotech-park-rest750391",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "772299",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/15e4dc33-7103-4712-a8aa-0c41e4dab461_772299.jpg",
      locality: "W Biz",
      areaName: "Wakad",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/mcdonalds-w-biz-wakad-rest772299",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253596",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_253596.JPG",
      locality: "Tathawade",
      areaName: "Tathawade",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "10K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/burger-king-tathawade-rest253596",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "558827",
      name: "HRX by EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/25/ed40ab18-1c83-4c1d-a66e-e66e36367bdb_558827.JPG",
      locality: "Opp Yes bank, Nr. H P Gas",
      areaName: "Hinjawadi",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Burgers"],
      avgRating: 4.4,
      parentId: "335529",
      avgRatingString: "4.4",
      totalRatingsString: "721",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 8.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "8.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/hrx-by-eatfit-opp-yes-bank-nr-h-p-gas-hinjawadi-rest558827",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "491974",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/9b64bc63-4b70-472e-b4e7-0c1f8c2cf88f_491974.jpg",
      locality: "Village Marunji",
      areaName: "Mulshi Road",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.6,
      parentId: "22452",
      avgRatingString: "4.6",
      totalRatingsString: "512",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/nh1-bowls-highway-to-north-village-marunji-mulshi-road-rest491974",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4872",
      name: "Ghar Ka Khana - Since 2005",
      cloudinaryImageId: "f7b365c641d99818f272b5490f034226",
      locality: "Hinjewadi",
      areaName: "Hinjawadi",
      costForTwo: "₹400 for two",
      cuisines: ["Punjabi", "Thalis", "Kebabs", "Chinese"],
      avgRating: 4.2,
      parentId: "472753",
      avgRatingString: "4.2",
      totalRatingsString: "37K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/ghar-ka-khana-since-2005-hinjewadi-hinjawadi-rest4872",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "898020",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/e1363e31-82e6-42da-a376-a72c42c9018f_898020.jpg",
      locality: "PCMC Ward No. 001",
      areaName: "RAVET PIMPRI CHINCHWAD",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "485",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/theobroma-pcmc-ward-no-001-ravet-pimpri-chinchwad-rest898020",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "576382",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "qhfw858zccsx8kph6tch",
      locality: "Hinjewadi",
      areaName: "Hinjewadi",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "383",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/la-pinoz-pizza-hinjewadi-rest576382",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "622197",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/d076446d-b4da-4e98-af69-47dad5966a0d_622197.jpg",
      locality: "Infotech Park",
      areaName: "Hinjewadi",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.4,
      parentId: "11329",
      avgRatingString: "4.4",
      totalRatingsString: "698",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/mojo-pizza-2x-toppings-infotech-park-hinjewadi-rest622197",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "491975",
      name: "ZAZA Mughal Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d309d3a0-b06d-4071-841d-a6686881958c_491975.jpg",
      locality: "Marunji",
      areaName: "Hinjawadi",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Awadhi"],
      avgRating: 4.2,
      parentId: "22473",
      avgRatingString: "4.2",
      totalRatingsString: "255",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/zaza-mughal-biryani-marunji-hinjawadi-rest491975",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "759076",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a5766096-af33-4557-9b07-ccc55d1c9494_759076.JPG",
      locality: "V J HAPPINESS STREET",
      areaName: "HINJEWADI",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "718",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/the-belgian-waffle-co-v-j-happiness-street-hinjewadi-rest759076",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "261405",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/6f232080-de14-4b6f-aead-68429ac63951_261405.JPG",
      locality: "Bhatewara nagar",
      areaName: "Hinjawadi",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/faasos-wraps-rolls-and-shawarma-bhatewara-nagar-hinjawadi-rest261405",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "261412",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/46e37693-ed96-4fa9-86e1-6cba6a9808f1_261412.jpg",
      locality: "Bhatewara nagar",
      areaName: "Hinjawadi",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "4925",
      avgRatingString: "4.3",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/lunchbox-meals-and-thalis-bhatewara-nagar-hinjawadi-rest261412",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "692221",
      name: "BOOM - Sub Style Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c5bbd782-00ef-45a8-aae7-ed1f86cee653_692221.JPG",
      locality: "Village Marunji",
      areaName: "Mulshi Road",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks", "Indian", "Desserts"],
      avgRating: 4.4,
      parentId: "401169",
      avgRatingString: "4.4",
      totalRatingsString: "101",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-31 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f8993fd4-d5fc-4954-8246-4a71693c888e",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/boom-sub-style-sandwiches-village-marunji-mulshi-road-rest692221",
      type: "WEBLINK",
    },
  },
];

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
const Applayout = () => {
  return (
    <div className="app">
      {/* // header
      // Body
      // footer */}
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Applayout />
  </React.StrictMode>
);
