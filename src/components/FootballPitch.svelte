<script lang="ts">
  type Position = {
    bottom: string;
    left?: string;
    right?: string;
  };

  type FormationPositions = {
    defenders: Position[];
    midfielders: Position[];
    forwards: Position[];
  };

  type Formations = '4-4-2' | '4-3-3' | '3-5-2' | '5-3-2' | '4-2-3-1';

  export let formation: Formations = "4-4-2";

  $: positions = getPositionsForFormation(formation);

  function getPositionsForFormation(formation: Formations) {
    const basePositions = {
      goalkeeper: { bottom: '5%', left: '50%' }
    };

    const formationPositions: Record<Formations, FormationPositions> = {
      '4-4-2': {
        defenders: [
          { bottom: '25%', left: '10%' },
          { bottom: '25%', left: '35%' },
          { bottom: '25%', left: '65%' },
          { bottom: '25%', right: '10%' }
        ],
        midfielders: [
          { bottom: '45%', left: '10%' },
          { bottom: '45%', left: '35%' },
          { bottom: '45%', left: '65%' },
          { bottom: '45%', right: '10%' }
        ],
        forwards: [
          { bottom: '65%', left: '35%' },
          { bottom: '65%', right: '35%' }
        ]
      },
      '4-3-3': {
        defenders: [
          { bottom: '25%', left: '10%' },
          { bottom: '25%', left: '35%' },
          { bottom: '25%', left: '65%' },
          { bottom: '25%', right: '10%' }
        ],
        midfielders: [
          { bottom: '45%', left: '25%' },
          { bottom: '45%', left: '50%' },
          { bottom: '45%', right: '25%' }
        ],
        forwards: [
          { bottom: '65%', left: '20%' },
          { bottom: '65%', left: '50%' },
          { bottom: '65%', right: '20%' }
        ]
      },
      '3-5-2': {
        defenders: [
          { bottom: '25%', left: '25%' },
          { bottom: '25%', left: '50%' },
          { bottom: '25%', right: '25%' }
        ],
        midfielders: [
          { bottom: '45%', left: '10%' },
          { bottom: '45%', left: '30%' },
          { bottom: '45%', left: '50%' },
          { bottom: '45%', left: '70%' },
          { bottom: '45%', right: '10%' }
        ],
        forwards: [
          { bottom: '65%', left: '35%' },
          { bottom: '65%', right: '35%' }
        ]
      },
      '5-3-2': {
        defenders: [
          { bottom: '25%', left: '10%' },
          { bottom: '25%', left: '30%' },
          { bottom: '25%', left: '50%' },
          { bottom: '25%', left: '70%' },
          { bottom: '25%', right: '10%' }
        ],
        midfielders: [
          { bottom: '45%', left: '30%' },
          { bottom: '45%', left: '50%' },
          { bottom: '45%', right: '30%' }
        ],
        forwards: [
          { bottom: '65%', left: '35%' },
          { bottom: '65%', right: '35%' }
        ]
      },
      '4-2-3-1': {
        defenders: [
          { bottom: '25%', left: '10%' },
          { bottom: '25%', left: '35%' },
          { bottom: '25%', left: '65%' },
          { bottom: '25%', right: '10%' }
        ],
        midfielders: [
          { bottom: '40%', left: '35%' },
          { bottom: '40%', right: '35%' },
          { bottom: '55%', left: '25%' },
          { bottom: '55%', left: '50%' },
          { bottom: '55%', right: '25%' }
        ],
        forwards: [
          { bottom: '70%', left: '50%' }
        ]
      }
    };

    return {
      ...basePositions,
      ...formationPositions[formation]
    };
  }
</script>

<div class="football-pitch">
  <div class="pitch-container">
    <!-- Field markings -->
    <div class="pitch-markings">
      <!-- Center circle and line -->
      <div class="center-circle"></div>
      <div class="center-line"></div>
      <div class="center-spot"></div>
      
      <!-- Penalty areas -->
      <div class="penalty-area left">
        <div class="penalty-spot"></div>
        <div class="penalty-arc"></div>
      </div>
      <div class="penalty-area right">
        <div class="penalty-spot"></div>
        <div class="penalty-arc"></div>
      </div>
      
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
      <div class="player-position goalkeeper" style="bottom: {positions.goalkeeper.bottom}; left: {positions.goalkeeper.left}">
        <div class="player-number">1</div>
      </div>
      
      <!-- Defenders -->
      {#each positions.defenders as pos, i}
        <div class="player-position defender" style="bottom: {pos.bottom}; {pos.left ? 'left: ' + pos.left : 'right: ' + pos.right}">
          <div class="player-number">{i + 2}</div>
        </div>
      {/each}
      
      <!-- Midfielders -->
      {#each positions.midfielders as pos, i}
        <div class="player-position midfielder" style="bottom: {pos.bottom}; {pos.left ? 'left: ' + pos.left : 'right: ' + pos.right}">
          <div class="player-number">{i + 6}</div>
        </div>
      {/each}
      
      <!-- Forwards -->
      {#each positions.forwards as pos, i}
        <div class="player-position forward" style="bottom: {pos.bottom}; {pos.left ? 'left: ' + pos.left : 'right: ' + pos.right}">
          <div class="player-number">{i + 10}</div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .football-pitch {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    aspect-ratio: 68/105;
    background-color: #2c8a2c;
    background-image: linear-gradient(
      #2c8a2c 2px,
      transparent 2px
    ),
    linear-gradient(90deg, #2c8a2c 2px, transparent 2px);
    background-size: 20px 20px;
    position: relative;
    border: 4px solid white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
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
    width: 20%;
    height: 20%;
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

  .center-spot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
  }

  .penalty-area {
    position: absolute;
    width: 44%;
    height: 30%;
    border: 2px solid white;
  }

  .penalty-area.left {
    left: 0;
    bottom: 15%;
  }

  .penalty-area.right {
    right: 0;
    bottom: 15%;
  }

  .penalty-spot {
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
  }

  .penalty-area.left .penalty-spot {
    right: 20%;
    top: 50%;
    transform: translate(50%, -50%);
  }

  .penalty-area.right .penalty-spot {
    left: 20%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .penalty-arc {
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid white;
    border-radius: 50%;
  }

  .penalty-area.left .penalty-arc {
    right: 10%;
    top: 40%;
    border-left: none;
    border-bottom: none;
    transform: rotate(-45deg);
  }

  .penalty-area.right .penalty-arc {
    left: 10%;
    top: 40%;
    border-right: none;
    border-bottom: none;
    transform: rotate(45deg);
  }

  .goal-area {
    position: absolute;
    width: 18%;
    height: 12%;
    border: 2px solid white;
  }

  .goal-area.left {
    left: 0;
    bottom: 24%;
  }

  .goal-area.right {
    right: 0;
    bottom: 24%;
  }

  .corner-arc {
    position: absolute;
    width: 8%;
    height: 8%;
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
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .player-position:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .player-number {
    color: white;
    font-weight: bold;
    font-size: 14px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .goalkeeper {
    background-color: #fdd835;
    border: 2px solid #f9a825;
  }

  .defender {
    background-color: #1e88e5;
    border: 2px solid #1565c0;
  }

  .midfielder {
    background-color: #43a047;
    border: 2px solid #2e7d32;
  }

  .forward {
    background-color: #e53935;
    border: 2px solid #c62828;
  }
</style> 