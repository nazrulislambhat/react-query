import { useState, useEffect } from 'react';
import axios from 'axios';

export const SuperHerosPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/superheros').then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="name">Super Heros Page</h2>
      {data.map((hero) => {
        return (
          <div key={hero.id}>
            <h3>{hero.name}</h3>
            <p>{hero.power}</p>
          </div>
        );
      })}
    </>
  );
};
