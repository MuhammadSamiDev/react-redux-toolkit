import { useState } from "react";
import {
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} from "../services/pokemon";

const PokeMon = () => {
  const { data, error, isLoading } = useGetPokemonQuery();
  const [pokemon, setPokemon] = useState();
  const {
    data: singleData,
    error: singleError,
    isLoading: singleIsLoading,
    isFetching,
  } = useGetPokemonByNameQuery(pokemon, { skip: !pokemon });
  const handleClick = (name) => {
    setPokemon(name);
  };
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {data?.results?.map((item) => {
            return (
              <div
                key={item?.name}
                style={{
                  border: "2px solid #5568a8",
                  padding: "10px 20px",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
                onClick={() => handleClick(item?.name)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}
      {singleError ? (
        <>Oh no, there was an error</>
      ) : singleIsLoading || isFetching ? (
        <>Loading...</>
      ) : singleData ? (
        <img
          src={singleData?.sprites.front_shiny}
          alt={singleData.species.name}
          width={500}
        />
      ) : null}
    </div>
  );
};

export default PokeMon;
