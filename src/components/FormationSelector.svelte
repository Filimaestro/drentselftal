<script lang="ts">
  // Common football formations
  const formations = [
    { id: '4-4-2', name: '4-4-2' },
    { id: '4-3-3', name: '4-3-3' },
    { id: '3-5-2', name: '3-5-2' },
    { id: '5-3-2', name: '5-3-2' },
    { id: '4-2-3-1', name: '4-2-3-1' }
  ];

  let selectedFormation = '4-4-2';

  function handleFormationChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedFormation = select.value;
    // Emit change event (will be implemented later)
  }
</script>

<template>
  <div class="formation-selector">
    <label for="formation">Formation:</label>
    <select 
      id="formation" 
      bind:value={selectedFormation}
      on:change={handleFormationChange}
    >
      {#each formations as formation}
        <option value={formation.id}>{formation.name}</option>
      {/each}
    </select>
  </div>
</template>

<style>
  .formation-selector {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  select {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
</style> 