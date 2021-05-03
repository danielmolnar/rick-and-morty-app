import axios from 'axios';
import { useEffect, useState } from 'react';
import EpisodeCards from '../components/EpisodeCards';
import SearchEpisodes from '../components/SearchEpisodes';

export default function Episodes() {
  const [query, setQuery] = useState('');
  const [episodeInfos, setEpisodeInfos] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/episode/?name=${query}`
      );
      const episodes = result.data.results.map((episode) => ({
        air_date: episode.air_date,
        created: episode.created,
        id: episode.id,
        name: episode.name,
      }));
      setEpisodeInfos(episodes);
    };
    fetchItems();
  }, [query]);

  return (
    <>
      <SearchEpisodes
        getQuery={(q) => setQuery(q)}
        placeholder="Search for Episode"
      />
      {episodeInfos.map(({ id, name, air_date, created }) => (
        <EpisodeCards
          air_date={air_date}
          created={created}
          key={id}
          name={name}
          number={id}
        />
      ))}
    </>
  );
}
