import PokemonBasicFetch from "./components/PokemonBasicFetch";
import PokemonFetch from "./components/PokemonFetch";
// import PokemonBasicFetchAxios from "./components/PokemonBasicFetchAxios";
// import PokemonFetchAxios from "./components/PokemonFetchAxios";
// import PokemonSearchFetch from "./components/PokemonSearchFetch";

const App = () => {
	return (
		<div className="flex flex-col gap-8 min-h-screen p-4">
			<h1>Pokémon List</h1>

			{/* Fetch API */}
			<PokemonBasicFetch />
			<PokemonFetch />
			{/* Axios */}
			{/* <PokemonBasicFetchAxios /> */}
			{/* <PokemonFetchAxios /> */}
			{/* Bonus Code Example */}
			{/* <PokemonSearchFetch /> */}
			{/* Bonus Code Challenge: refactor PokemonSearchFetch to use Axios */}
		</div>
	);
};

export default App;
