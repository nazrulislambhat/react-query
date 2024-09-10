import { useState, useEffect } from 'react';
import axios from 'axios';
import { PiPersonSimpleHikeBold } from 'react-icons/pi';

const SuperHerosPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:4000/superheros')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2 className="name old">
        <PiPersonSimpleHikeBold className="svg" />
        Super Heros Page
      </h2>
      {data.map((hero) => {
        return (
          <div key={hero.id} className="hero">
            <h3>{hero.name}</h3> - <p>{hero.alterEgo}</p>
          </div>
        );
      })}
    </>
  );
};
export default SuperHerosPage;
