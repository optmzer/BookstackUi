
const BOOKS_URI = 

export function getAllBooks(): Promise<any> {
    const uri = WEATHER_API_URI + "weather?q=" + cityName + "&APPID=" + process.env.REACT_APP_WEATHER_APPID;
    return fetch(uri, {
      headers,
      method: "POST",
    })
    .then(
      (res) => res.json(), // Have to have this in order to get to the body.
    );
  }