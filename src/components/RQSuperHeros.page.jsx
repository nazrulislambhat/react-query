import { SiReactquery } from 'react-icons/si';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeros = () => {
  return axios.get('http://localhost:4000/superheros').then((response) => {
    return response.data;
  });
};
function RQSuperHerosPage() {
  const { isLoading, data, error, isError, isFetching, refetch } = useQuery(
    'superheros',
    fetchSuperHeros,
    {
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: false, //stops if window loose focus
      // refetchIntervalInBackground: true,
      enabled: true,
    }
  );
  console.log('Loading:', isLoading);
  console.log('Fetching: ', isFetching);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
    <>
      <button onClick={() => refetch()}>Refetch</button>
      <h2 className="name new">
        <SiReactquery className="svg" />
        React Query Super Heros Page
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
}

export default RQSuperHerosPage;
