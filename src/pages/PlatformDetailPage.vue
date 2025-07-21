<template>
  <div class="card-grid">
    <game-list :platform-slug="slug"></game-list>
  </div>
</template>

<script setup lang="ts">
import GameList from "components/Game/detail/GameList.vue";
import {useRoute} from 'vue-router';

const route = useRoute();
const slug = route.params.slug as string;

</script>

<style scoped>

</style>
