<script>
	import Pagination from '$lib/Pagination.svelte';
	import GamesGrid from '$lib/GamesGrid.svelte';
	import GameCard from '$lib/GameCard.svelte';

	export let data;
	$: gamesData = data.gamesData;
</script>

<svelte:head>
	<title>DystopianGames</title>
	<meta name="description" content="Dystopian Games" />
</svelte:head>

{#if gamesData.results && gamesData.results.length > 0}
	<GamesGrid>
		{#each gamesData.results as game}
			<a href="/g/{game.slug}">
				<GameCard 
					gameName={game.name} 
					gameImage={game.background_image} 
					gameRelease={game.released}
					gameGenres={game.genres}
				/>
			</a>
		{/each}
  </GamesGrid>
  <Pagination currentPage={data.page} />
{:else}
  <p>Loading...</p>
{/if}