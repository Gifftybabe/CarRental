export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "40811a1e6amsh4b504c15df2faa7p149c55jsn6e49a3514868",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
