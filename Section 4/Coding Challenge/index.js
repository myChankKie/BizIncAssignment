// Page Component, receiving allDigimons
// from getStaticProps

export default function Home({ allDigimons }) {
    return (
        <ul>
            { /* mapping all the data inside 
            an unordered list */}
            {allDigimons.map((digimon) => (
			<li> {digimon.name}</li>
            ))}
        </ul>
    );
}
export async function getStaticProps() {
 
    // Call the fetch method and passing 
    // the digimonAPI link
    const response = await fetch(
        'https://digimon-api.vercel.app/api/digimon');
 
    // Parse the JSON
    const data = await response.json();
 
    // Finally we return the result
    // inside props as allPokemons
    return {
        props: { allDigimons: data},
    };
}