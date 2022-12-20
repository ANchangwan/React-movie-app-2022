import { useState, useEffect } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers?limit=10`)
      .then((respons) => respons.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log(coins);
  return (
    <div>
      <h1>Coin Tracker</h1>
      
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select>
            {coins.map((item, index) => (
              <option>
                {item.name} ({item.symbol}) : {item.quotes.USD.price}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Coin;
