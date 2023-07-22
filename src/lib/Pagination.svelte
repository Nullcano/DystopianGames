<script>
  import { goto } from '$app/navigation';

  export let currentPage;
  
  const nextPage = () => {
    currentPage++;
    navigateToPage(currentPage);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      currentPage--;
      navigateToPage(currentPage);
    }
  };

  const navigateToPage = (pageNumber) => {
    goto(`/${pageNumber}`);
  };
</script>

<div class="pagination">
  <a
    role="button"
    href={null}
    on:click|preventDefault={previousPage}
    class={currentPage === 1 ? 'disabled' : ''}
  >
    Previous
  </a>

  <span class="current-page">Page {currentPage}</span>

  <a
    role="button"
    href={null}
    on:click|preventDefault={nextPage}
  >
    Next
  </a>
</div>

<style>
  .pagination {
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  a {
    display: block;
    padding: .5rem 1rem;
    background: rgba(0,0,0,.5);
    border: 1px solid rgba(255,255,255,.25);
    outline: 1px solid rgba(255,255,255,.1);
    outline-offset: 2px;
    cursor: pointer;
  }
  a:hover {
    background: rgba(0,0,0,.75);
    text-decoration: none;
  }
  a.disabled {
    pointer-events: none;
    opacity: .5;
  }
</style>