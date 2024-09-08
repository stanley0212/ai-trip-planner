// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for location: Melbourne, for 3 Days for Couple with a Cheap budget, and tour itinerary includes beach, Give me a Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary list with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, time, Time travel each of the location for 3 Days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The Mansion Melbourne\",\n      \"hotelAddress\": \"350 Collins St, Melbourne VIC 3000, Australia\",\n      \"price\": \"$100 - $150 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/hotels/1000000/900000/899000/898800/898758/898758_100_b.jpg\",\n      \"geoCoordinates\": \"-37.8171, 144.9633\",\n      \"rating\": 4.5,\n      \"description\": \"Stylish and modern hotel located in the heart of Melbourne's CBD, offering comfortable rooms and a rooftop bar with city views.\"\n    },\n    {\n      \"hotelName\": \"The Langham, Melbourne\",\n      \"hotelAddress\": \"121 Exhibition St, Melbourne VIC 3000, Australia\",\n      \"price\": \"$150 - $250 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/hotels/1000000/900000/899000/898800/898784/898784_100_b.jpg\",\n      \"geoCoordinates\": \"-37.8093, 144.9645\",\n      \"rating\": 4.8,\n      \"description\": \"Luxury hotel with a rich history, offering elegant rooms, fine dining options, and a tranquil spa.\"\n    },\n    {\n      \"hotelName\": \"The Olsen\",\n      \"hotelAddress\": \"188 Exhibition St, Melbourne VIC 3000, Australia\",\n      \"price\": \"$120 - $200 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/hotels/1000000/900000/899000/898800/898779/898779_100_b.jpg\",\n      \"geoCoordinates\": \"-37.8098, 144.9652\",\n      \"rating\": 4.3,\n      \"description\": \"Boutique hotel known for its stylish design, comfortable rooms, and excellent location near the Melbourne Museum.\"\n    },\n    {\n      \"hotelName\": \"The Prince Hotel\",\n      \"hotelAddress\": \"251 St Kilda Rd, Melbourne VIC 3004, Australia\",\n      \"price\": \"$80 - $130 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/media/hotels/1000000/900000/899000/898800/898776/898776_100_b.jpg\",\n      \"geoCoordinates\": \"-37.8183, 144.9697\",\n      \"rating\": 4.0,\n      \"description\": \"Historic hotel with a blend of Victorian charm and modern amenities, offering affordable accommodation and a convenient location.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"St Kilda Beach\",\n          \"placeDetails\": \"A popular beach with iconic views of the city, a vibrant promenade, and a lively atmosphere.\",\n          \"placeImageUrl\": \"https://www.visitvictoria.com/media/2911/stkilda-beach-melbourne.jpg\",\n          \"geoCoordinates\": \"-37.8639, 144.9765\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"10:00 AM - 4:00 PM\",\n          \"timeTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"Luna Park\",\n          \"placeDetails\": \"A classic amusement park with thrilling rides, arcade games, and nostalgic fun.\",\n          \"placeImageUrl\": \"https://www.lunapark.com.au/wp-content/uploads/2015/09/Luna-Park-Melbourne-1-1.jpg\",\n          \"geoCoordinates\": \"-37.8678, 144.9789\",\n          \"ticketPricing\": \"Entry fees apply, check website for details\",\n          \"rating\": 4.0,\n          \"time\": \"4:00 PM - 6:00 PM\",\n          \"timeTravel\": \"5 minutes\"\n        },\n        {\n          \"placeName\": \"St Kilda Pier\",\n          \"placeDetails\": \"A historic pier offering panoramic views of the bay, a chance to spot penguins, and an array of cafes and restaurants.\",\n          \"placeImageUrl\": \"https://www.visitvictoria.com/media/1743/stkilda-pier-melbourne.jpg\",\n          \"geoCoordinates\": \"-37.8642, 144.9785\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.2,\n          \"time\": \"6:00 PM - 8:00 PM\",\n          \"timeTravel\": \"10 minutes\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"Melbourne Central\",\n          \"placeDetails\": \"A vibrant shopping center with a range of retail stores, food courts, and a large indoor observation deck.\",\n          \"placeImageUrl\": \"https://www.melbournecentral.com.au/media/852/mc-hero-16x9.jpg\",\n          \"geoCoordinates\": \"-37.8087, 144.9638\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"10:00 AM - 1:00 PM\",\n          \"timeTravel\": \"15 minutes\"\n        },\n        {\n          \"placeName\": \"Queen Victoria Market\",\n          \"placeDetails\": \"A bustling open-air market offering fresh produce, street food, souvenirs, and a vibrant atmosphere.\",\n          \"placeImageUrl\": \"https://www.qvm.com.au/images/market-image-hero.jpg\",\n          \"geoCoordinates\": \"-37.8076, 144.9573\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"1:00 PM - 4:00 PM\",\n          \"timeTravel\": \"10 minutes\"\n        },\n        {\n          \"placeName\": \"Royal Botanic Gardens\",\n          \"placeDetails\": \"A serene oasis offering a variety of gardens, walking trails, and a peaceful escape from the city.\",\n          \"placeImageUrl\": \"https://www.rbg.vic.gov.au/images/home-banner-desktop.jpg\",\n          \"geoCoordinates\": \"-37.8203, 144.9937\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.8,\n          \"time\": \"4:00 PM - 6:00 PM\",\n          \"timeTravel\": \"20 minutes\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Melbourne Museum\",\n          \"placeDetails\": \"A comprehensive museum showcasing the history, culture, and natural world of Victoria.\",\n          \"placeImageUrl\": \"https://www.museumvictoria.com.au/images/melbournemuseum/home-banner.jpg\",\n          \"geoCoordinates\": \"-37.8061, 144.9600\",\n          \"ticketPricing\": \"Entry fees apply, check website for details\",\n          \"rating\": 4.2,\n          \"time\": \"10:00 AM - 1:00 PM\",\n          \"timeTravel\": \"10 minutes\"\n        },\n        {\n          \"placeName\": \"Federation Square\",\n          \"placeDetails\": \"A public square known for its modern architecture, outdoor events, and a variety of cafes and restaurants.\",\n          \"placeImageUrl\": \"https://www.federationsquare.com/media/7241/federation-square-melbourne.jpg\",\n          \"geoCoordinates\": \"-37.8199, 144.9665\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"1:00 PM - 3:00 PM\",\n          \"timeTravel\": \"15 minutes\"\n        },\n        {\n          \"placeName\": \"Graffiti Street (Hosier Lane)\",\n          \"placeDetails\": \"A vibrant street art alley showcasing a constantly changing array of colorful murals and street art.\",\n          \"placeImageUrl\": \"https://www.visitmelbourne.com/sites/default/files/styles/hero/public/images/1024x576/Hosier-Lane.jpg\",\n          \"geoCoordinates\": \"-37.8125, 144.9611\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.3,\n          \"time\": \"3:00 PM - 5:00 PM\",\n          \"timeTravel\": \"10 minutes\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please Note:**\n\n* This is a suggested itinerary and can be customized based on your interests and preferences.\n* Hotel prices are approximate and may vary depending on the season and availability.\n* Check the latest ticket prices and opening hours before your trip.\n* Allow extra time for travel between locations, especially during peak hours.\n* Melbourne is a walkable city, but consider using public transport for longer distances.\n* Enjoy your trip to Melbourne! \n"},
        ],
      },
    ],
  });
