<template>
  <div class="card-grid">
    <game-line v-for="game in gameList" :key="game.getSlug()" :game-detail="game" />
  </div>
</template>

<script setup lang="ts">
import ServerService from "src/service/ServerService";
import {onMounted, ref} from "vue";
import Game from "src/entity/Game";
import GameLine from "components/Game/list/GameLine.vue";

const server = new ServerService();
const gameList = ref<Game[]>([]);

onMounted(async () => {
  gameList.value = await server.getGameList();
});
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>
