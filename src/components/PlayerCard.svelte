<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ClubSearch from './ClubSearch.svelte';

  const dispatch = createEventDispatcher();

  export let position: string;
  export let playerName: string = '';
  export let clubName: string = '';
  export let jerseyColor: string = '#ffffff'; // Default white jersey

  let showClubSearch = false;

  function handlePlayerChange(event: Event) {
    const input = event.target as HTMLInputElement;
    playerName = input.value;
    dispatch('playerChange', { position, playerName });
  }

  function handleClubSelect(event: CustomEvent) {
    clubName = event.detail.clubName;
    jerseyColor = event.detail.jerseyColor;
    showClubSearch = false;
    dispatch('clubChange', { position, clubName, jerseyColor });
  }

  function toggleClubSearch() {
    showClubSearch = !showClubSearch;
  }
</script>

<template>
  <div class="player-card">
    <div class="position-label">{position}</div>
    <div class="jersey" style="background-color: {jerseyColor}">
      <!-- Jersey number will be added later -->
    </div>
    <div class="player-inputs">
      <input 
        type="text" 
        placeholder="Player name" 
        bind:value={playerName}
        on:input={handlePlayerChange}
      />
      <div class="club-section">
        {#if showClubSearch}
          <ClubSearch on:clubSelect={handleClubSelect} />
        {:else}
          <button 
            class="club-button" 
            on:click={toggleClubSearch}
          >
            {clubName || 'Select Club'}
          </button>
        {/if}
      </div>
    </div>
  </div>
</template>

<style>
  .player-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: white;
    transition: all 0.2s ease;
  }

  .player-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .position-label {
    font-weight: bold;
    color: #333;
    font-size: 1.2rem;
  }

  .jersey {
    width: 60px;
    height: 80px;
    border: 2px solid #333;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .player-inputs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  input {
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

  .club-section {
    position: relative;
    width: 100%;
  }

  .club-button {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    font-size: 1rem;
    text-align: left;
  }

  .club-button:hover {
    border-color: #2c8a2c;
  }

  .club-button:focus {
    outline: none;
    border-color: #2c8a2c;
    box-shadow: 0 0 0 2px rgba(44, 138, 44, 0.2);
  }
</style> 