import axios from "axios";
import { useEffect, useState } from "react";

const PokemonBasicFetchAxios = () => {
	const [pokemonData, setPokemonData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchPokemon = async () => {
		try {
			// get data from api
			const response = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=20"
			);

			// handle data
			setPokemonData(response.data.results);
		} catch (error) {
			// handle error
			setError(error);
		} finally {
			// handle loading
			setLoading(false);
		}
	};

	useEffect(() => {
		// invoke function
		fetchPokemon();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
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

export default PokemonBasicFetchAxios;
