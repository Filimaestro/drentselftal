<script lang="ts">
  import FootballPitch from './components/FootballPitch.svelte';
  import FormationSelector from './components/FormationSelector.svelte';
  import PlayerCard from './components/PlayerCard.svelte';
  import ClubSearch from './components/ClubSearch.svelte';
</script>

<main>
  <h1>Drents Elftal</h1>
  <div class="container">
    <FormationSelector />
    <FootballPitch />
    <div class="player-list">
      <PlayerCard position="GK" />
      <PlayerCard position="LB" />
      <PlayerCard position="CB" />
      <PlayerCard position="CB" />
      <PlayerCard position="RB" />
      <PlayerCard position="LM" />
      <PlayerCard position="CM" />
      <PlayerCard position="CM" />
      <PlayerCard position="RM" />
      <PlayerCard position="ST" />
      <PlayerCard position="ST" />
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
