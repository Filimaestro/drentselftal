<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let searchTerm: string = '';
  let suggestions: Array<{ name: string; jerseyColor: string }> = [];
  let isOpen: boolean = false;
  let selectedIndex: number = -1;

  // This will be replaced with actual API calls later
  function handleSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    searchTerm = input.value;
    
    // Simulated suggestions (will be replaced with API data)
    if (searchTerm.length > 2) {
      suggestions = [
        { name: 'FC Groningen', jerseyColor: '#0066cc' },
        { name: 'SC Heerenveen', jerseyColor: '#ffffff' },
        { name: 'FC Emmen', jerseyColor: '#ff0000' },
        { name: 'FC Twente', jerseyColor: '#ff0000' },
        { name: 'Heracles Almelo', jerseyColor: '#000000' }
      ].filter(club => 
        club.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      isOpen = true;
      selectedIndex = -1;
    } else {
      suggestions = [];
      isOpen = false;
    }
  }

  function selectClub(club: { name: string; jerseyColor: string }, index: number) {
    searchTerm = club.name;
    selectedIndex = index;
    isOpen = false;
    dispatch('clubSelect', { 
      clubName: club.name,
      jerseyColor: club.jerseyColor
    });
  }

  function handleKeyDown(event: KeyboardEvent, club: { name: string; jerseyColor: string }, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      selectClub(club, index);
    }
  }
</script>

<template>
  <div class="club-search">
    <input
      type="text"
      placeholder="Search for a club..."
      bind:value={searchTerm}
      on:input={handleSearch}
      role="combobox"
      aria-expanded={isOpen}
      aria-controls="club-suggestions"
      aria-activedescendant={selectedIndex >= 0 ? `club-option-${selectedIndex}` : undefined}
    />
    {#if isOpen && suggestions.length > 0}
      <ul 
        id="club-suggestions"
        class="suggestions" 
        role="listbox"
        aria-label="Club suggestions"
      >
        {#each suggestions as club, index}
          <li 
            id="club-option-{index}"
            role="option"
            aria-selected={selectedIndex === index}
            tabindex="0"
            on:click={() => selectClub(club, index)}
            on:keydown={(e) => handleKeyDown(e, club, index)}
          >
            <div class="club-option">
              <div class="jersey-preview" style="background-color: {club.jerseyColor}"></div>
              <span>{club.name}</span>
            </div>
          </li>
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
    font-size: 1rem;
  }

  input:focus {
    outline: none;
    border-color: #2c8a2c;
    box-shadow: 0 0 0 2px rgba(44, 138, 44, 0.2);
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .suggestions li {
    padding: 0.5rem;
    cursor: pointer;
  }

  .suggestions li:hover {
    background-color: #f0f0f0;
  }

  .suggestions li:focus {
    outline: none;
    background-color: #f0f0f0;
  }

  .suggestions li[aria-selected="true"] {
    background-color: #2c8a2c;
    color: white;
  }

  .club-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .jersey-preview {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
</style> 