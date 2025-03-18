<script lang="ts">
  import FootballPitch from './components/FootballPitch.svelte';
  import FormationSelector from './components/FormationSelector.svelte';
  import PlayerCard from './components/PlayerCard.svelte';
  import ClubSearch from './components/ClubSearch.svelte';

  type Formation = '4-4-2' | '4-3-3' | '3-5-2' | '5-3-2' | '4-2-3-1';

  let currentFormation: Formation = '4-4-2';

  function handleFormationChange(event: CustomEvent<Formation>) {
    currentFormation = event.detail;
  }

  // Define player positions based on formation
  const playerPositions: Record<Formation, Array<{ position: string }>> = {
    '4-4-2': [
      { position: 'GK' },
      { position: 'LB' }, { position: 'CB' }, { position: 'CB' }, { position: 'RB' },
      { position: 'LM' }, { position: 'CM' }, { position: 'CM' }, { position: 'RM' },
      { position: 'ST' }, { position: 'ST' }
    ],
    '4-3-3': [
      { position: 'GK' },
      { position: 'LB' }, { position: 'CB' }, { position: 'CB' }, { position: 'RB' },
      { position: 'CM' }, { position: 'CM' }, { position: 'CM' },
      { position: 'LW' }, { position: 'ST' }, { position: 'RW' }
    ],
    '3-5-2': [
      { position: 'GK' },
      { position: 'CB' }, { position: 'CB' }, { position: 'CB' },
      { position: 'LWB' }, { position: 'CM' }, { position: 'CM' }, { position: 'CM' }, { position: 'RWB' },
      { position: 'ST' }, { position: 'ST' }
    ],
    '5-3-2': [
      { position: 'GK' },
      { position: 'LWB' }, { position: 'CB' }, { position: 'CB' }, { position: 'CB' }, { position: 'RWB' },
      { position: 'CM' }, { position: 'CM' }, { position: 'CM' },
      { position: 'ST' }, { position: 'ST' }
    ],
    '4-2-3-1': [
      { position: 'GK' },
      { position: 'LB' }, { position: 'CB' }, { position: 'CB' }, { position: 'RB' },
      { position: 'CDM' }, { position: 'CDM' },
      { position: 'CAM' }, { position: 'CAM' }, { position: 'CAM' },
      { position: 'ST' }
    ]
  };
</script>

<main>
  <div class="header">
    <h1>Drents Elftal</h1>
    <p class="subtitle">Create your best eleven</p>
  </div>
  
  <div class="container">
    <div class="pitch-section">
      <FormationSelector 
        selectedFormation={currentFormation}
        on:formationChange={handleFormationChange}
      />
      <FootballPitch formation={currentFormation} />
    </div>
    
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

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin: 0;
  }

  .subtitle {
    color: #666;
    margin: 0.5rem 0 0;
    font-size: 1.1rem;
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .pitch-section {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .player-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
    }

    .player-list {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }

  @media (max-width: 640px) {
    main {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }
  }
</style>
