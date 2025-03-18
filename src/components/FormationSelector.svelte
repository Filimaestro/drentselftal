<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type Formation = '4-4-2' | '4-3-3' | '3-5-2' | '5-3-2' | '4-2-3-1';
  
  const formations: Formation[] = ['4-4-2', '4-3-3', '3-5-2', '5-3-2', '4-2-3-1'];
  let selectedFormation: Formation = '4-4-2';
  
  const dispatch = createEventDispatcher<{
    formationChange: Formation;
  }>();

  function handleChange() {
    dispatch('formationChange', selectedFormation);
  }
</script>

<div class="formation-selector">
  <label for="formation">Formation:</label>
  <select
    id="formation"
    bind:value={selectedFormation}
    on:change={handleChange}
  >
    {#each formations as formation}
      <option value={formation}>{formation}</option>
    {/each}
  </select>
</div>

<style>
  .formation-selector {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }

  label {
    font-weight: 500;
    color: #333;
  }

  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  select:hover {
    border-color: #666;
  }

  select:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
</style> 