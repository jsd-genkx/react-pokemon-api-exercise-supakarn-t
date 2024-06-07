import axios from "axios";
import { useEffect, useState } from "react";

const typeColors = {
	fire: "bg-red-500",
	water: "bg-blue-500",
	grass: "bg-green-500",
	electric: "bg-yellow-500",
	psychic: "bg-pink-500",
	ice: "bg-blue-200",
	dragon: "bg-purple-500",
	dark: "bg-gray-800",
	fairy: "bg-pink-300",
	normal: "bg-gray-400",
	fighting: "bg-orange-700",
	flying: "bg-indigo-300",
	poison: "bg-purple-700",
	ground: "bg-yellow-700",
	rock: "bg-yellow-900",
	bug: "bg-green-700",
	ghost: "bg-purple-900",
	steel: "bg-gray-500",
};

const PokemonSearchFetchAxios = () => {
	const [pokemon, setPokemon] = useState(null);
	const [query, setQuery] = useState("");
	const [error, setError] = useState(null);
	const [suggestions, setSuggestions] = useState([]);
	const [isFocused, setIsFocused] = useState(false);

	const fetchPokemonNames = async () => {
		try {
			const response = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=1000"
			);
			const data = await response.data.results;
			setSuggestions(data.map((p) => p.name));
		} catch (err) {
			console.error("Failed to fetch Pokémon names:", err);
		}
	};

	useEffect(() => {
		fetchPokemonNames();
	}, []);

	const searchPokemon = async (e) => {
		e.preventDefault();
		setError(null);
		setPokemon(null);

		try {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
			);

			console.log(response);

			const data = await response.data;
			setPokemon(data);
		} catch (err) {
			setError("Pokemon not found");
		}
	};

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSuggestionClick = (name) => {
		setQuery(name);
		setIsFocused(false);
	};

	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-xl w-1/3">
			<h2 className="text-4xl font-bold mb-6">Pokemon Search</h2>
			<form onSubmit={searchPokemon} className="w-full max-w-sm relative">
				<input
					type="text"
					className="w-full p-2 border rounded mb-4"
					placeholder="Enter Pokemon name"
					value={query}
					onChange={handleInputChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setTimeout(() => setIsFocused(false), 100)}
				/>
				{isFocused && suggestions.length > 0 && (
					<ul className="absolute top-12 left-0 w-full bg-white border rounded shadow-md max-h-60 overflow-y-auto z-10">
						{suggestions
							.filter((name) =>
								name.toLowerCase().startsWith(query.toLowerCase())
							)
							.map((name) => (
								<li
									key={name}
									className="p-2 cursor-pointer hover:bg-gray-200"
									onMouseDown={() => handleSuggestionClick(name)}
								>
									{name}
								</li>
							))}
					</ul>
				)}
				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-2 rounded"
				>
					Search
				</button>
			</form>
			{error && <p className="mt-4 text-red-500">{error}</p>}
			{pokemon && (
				<div className="mt-6 p-4 bg-white rounded shadow-md w-full max-w-md">
					<h2 className="text-2xl text-center font-bold mb-4 capitalize">
						{pokemon.name}
					</h2>

					<div className="flex">
						<img
							src={pokemon.sprites.front_default}
							alt={pokemon.name}
							className="w-1/2 mx-auto mb-4"
						/>
						<div className="flex flex-col justify-around w-1/2">
							{pokemon.stats.map((stat) => (
								<div key={stat.stat.name} className="flex justify-end gap-4">
									<p className="capitalize ">{stat.stat.name}:</p>
									<p className="font-bold w-1/5 text-center">
										{stat.base_stat}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="mt-4 flex justify-center">
						{pokemon.types.map((typeInfo) => (
							<span
								key={typeInfo.type.name}
								className={`px-4 py-1 rounded-full text-white ${
									typeColors[typeInfo.type.name]
								} mx-1`}
							>
								{typeInfo.type.name}
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default PokemonSearchFetchAxios;
