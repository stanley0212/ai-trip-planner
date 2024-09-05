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
          {text: "Generate Travel Plan for location: Melbourne, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary list with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, time, Time travel each of the location for 3 Days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The Mansion Hotel\",\n      \"hotelAddress\": \"299 Queen St, Melbourne VIC 3000, Australia\",\n      \"price\": \"$100 - $150 per night\",\n      \"hotelImageURL\": \"https://www.themansionhotel.com.au/images/gallery/the-mansion-hotel-melbourne-gallery-01.jpg\",\n      \"geoCoordinates\": \"-37.8170, 144.9649\",\n      \"rating\": 4.5,\n      \"description\": \"A stylish and modern hotel in the heart of Melbourne's CBD, offering comfortable rooms and a rooftop bar with city views.\"\n    },\n    {\n      \"hotelName\": \"The Barkly Hotel\",\n      \"hotelAddress\": \"169 Barkly St, St Kilda VIC 3182, Australia\",\n      \"price\": \"$80 - $120 per night\",\n      \"hotelImageURL\": \"https://www.thebarklyhotel.com.au/images/hero-banner-image.jpg\",\n      \"geoCoordinates\": \"-37.8543, 144.9799\",\n      \"rating\": 4,\n      \"description\": \"A historic pub with comfortable accommodation, located in the lively St Kilda area, close to the beach and nightlife.\"\n    },\n    {\n      \"hotelName\": \"The Prince Hotel\",\n      \"hotelAddress\": \"151 St Georges Rd, Fitzroy VIC 3065, Australia\",\n      \"price\": \"$70 - $100 per night\",\n      \"hotelImageURL\": \"https://www.theprincehotel.com.au/images/hero-banner-image.jpg\",\n      \"geoCoordinates\": \"-37.7965, 144.9869\",\n      \"rating\": 4,\n      \"description\": \"A trendy hotel in the vibrant Fitzroy area, with quirky decor, a bar and a restaurant.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Queen Victoria Market\",\n          \"placeDetails\": \"Explore the bustling Queen Victoria Market, a Melbourne institution offering a wide range of fresh produce, local crafts, and street food.\",\n          \"placeImageURL\": \"https://www.qvm.com.au/images/hero-banner/QVM_hero_banner_mobile.jpg\",\n          \"geoCoordinates\": \"-37.8088, 144.9581\",\n          \"ticketPricing\": \"Free entry\",\n          \"rating\": 4.5,\n          \"time\": \"9:00 AM - 1:00 PM\",\n          \"timeTravel\": \"10 minutes\"\n        },\n        {\n          \"placeName\": \"Hosier Lane\",\n          \"placeDetails\": \"Wander through Hosier Lane, a vibrant street art alleyway showcasing colorful murals and graffiti.\",\n          \"placeImageURL\": \"https://www.visitmelbourne.com/sites/default/files/styles/hero_mobile/public/media/melbourne-streetscape-hosier-lane.jpg?itok=k-h94x-w\",\n          \"geoCoordinates\": \"-37.8127, 144.9633\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4,\n          \"time\": \"1:30 PM - 2:30 PM\",\n          \"timeTravel\": \"5 minutes\"\n        },\n        {\n          \"placeName\": \"Fitzroy Gardens\",\n          \"placeDetails\": \"Relax and enjoy the tranquil atmosphere of Fitzroy Gardens, featuring the iconic Captain Cook's Cottage.\",\n          \"placeImageURL\": \"https://www.visitmelbourne.com/sites/default/files/styles/hero_mobile/public/media/melbourne-gardens-fitzroy-gardens-captain-cooks-cottage.jpg?itok=o2Y7Q2X3\",\n          \"geoCoordinates\": \"-37.8035, 144.9766\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"3:00 PM - 5:00 PM\",\n          \"timeTravel\": \"15 minutes\"\n        }\n      ],\n      \"bestTime\": \"Morning and afternoon\"\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"placeName\": \"Melbourne Museum\",\n          \"placeDetails\": \"Discover the diverse history and culture of Melbourne at the Melbourne Museum, featuring fascinating exhibitions on dinosaurs, indigenous culture, and more.\",\n          \"placeImageURL\": \"https://www.museumvictoria.com.au/melbournemuseum/media/images/hero_images/dinosaur-discovery.jpg\",\n          \"geoCoordinates\": \"-37.8125, 144.9545\",\n          \"ticketPricing\": \"Adult: $25\",\n          \"rating\": 4.5,\n          \"time\": \"10:00 AM - 1:00 PM\",\n          \"timeTravel\": \"15 minutes\"\n        },\n        {\n          \"placeName\": \"Royal Botanic Gardens\",\n          \"placeDetails\": \"Take a leisurely stroll through the serene Royal Botanic Gardens, featuring beautiful gardens, a lake, and a range of plant species.\",\n          \"placeImageURL\": \"https://www.visitmelbourne.com/sites/default/files/styles/hero_mobile/public/media/melbourne-gardens-royal-botanic-gardens-melbourne.jpg?itok=L17R53s4\",\n          \"geoCoordinates\": \"-37.8211, 144.9790\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"2:00 PM - 4:00 PM\",\n          \"timeTravel\": \"20 minutes\"\n        }\n      ],\n      \"bestTime\": \"Morning and afternoon\"\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"placeName\": \"St Kilda Beach\",\n          \"placeDetails\": \"Enjoy the vibrant atmosphere of St Kilda Beach, with its iconic Luna Park, pier, and beachfront cafes.\",\n          \"placeImageURL\": \"https://www.visitmelbourne.com/sites/default/files/styles/hero_mobile/public/media/melbourne-st-kilda-beach-st-kilda-pier.jpg?itok=5x493R1Z\",\n          \"geoCoordinates\": \"-37.8595, 144.9822\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"10:00 AM - 1:00 PM\",\n          \"timeTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"Degraves Street\",\n          \"placeDetails\": \"Explore Degraves Street, a charming laneway filled with cafes, restaurants, and street art.\",\n          \"placeImageURL\": \"https://www.visitmelbourne.com/sites/default/files/styles/hero_mobile/public/media/melbourne-streetscape-degraves-street-melbourne.jpg?itok=xR-zHq5x\",\n          \"geoCoordinates\": \"-37.8165, 144.9622\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4,\n          \"time\": \"2:00 PM - 4:00 PM\",\n          \"timeTravel\": \"10 minutes\"\n        },\n        {\n          \"placeName\": \"Federation Square\",\n          \"placeDetails\": \"Visit Federation Square, a modern public space with art installations, events, and stunning views of the Yarra River.\",\n          \"placeImageURL\": \"https://www.visitmelbourne.com/sites/default/files/styles/hero_mobile/public/media/melbourne-federation-square-cityscape.jpg?itok=y9qW704L\",\n          \"geoCoordinates\": \"-37.8190, 144.9632\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"4:30 PM - 6:00 PM\",\n          \"timeTravel\": \"5 minutes\"\n        }\n      ],\n      \"bestTime\": \"Morning, afternoon, and evening\"\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });