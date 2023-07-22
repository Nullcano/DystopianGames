<script>
	import GameDetails from '$lib/GameDetails.svelte';

	export let data;
	$: game = data.gameData;
</script>

<svelte:head>
	<title>{game.name}</title>
	<meta name="description" content="Dystopian Games" />
</svelte:head>

{#if game && game != null}
	<GameDetails 
		gameName={game.name} 
		gameImage={game.background_image} 
		gameRelease={game.released}
		gameGenres={game.genres}
		gameDescription={game.description}
	/>
{:else}
  <p>Loading...</p>
{/if}