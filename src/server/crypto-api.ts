export async function GetCoinData() {
  // Use real api later https://api.coincap.io/v2/assets
  const data = await fetch('http://127.0.0.1:3000/data', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  return data.json();
}
