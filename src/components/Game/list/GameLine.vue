<template>
  <div class="card card-fixed" v-if="game">
    <div class="image-container">
      <img :src="game.getCoverUrl() === '' ? placeholder : game.getCoverUrl()" class="card-img-top"
           :alt="`Image présentant le jeu vidéo ${game.getName()}`">
    </div>
    <div class="card-body overflow-auto">
      <h5 class="card-title">{{ game.getName() }}</h5>
      <p class="card-text">{{ game.getSummary() }}</p>
      <p class="card-text">
        <small class="text-muted">{{ (game.getPrice() / 100).toFixed(2) }} €</small>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Game from "src/entity/Game";
import {onMounted, ref} from "vue";
import placeholder from 'assets/placeholder.jpg';

const props = defineProps({
  gameDetail: Game,
});

const game = ref<Game | null>(null);

onMounted(() => {
  game.value = <Game>props.gameDetail;
});
</script>

<style scoped>
.card-fixed {
  width: 100%;
  max-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
}

.image-container {
  width: 100%;
  height: 150px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img-top {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-fixed .card-body {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
}
</style>

