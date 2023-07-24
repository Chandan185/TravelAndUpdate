const HttpError = require("../models/http-error");
const mapboxClient = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mapboxClient({
  accessToken:
    "pk.eyJ1IjoiY2hhbmRhbjczNiIsImEiOiJjbGhqNGNjMjcwODY1M2xveDhtMHJlbGI5In0.2opk31JUxiuBUbz4CN_Sgw",
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
