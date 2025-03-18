<script lang="ts">
  import FootballPitch from './components/FootballPitch.svelte';
  import FormationSelector from './components/FormationSelector.svelte';
  import PlayerCard from './components/PlayerCard.svelte';
  import ClubSearch from './components/ClubSearch.svelte';

  type Formation = '4-4-2' | '4-3-3' | '3-5-2' | '5-3-2' | '4-2-3-1';

  let currentFormation: Formation = '4-4-2';

  function handleFormationChange(event: CustomEvent<{ formation: Formation }>) {
    currentFormation = event.detail.formation;
  }

  // Define player positions based on formation
  const playerPositions: Record<Formation, Array<{ position: string }>> = {
    '4-4-2': [
      { position: 'GK' },
      { position: 'LB' },
      { position: 'CB' },
      { position: 'CB' },
      { position: 'RB' },
      { position: 'LM' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'RM' },
      { position: 'ST' },
      { position: 'ST' }
    ],
    '4-3-3': [
      { position: 'GK' },
      { position: 'LB' },
      { position: 'CB' },
      { position: 'CB' },
      { position: 'RB' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'LW' },
      { position: 'ST' },
      { position: 'RW' }
    ],
    '3-5-2': [
      { position: 'GK' },
      { position: 'CB' },
      { position: 'CB' },
      { position: 'CB' },
      { position: 'LM' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'RM' },
      { position: 'ST' },
      { position: 'ST' }
    ],
    '5-3-2': [
      { position: 'GK' },
      { position: 'LB' },
      { position: 'CB' },
      { position: 'CB' },
      { position: 'CB' },
      { position: 'RB' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'ST' },
      { position: 'ST' }
    ],
    '4-2-3-1': [
      { position: 'GK' },
      { position: 'LB' },
      { position: 'CB' },
      { position: 'CB' },
      { position: 'RB' },
      { position: 'CM' },
      { position: 'CM' },
      { position: 'LW' },
      { position: 'CAM' },
      { position: 'RW' },
      { position: 'ST' }
    ]
  };
</script>

<main>
  <h1>Drents Elftal</h1>
  <div class="container">
    <FormationSelector 
      selectedFormation={currentFormation}
      on:formationChange={handleFormationChange}
    />
    <FootballPitch formation={currentFormation} />
    <div class="player-list">
      {#each playerPositions[currentFormation] as player}
        <PlayerCard 
          position={player.position}
        />
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .player-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
</style>
