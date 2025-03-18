<script lang="ts">
  export let formation = "4-4-2"; // Default formation
</script>

<template>
  <div class="football-pitch">
    <div class="pitch-container">
      <!-- Field markings -->
      <div class="pitch-markings">
        <!-- Center circle -->
        <div class="center-circle"></div>
        <div class="center-line"></div>
        
        <!-- Penalty areas -->
        <div class="penalty-area left"></div>
        <div class="penalty-area right"></div>
        
        <!-- Goal areas -->
        <div class="goal-area left"></div>
        <div class="goal-area right"></div>
        
        <!-- Corner arcs -->
        <div class="corner-arc top-left"></div>
        <div class="corner-arc top-right"></div>
        <div class="corner-arc bottom-left"></div>
        <div class="corner-arc bottom-right"></div>
      </div>
      
      <!-- Player positions -->
      <div class="player-positions">
        <!-- Goalkeeper -->
        <div class="player-position goalkeeper"></div>
        
        <!-- Defenders -->
        <div class="player-position defender left-back"></div>
        <div class="player-position defender center-back-left"></div>
        <div class="player-position defender center-back-right"></div>
        <div class="player-position defender right-back"></div>
        
        <!-- Midfielders -->
        <div class="player-position midfielder left-mid"></div>
        <div class="player-position midfielder center-mid-left"></div>
        <div class="player-position midfielder center-mid-right"></div>
        <div class="player-position midfielder right-mid"></div>
        
        <!-- Forwards -->
        <div class="player-position forward left-forward"></div>
        <div class="player-position forward right-forward"></div>
      </div>
    </div>
  </div>
</template>

<style>
  .football-pitch {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    aspect-ratio: 68/105; /* Standard football pitch ratio */
    background-color: #2c8a2c; /* Green pitch color */
    position: relative;
    border: 2px solid white;
  }

  .pitch-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .pitch-markings {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .player-positions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Field markings */
  .center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15%;
    height: 15%;
    border: 2px solid white;
    border-radius: 50%;
  }

  .center-line {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: white;
  }

  .penalty-area {
    position: absolute;
    top: 20%;
    width: 15%;
    height: 60%;
    border: 2px solid white;
  }

  .penalty-area.left {
    left: 0;
  }

  .penalty-area.right {
    right: 0;
  }

  .goal-area {
    position: absolute;
    top: 35%;
    width: 5%;
    height: 30%;
    border: 2px solid white;
  }

  .goal-area.left {
    left: 0;
  }

  .goal-area.right {
    right: 0;
  }

  .corner-arc {
    position: absolute;
    width: 10%;
    height: 10%;
    border: 2px solid white;
    border-radius: 50%;
  }

  .corner-arc.top-left {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  .corner-arc.top-right {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }

  .corner-arc.bottom-left {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }

  .corner-arc.bottom-right {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }

  /* Player positions */
  .player-position {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .player-position:hover {
    background-color: white;
    transform: translate(-50%, -50%) scale(1.1);
  }

  /* Position specific styles */
  .goalkeeper {
    bottom: 5%;
    left: 50%;
  }

  .left-back {
    bottom: 25%;
    left: 10%;
  }

  .center-back-left {
    bottom: 25%;
    left: 35%;
  }

  .center-back-right {
    bottom: 25%;
    left: 65%;
  }

  .right-back {
    bottom: 25%;
    right: 10%;
  }

  .left-mid {
    bottom: 45%;
    left: 10%;
  }

  .center-mid-left {
    bottom: 45%;
    left: 35%;
  }

  .center-mid-right {
    bottom: 45%;
    left: 65%;
  }

  .right-mid {
    bottom: 45%;
    right: 10%;
  }

  .left-forward {
    bottom: 65%;
    left: 25%;
  }

  .right-forward {
    bottom: 65%;
    right: 25%;
  }
</style> 