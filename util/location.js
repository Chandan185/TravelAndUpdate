// const HttpError = require("../models/http-error");
// const mapboxClient = require("@mapbox/mapbox-sdk/services/geocoding");
// const geocodingClient = mapboxClient({
//   accessToken:
//     "pk.eyJ1IjoiY2hhbmRhbjczNiIsImEiOiJjbGhqNGNjMjcwODY1M2xveDhtMHJlbGI5In0.2opk31JUxiuBUbz4CN_Sgw",
// });

// const getCoordForAddress = () => {
//   return {
//     lat: 40.7484474,
//     lon: -73.9871516,
//   };
// };

// //code for api
// // const axios = require("axios");
// // const { response } = require("express");
// // const HttpError = require("../models/http-error");
// // const API_KEY = "";
// // const getCoordForAddress = async (address) => {
// //   const response = await axios.get(
// //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
// //       address
// //     )}&key=${YOUR_API_KEY}`
// //   );
// //   const data = response.data;
// //   if (!data || data.status === "ZERO_RESULTS") {
// //     const error = HttpError(
// //       "Could not find location for the specified address",
// //       422
// //     );
// //     throw error;
// //   }
// //   const coordinates = data.results[0].geometry.location;
// //   return coordinates;
// // };
// module.exports = getCoordForAddress;
const HttpError = require("../models/http-error");
const mapboxClient = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mapboxClient({
  accessToken:process.env.MAP_API,
f26f9ea15736c6acce14e360f342bd1f036d1b5c
});

async function getCoordinates(address) {
  try {
    const response = await geocodingClient
      .forwardGeocode({
        query: address,
        limit: 1,
      })
      .send();

    if (
      response &&
      response.body &&
      response.body.features &&
      response.body.features.length
    ) {
      const feature = response.body.features[0];
      return {
        lat: feature.center[1],
        lon: feature.center[0],
      };
    }
  } catch (error) {
    console.error(error);
  }

  return null;
}
module.exports = getCoordinates;
