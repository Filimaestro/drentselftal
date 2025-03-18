<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // Common football formations
  const formations = [
    { id: '4-4-2', name: '4-4-2' },
    { id: '4-3-3', name: '4-3-3' },
    { id: '3-5-2', name: '3-5-2' },
    { id: '5-3-2', name: '5-3-2' },
    { id: '4-2-3-1', name: '4-2-3-1' }
  ];

  export let selectedFormation = '4-4-2';

  function handleFormationChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedFormation = select.value;
    dispatch('formationChange', { formation: selectedFormation });
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
    background-color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  select:hover {
    border-color: #666;
  }

  select:focus {
    outline: none;
    border-color: #2c8a2c;
    box-shadow: 0 0 0 2px rgba(44, 138, 44, 0.2);
  }
</style> 