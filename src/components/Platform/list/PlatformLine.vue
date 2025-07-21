<template>
  <div class="card card-fixed" v-if="platform">
    <div class="image-container">
      <img
        :src="platform.getPlatformLogoUrl()"
        class="card-img-top"
        alt="Image du logo de la platform"
      />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ platform.getName() }}</h3>
    </div>
    <div class="card-footer">
      <div class="card text-center">
        <router-link :to="`/platform/${platform.getSlug()}`">
          View all games for this {{ platform.getName() }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Platform from "src/entity/Platform";
import {onMounted, ref} from "vue";

const props = defineProps({
  platformDetail: Platform,
});

const platform = ref<Platform | null>(null);

onMounted(() => {
  platform.value = <Platform>props.platformDetail;
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
