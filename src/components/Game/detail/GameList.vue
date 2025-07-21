<template>
  <div class="card-grid">
    <game-line v-for="game in gameList" :key="game.getCode()" :gameDetail="game"></game-line>
  </div>
</template>

<script setup lang="ts">
import GameLine from "components/Game/detail/GameLine.vue";
import {onMounted, ref} from 'vue';
import type Game from 'src/entity/Game';
import ServerService from "src/service/ServerService";

const props = defineProps({
  platformSlug: String,
});
const server = new ServerService();

const gameList = ref<Game[]>([]);

onMounted(async () => {
  gameList.value = await server.getGameListByPlatform(<string>props.platformSlug);
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
