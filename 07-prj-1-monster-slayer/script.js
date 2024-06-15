const MIN_DAMAGE = 5;
const MAX_DAMAGE = 12;

function getChange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
      currentRound: 0,
      gameResult: "",
      logs: [],
    };
  },
  computed: {
    monsterBar() {
      return { width: `${this.monsterHP}%` };
    },
    playerBar() {
      return { width: `${this.playerHP}%` };
    },
    specialAttackAvailable() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHP(value) {
      if (value <= 0 && this.monsterHP <= 0) this.gameResult = "draw";
      else if (value <= 0) this.gameResult = "monster wins!";
    },
    monsterHP(value) {
      if (value <= 0 && this.playerHP <= 0) this.gameResult = "draw";
      else if (value <= 0) this.gameResult = "player wins!";
    },
  },
  methods: {
    startNewGame() {
      this.monsterHP = 100;
      this.playerHP = 100;
      this.currentRound = 0;
      this.gameResult = "";
      this.logs = [];
    },
    attackPlayer() {
      const attackValue = getChange(MIN_DAMAGE + 2, MAX_DAMAGE + 3);
      const change = Math.max(0, this.playerHP - attackValue);
      this.playerHP = change;
      this.logAction("Monster", "Attacked", attackValue);
    },
    attackMonster() {
      const attackValue = getChange(MIN_DAMAGE, MAX_DAMAGE);
      const change = Math.max(0, this.monsterHP - attackValue);
      this.monsterHP = change;
      this.logAction("Player", "Attacked", attackValue);
      this.attackPlayer();
      this.currentRound++;
    },
    specialAttackMonster() {
      const attackValue = getChange(MIN_DAMAGE + 6, MAX_DAMAGE + 8);
      const change = Math.max(0, this.monsterHP - attackValue);
      this.monsterHP = change;
      this.logAction("Player", "Special-Attacked", attackValue);
      this.attackPlayer();
      this.currentRound++;
    },
    heal() {
      const healValue = getChange(MIN_DAMAGE + 4, MAX_DAMAGE + 5);
      const change = Math.min(100, this.playerHP + healValue);
      this.playerHP = change;
      this.currentRound++;
      this.logAction("Player", "Healed", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.playerHP = 0;
      this.currentRound++;
      this.logAction("Player", "Surrendered", 0);
    },
    /**
     *
     * @param {"Player"|"Monster"} who
     * @param {"Attacked"|"Healed"|"Special-Attacked"|"Surrendered"} what
     * @param {number} value
     */
    logAction(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        value,
      });
    },
  },
});

app.mount("#game");
