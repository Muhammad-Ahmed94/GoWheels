/* const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
} */

const headers = {
    "x-rapidapi-key": "967a47acdemsha6ee0d56013a913p1ef11bjsnfe7c13338f7f",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  }

export async function fecthCars() {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
        headers: headers,
      }
    );
    const result = await response.json();
    return result;
}