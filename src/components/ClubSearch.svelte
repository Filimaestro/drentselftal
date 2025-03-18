<script lang="ts">
  let searchTerm: string = '';
  let suggestions: string[] = [];
  let isOpen: boolean = false;

  // This will be replaced with actual API calls later
  function handleSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    searchTerm = input.value;
    
    // Simulated suggestions (will be replaced with API data)
    if (searchTerm.length > 2) {
      suggestions = [
        'FC Groningen',
        'SC Heerenveen',
        'FC Emmen',
        'FC Twente',
        'Heracles Almelo'
      ].filter(club => 
        club.toLowerCase().includes(searchTerm.toLowerCase())
      );
      isOpen = true;
    } else {
      suggestions = [];
      isOpen = false;
    }
  }

  function selectClub(club: string) {
    searchTerm = club;
    isOpen = false;
    // Emit selection event (will be implemented later)
  }
</script>

<template>
  <div class="club-search">
    <input
      type="text"
      placeholder="Search for a club..."
      bind:value={searchTerm}
      on:input={handleSearch}
    />
    {#if isOpen && suggestions.length > 0}
      <ul class="suggestions">
        {#each suggestions as club}
          <li on:click={() => selectClub(club)}>{club}</li>
        {/each}
      </ul>
    {/if}
  </div>
</template>

<style>
  .club-search {
    position: relative;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 4px;
    padding: 0;
    list-style: none;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
  }

  .suggestions li {
    padding: 0.5rem;
    cursor: pointer;
  }

  .suggestions li:hover {
    background-color: #f0f0f0;
  }
</style> 