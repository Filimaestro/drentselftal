<script lang="ts">
  export let position: string;
  export let playerName: string = '';
  export let clubName: string = '';
  export let jerseyColor: string = '#ffffff'; // Default white jersey

  function handlePlayerChange(event: Event) {
    const input = event.target as HTMLInputElement;
    playerName = input.value;
    // Emit change event (will be implemented later)
  }

  function handleClubChange(event: Event) {
    const input = event.target as HTMLInputElement;
    clubName = input.value;
    // Emit change event (will be implemented later)
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
      <input 
        type="text" 
        placeholder="Club" 
        bind:value={clubName}
        on:input={handleClubChange}
      />
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
  }

  .position-label {
    font-weight: bold;
    color: #333;
  }

  .jersey {
    width: 60px;
    height: 80px;
    border: 2px solid #333;
    border-radius: 4px;
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
  }
</style> 