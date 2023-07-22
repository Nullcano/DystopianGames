<script>
  export let gameName, gameImage, gameRelease, gameGenres;

  let isHovered = false;
  let typedText;
  let typingSpeed = 50;
  let typingInterval;

  function startTypingAnimation() {
    clearInterval(typingInterval);
    let currentIndex = 0;
    typedText = "";
    isHovered = true;
    
    typingInterval = setInterval(() => {
      typedText += gameName[currentIndex];
      currentIndex++;
      
      if (currentIndex >= gameName.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
  }
  
  function stopTypingAnimation() {
    clearInterval(typingInterval);
    isHovered = false;
    typedText = gameName
  }

  startTypingAnimation()
</script>

<div role="article" class="card" on:mouseenter={startTypingAnimation} on:mouseleave={stopTypingAnimation}>
  <div class="deco frame-x"></div>
  <div class="deco frame-y"></div>
  <div class="deco corner-top"></div>
  <div class="deco corner-bottom"></div>
  <div class="card-image" style="background-image:url('{gameImage}')"></div>
  <div class="meta">
    {#if isHovered}
      <h2>{typedText}</h2>
    {:else}
      <h2>{typedText}</h2>
    {/if}
    {#if gameRelease}
      <p>{gameRelease}</p>
    {/if}
  </div>
  <ul>
    {#if gameGenres && gameGenres.length > 0}
      {#each gameGenres as genre}
        <li>{genre.name}</li>
      {/each}
    {/if}
  </ul>
</div>

<style>
  .card {
    position: relative;
  }
  .deco {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }
  .frame-x {
    top: 2rem;
    left: 0;
    width: 100%;
    height: calc(100% - 4rem);
    display: flex;
    justify-content: space-between;
  }
  .frame-x:before, .frame-x:after {
    content: '';
    width: 1px;
    height: 100%;
    background: rgba(255,255,255,.25);
  }
  .frame-y {
    top: 0;
    left: 2rem;
    width: calc(100% - 4rem);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .frame-y:before, .frame-y:after {
    content: '';
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,.25);
  }
  .corner-top {
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .corner-top:before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-top: 2px solid rgba(255,255,255,.5);
    border-left: 2px solid rgba(255,255,255,.5);
  }
  .corner-top:after {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-top: 2px solid rgba(255,255,255,.5);
    border-right: 2px solid rgba(255,255,255,.5);
  }
  .corner-bottom {
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .corner-bottom:before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-bottom: 2px solid rgba(255,255,255,.5);
    border-left: 2px solid rgba(255,255,255,.5);
  }
  .corner-bottom:after {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-bottom: 2px solid rgba(255,255,255,.5);
    border-right: 2px solid rgba(255,255,255,.5);
  }
  .card-image {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
		background-position: center;
		background-size: auto 100%;
    opacity: .5;
    mix-blend-mode: luminosity;
    -webkit-transition: all .8s ease;
    -moz-transition: all .8s ease;
    -ms-transition: all .8s ease;
    -o-transition: all .8s ease;
    transition: all .8s ease;
	}
	.meta {
    position: relative;
    padding: 1rem;
		display: flex;
		flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    overflow: hidden;
	}
	h2 {
    position: relative;
    height: 4rem;
    display: inline-block;
		font-size: 1rem;
    font-weight: normal;
		text-transform: uppercase;
    overflow: hidden;
    white-space: break-spaces;
	}
  h2::before {
    content: '// ';
    opacity: .5;
  }
	p {
    padding: .25rem .5rem;
		background-color: rgba(0,0,0,.75);
		backdrop-filter: blur(4px);
    font-size: .8rem;
    text-transform: uppercase;
	}
  ul {
    position: absolute;
    top: 0;
    left: 0;
    margin: .5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
  }
  li {
    padding: .25rem .5rem;
		background-color: rgba(0,0,0,.5);
		backdrop-filter: blur(4px);
    font-size: .8rem;
    text-transform: uppercase;
  }
  .card:hover > .card-image {
    mix-blend-mode: lighten;
    background-size: auto 150%;
  }
</style>