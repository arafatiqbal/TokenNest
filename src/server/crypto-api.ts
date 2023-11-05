export async function GetCoinData() {
  // Use real api later https://api.coincap.io/v2/assets?limit=10
  const data = await fetch('http://127.0.0.1:3000/data?limit=10', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  return data.json();
}
