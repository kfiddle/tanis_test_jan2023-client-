  // var requestOptions = {
  //   method: "GET",
  // };

  // fetch(
  //   "https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=5f9f1de121ec497fafd968cc06afb9da",
  //   requestOptions
  // )
  //   .then((response) => response.json())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));

  // const findAddress = async (event) => {
  //   const text = event.target.value;
  //   const response = await fetch(
  //     `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=5f9f1de121ec497fafd968cc06afb9da`
  //   );
  //   const unscrambled = await response.json();
  //   console.log(unscrambled.features.map((feature) => feature.properties.map));
  // };