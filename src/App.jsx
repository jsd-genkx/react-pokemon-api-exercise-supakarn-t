// import PokemonBasicFetch from "./components/PokemonBasicFetch";
// import PokemonFetch from "./components/PokemonFetch";
// import PokemonSearchFetch from "./components/PokemonSearchFetch";
import PokemonBasicFetchAxios from "./components/PokemonBasicFetchAxios";
import PokemonFetchAxios from "./components/PokemonFetchAxios";
import PokemonSearchFetchAxios from "./components/PokemonSearchFetchAxios";

const App = () => {
	return (
		<div className="flex flex-col items-center gap-8 min-h-screen p-4">
			<h1>Pokémon List</h1>

			{/* Fetch API */}
			{/* <PokemonBasicFetch /> */}
			{/* <PokemonFetch /> */}

			{/* Bonus Code Example */}
			{/* <PokemonSearchFetch /> */}

			{/* Axios */}
			<PokemonBasicFetchAxios />

			<div className="flex items-start gap-16 w-11/12">
				{/* Bonus Code Challenge: refactor PokemonSearchFetch to use Axios */}
				<PokemonSearchFetchAxios />

				<PokemonFetchAxios />
			</div>
		</div>
	);
};

export default App;
