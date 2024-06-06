import { useEffect, useState } from "react";

const PokemonBasicFetch = () => {
	const [pokemonData, setPokemonData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				// fetch data from api
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=10"
				);

				if (!response.ok) {
					throw new Error("Network response was not ok.");
				}

				// handle data
				const data = await response.json();
				setPokemonData(data.results);
			} catch (error) {
				// handle error
				setError(error);
			} finally {
				// at first, loading is true, we must set false to show pokeData
				setLoading(false);
			}
		};
		// invoke function
		fetchPokemon();
	}, []);

	if (loading) {
		return <h2 className="flex justify-center ">Loading...</h2>;
	}

	if (error) {
		return <h2 className="flex justify-center ">Error: {error}</h2>;
	}

	return (
		<div>
			<ul className="flex flex-wrap gap-4 ">
				{pokemonData.map((pokemon, index) => (
					<li
						key={index}
						className="p-4 rounded-full bg-orange-200 hover:bg-orange-300 "
					>
						{pokemon.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PokemonBasicFetch;
