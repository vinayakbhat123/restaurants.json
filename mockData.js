/*{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "CJpkEOskKIDgkq+VtYTkTjCeEjgB",
      "widgetOffset": {
        "restaurantCountWidget": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food": "11",
        "inlineFacetFilter": "",
        "collectionV5MastheadWidget": ""
      }
    },
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "80440",
            "title": "Idli",
            "description": "Deliciously soft and healthy Idlis for an ideal breakfast.",
            "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/1/ad4361b0-9210-4cc0-8663-73e29b640cd0_pic",
            "aspectRatio": "3.44",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli,ads_pc_idli,idli,layout_BAU_Contextual",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "15 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 15,
            "facetList": [
              {
                "label": "10 Mins Delivery",
                "id": "isRestaurantBolt",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "10 Mins Delivery",
                    "id": "isRestaurantBoltfacetquery0",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filterby",
                "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
              },
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery1",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings",
                    "id": "ratingfacetquery0",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery1",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery2",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery0",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery1",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Cost For Two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery0",
                    "analytics": {},
                    "openFilter": true
                  },
                  {
                    "label": "Rs.300 - Rs.600",
                    "id": "costForTwofacetquery1",
                    "analytics": {},
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              }
            ],
            "widgetId": "inlineFacetFilter"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "widgetPadding": {
                "left": 16,
                "right": 16
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "id": "restaurantCountWidget",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                "text": "Restaurants to explore",
                "headerStyling": {
                  "textSize": 15,
                  "textColor": "text_color_highest_emphasis",
                  "textFontName": "FONT_NAME_HEADER_H5",
                  "maxLines": 1
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "417909",
              "name": "Vidhatri Bhavan",
              "cloudinaryImageId": "azmor3eqr2crfkqp1cjv",
              "locality": "Central Mall Circle",
              "areaName": "Shimoga Locality",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Chinese",
                "South Indian",
                "Ice Cream",
                "Biryani"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "233181",
              "avgRatingString": "4.4",
              "totalRatingsString": "7.2K+",
              "promoted": true,
              "adTrackingId": "cid=33504150~p=0~adgrpid=33504150#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=417909~plpr=COLLECTION~eid=5394d49f-e868-4054-9a42-bde6dff89cd1~srvts=1759377713847~collid=80440",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 22:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "33504150"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=417909&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "798092",
              "name": "Saivaram",
              "cloudinaryImageId": "8d6dccd3b72279dba08351f60b584130",
              "locality": "Central Mall Circle",
              "areaName": "Kuvempu Road,Jail circle",
              "costForTwo": "₹100 for two",
              "cuisines": [
                "South Indian"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "477140",
              "avgRatingString": "4.4",
              "totalRatingsString": "1.3K+",
              "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 22:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=798092&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "452368",
              "name": "Hotel Mathura Paradise",
              "cloudinaryImageId": "vmoqtimg07myfai8leww",
              "locality": "Balaraj Urs Road",
              "areaName": "Central Mall Circle",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Chinese",
                "North Indian",
                "South Indian"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "314159",
              "avgRatingString": "4.3",
              "totalRatingsString": "626",
              "promoted": true,
              "adTrackingId": "cid=33504177~p=1~adgrpid=33504177#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=452368~plpr=COLLECTION~eid=2293164e-e413-4390-a37d-4e7d88f2414b~srvts=1759377713847~collid=80440",
              "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 21:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "33504177"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=452368&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "183696",
              "name": "Hotel Raj Bhavan",
              "cloudinaryImageId": "9caab73c50008ed883f0b8e76eae890d",
              "locality": "KSRTC bus Stand",
              "areaName": "Central Mall Circle",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Chinese",
                "South Indian"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "101275",
              "avgRatingString": "4.3",
              "totalRatingsString": "4.3K+",
              "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 22:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹65",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=183696&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "738884",
              "name": "New Butter Dose Of Davanagere",
              "cloudinaryImageId": "42c52109a4acceb156f947f23d7decc1",
              "locality": "Durgigudi Road",
              "areaName": "Vinoba nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "South Indian",
                "Beverages"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "438807",
              "avgRatingString": "4.3",
              "totalRatingsString": "213",
              "promoted": true,
              "adTrackingId": "cid=33504372~p=4~adgrpid=33504372#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=738884~plpr=COLLECTION~eid=b3700959-e02e-42e0-8ea3-6350dbbece86~srvts=1759377713847~collid=80440",
              "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 13:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "33504372"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=738884&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "183676",
              "name": "SLV Paakashala-Cliff embassy",
              "cloudinaryImageId": "78088878000bf85b5efa995987e39efc",
              "locality": "Kuvempu Road",
              "areaName": "Central Mall Circle",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Chinese",
                "South Indian",
                "Chaat",
                "Biryani",
                "Desserts",
                "Juices"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "189535",
              "avgRatingString": "4.4",
              "totalRatingsString": "6.2K+",
              "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 22:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1199",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=183676&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "805063",
              "name": "Grand Brindavana",
              "cloudinaryImageId": "d67530e5a678828c8f457b6bc871cbc0",
              "locality": "Central Mall Circle",
              "areaName": "Central Mall Circle",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Beverages",
                "Chinese",
                "South Indian",
                "Chaat",
                "Ice Cream",
                "Juices",
                "Tandoor"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "480437",
              "avgRatingString": "4.3",
              "totalRatingsString": "450",
              "promoted": true,
              "adTrackingId": "cid=33504428~p=5~adgrpid=33504428#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=805063~plpr=COLLECTION~eid=cb5afe09-499c-4482-9214-f1b33877aa2e~srvts=1759377713847~collid=80440",
              "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 22:00:00",
                "opened": true
              },
              "badges": {},
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "33504428"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=805063&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "907226",
              "name": "MPs Doctors Cafe And Restaurant",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/11/b629103d-cc18-4a64-ad07-edc18ad61b6b_b15dd4e9-51e2-467e-a113-f3083dbece3c.jpg",
              "locality": "Ayurveda Building",
              "areaName": "Central Mall Circle",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Desserts",
                "Beverages",
                "Chaat",
                "Snacks",
                "Biryani"
              ],
              "avgRating": 4.1,
              "veg": true,
              "parentId": "527260",
              "avgRatingString": "4.1",
              "totalRatingsString": "908",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 23:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=907226&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "639807",
              "name": "Dose Of Davanagere",
              "cloudinaryImageId": "3e477b23b5209d0ac84cf623b4b13e98",
              "locality": "Vinobanagar",
              "areaName": "Central Mall Circle",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "South Indian",
                "Beverages"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "385977",
              "avgRatingString": "4.4",
              "totalRatingsString": "751",
              "promoted": true,
              "adTrackingId": "cid=33504283~p=6~adgrpid=33504283#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=639807~plpr=COLLECTION~eid=52ecf0dc-2a1a-4810-b36d-488cd2a8c0e9~srvts=1759377713847~collid=80440",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 13:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "33504283"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=639807&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "582188",
              "name": "Nisarga Upahara",
              "cloudinaryImageId": "16acc4dbf3e7e2315bab0de4a01223c8",
              "locality": "Savalanga Road",
              "areaName": "Channappa Layout",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Chinese",
                "North Indian",
                "South Indian",
                "Ice Cream",
                "Biryani"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "374032",
              "avgRatingString": "4.4",
              "totalRatingsString": "1.8K+",
              "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-02 22:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {},
                  "textBased": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1199",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
              "link": "swiggy://menu?restaurant_id=582188&source=collection&query=Idli",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
  },
  "tid": "5a372429-aa2f-411d-9906-c75c090d81c9",
  "sid": "n6xc9a7f-41ed-42e8-ab1e-ef09f43d9a68",
  "deviceId": "ce9e481b-1c08-6ac5-f199-0dd05fec6578",
  "csrfToken": "5mAyBxbjhxns-RlK_z8MPk7EYSqqt6D4zZpgTq5Y"
} */