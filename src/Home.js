import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2023-11-09&to=2023-11-09&sortBy=popularity&apiKey=20c90a308e904e2ab5a58bc7699de1b0 "
    )
      .then((Response) => Response.json())
      .then((news) => setData(news))
      .catch((error) => console.error("something,s off",error));
  }, []);
  return (
    <div>
      {data ? (
        data.articles.map((article, index) => (
          <div key={index}>
            <p>Title:{article.title}</p>
            <img src={article.urlToImage} alt={article.title}/>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
