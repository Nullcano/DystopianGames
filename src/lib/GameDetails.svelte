<script>
  export let gameName, gameImage, gameRelease, gameGenres, gameDescription
</script>

<article>
  <div class="article-header" style="background-image:url('{gameImage}')">
    <div class="meta">
      <h1>{gameName}</h1>
      {#if gameRelease}
        <p>{gameRelease}</p>
      {/if}
    </div>
  </div>
  <div class="content">
    <ul>
      {#if gameGenres && gameGenres.length > 0}
        {#each gameGenres as genre}
          <li>{genre.name}</li>
        {/each}
      {/if}
    </ul>
    <div class="article-description">
      {@html gameDescription}
    </div>
  </div>
</article>

<style>
  article {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
  .article-header {
    height: 16rem;
		background-position: center;
		background-size: cover;
    display: flex;
    align-items: flex-end;
	}
	.meta {
    width: 100%;
    position: relative;
		display: flex;
    justify-content: space-between;
	}
	h1 {
    padding: 2rem;
		font-size: 2.5rem;
    font-weight: normal;
		text-transform: uppercase;
    background: rgba(0,0,0,.75);
    backdrop-filter: blur(4px);
	}
	p {
		margin-inline: 1rem;
    padding: .25rem .5rem;
		background-color: rgba(0,0,0,.75);
		backdrop-filter: blur(4px);
    font-size: .8rem;
    text-transform: uppercase;
	}
  ul {
    margin: 2rem 1rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }
  li {
    padding: .25rem .5rem;
		background-color: rgba(0,0,0,.75);
		backdrop-filter: blur(4px);
    font-size: .8rem;
    text-transform: uppercase;
    border-radius: 60em;
  }
  .article-description {
    padding: 3rem;
    max-width: 60ch;
    line-height: 1.6;
  }
</style>