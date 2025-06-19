const restaurantList = [
    {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "7726",
        name: "Samco",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2025/2/16/1895657b-f477-49bb-b4cf-b49133128b00_773a1733-c32f-46a0-bf5f-b1e12a2342c2.jpeg",
        locality: "Alwarpet",
        areaName: "Alwarpet",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "South Indian",
          "Chinese",
          "Arabian",
          "Kerala",
          "Mughlai",
        ],
        avgRating: 4.5,
        parentId: "1235",
        avgRatingString: "4.5",
        totalRatingsString: "58K+",
        promoted: true,
        sla: {
          deliveryTime: 47,
          lastMileTravel: 8.4,
          slaString: "45-50 mins",
        },
        availability: {
          nextCloseTime: "2025-06-17 23:59:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "3.8K+",
          },
          source: "GOOGLE",
        },
      },
    },
    {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "810579",
        name: "Nandhana Palace",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/ad122ab6-e98b-4a8a-9fa4-c862197e003e_810579.jpg",
        locality: "Egmore",
        areaName: "Mount Road",
        costForTwo: "₹500 for two",
        cuisines: ["Andhra", "Biryani", "South Indian"],
        avgRating: 4.4,
        parentId: "2120",
        avgRatingString: "4.4",
        totalRatingsString: "6.9K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          slaString: "25-30 mins",
        },
        availability: {
          nextCloseTime: "2025-06-18 02:00:00",
          opened: true,
        },
      },
    },
    {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "1091025",
        name: "Potful - Claypot Biryanis",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/6/15/c4d3169f-62e1-4578-b79d-9ad104274311_f1877ef2-1ac6-410a-a702-53f7cdf0cd8b.jpg",
        locality: "Annanagar",
        areaName: "Shenoy Nagar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.5,
        parentId: "160121",
        avgRatingString: "4.5",
        totalRatingsString: "74",
        promoted: true,
        sla: {
          deliveryTime: 53,
          lastMileTravel: 5.8,
          slaString: "50-55 mins",
        },
        availability: {
          nextCloseTime: "2025-06-17 23:45:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149",
          footerText: "5 DEALS LEFT",
        },
      },
    },
    {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "49133",
        name: "Karim Biryani",
        cloudinaryImageId: "qtln5ijbz0nj3siynouz",
        locality: "Vepery",
        areaName: "Poongavanapuram",
        costForTwo: "₹300 for two",
        cuisines: ["Biryani", "South Indian"],
        avgRating: 4.0,
        parentId: "115116",
        avgRatingString: "4.0",
        totalRatingsString: "1.1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.1,
          slaString: "15-20 mins",
        },
        availability: {
          nextCloseTime: "2025-06-17 23:00:00",
          opened: true,
        },
        externalRatings: {
          aggregatedRating: {
            rating: "3.7",
            ratingCount: "1.7K+",
          },
          source: "GOOGLE",
        },
      },
    },
    {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "966824",
        name: "Sharief Bhai Biryani",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/11/18/490055ad-8d66-47d0-8953-e5071b79e76c_02aad165-08f1-4fee-9522-95e8a0cb7626.jpg",
        locality: "Ground Floor, Poonamallee High Road",
        areaName: "Purasaiwalkam",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Arabian",
          "rolls",
          "Street Food",
          "Tea",
          "Desserts",
          "Beverages",
        ],
        avgRating: 3.8,
        parentId: "469102",
        avgRatingString: "3.8",
        totalRatingsString: "965",
        promoted: true,
        sla: {
          deliveryTime: 27,
          lastMileTravel: 3,
          slaString: "25-30 mins",
        },
        availability: {
          nextCloseTime: "2025-06-17 23:59:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "65% OFF",
          subHeader: "UPTO ₹155",
        },
      },
    },
    {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "45875",
        name: "Al faham",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/9/10/6969e0f6-c62a-4d12-89b9-7263f0a99cdf_59291de4-cf38-4716-934f-c008c2bf0d99.JPG",
        locality: "Vepery",
        areaName: "Vepery",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "Arabian", "Chinese", "Biryani"],
        avgRating: 4.3,
        parentId: "17831",
        avgRatingString: "4.3",
        totalRatingsString: "6.0K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 0.9,
          slaString: "20-25 mins",
        },
        availability: {
          nextCloseTime: "2025-06-17 23:59:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59",
          footerText: "5 DEALS LEFT",
        },
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "961",
          },
          source: "GOOGLE",
        },
      },
    },
    {
      type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "5474",
        name: "Zaitoon",
        cloudinaryImageId: "aa78f66562d1c205e7de05992990f84d",
        locality: "Nungambakkam",
        areaName: "Nungambakkam",
        costForTwo: "₹700 for two",
        cuisines: [
          "Biryani",
          "Arabian",
          "North Indian",
          "Tandoor",
          "Chinese",
          "Juices",
        ],
        avgRating: 4.4,
        parentId: "4555",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 3.6,
          slaString: "25-30 mins",
        },
        availability: {
          nextCloseTime: "2025-06-18 02:00:00",
          opened: true,
        },
      },
    },
  ];

export default restaurantList;  // deafult export (1st method of exporting)