const weatherIcon = function(iconCode) {
  let icon;
  switch(iconCode) {
  case "01n":
    icon = "../reactApp/views/icons/moon.png";
    break;
  case "01d":
    icon = "../reactApp/views/icons/sun.png";
    break;
  case "02n":
    icon = "../reactApp/views/icons/cloud.png";
    break;
  case "02d":
    icon = "../reactApp/views/icons/cloud-2.png";
    break;
  case "03n":
  case "03d":
    icon = "../reactApp/views/icons/cloud-1.png";
    break;
  case "04n":
  case "04d":
    icon = "../reactApp/views/icons/cloud-1.png";
    break;
  case "09n":
  case "09d":
    icon = "../reactApp/views/icons/rain-2.png";
    break;
  case "10d":
    icon = "../reactApp/views/icons/rain.png";
    break;
  case "11n":
  case "11d":
    icon = "../reactApp/views/icons/rain.png";
    break;
  case "13n":
  case "13d":
    icon = "../reactApp/views/icons/snow.png";
    break;
  case "50n":
  case "50d":
    icon = "../reactApp/views/icons/";
    break;
  default:
    icon = "../reactApp/views/icons/";
  }
  return icon;
};

export default weatherIcon;
