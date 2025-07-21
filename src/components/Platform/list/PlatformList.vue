<template>
  <div class="card-grid">
    <platform-line v-for="platform of platformList" :key="platform.getSlug()"
                   :platform-detail="platform"></platform-line>
  </div>
</template>

<script setup lang="ts">
import ServerService from "src/service/ServerService";
import {onMounted, ref} from "vue";
import Platform from "src/entity/Platform";
import PlatformLine from "components/Platform/list/PlatformLine.vue";

const server = new ServerService();
const platformList = ref<Platform[]>([]);


onMounted(async () => {
  platformList.value = await server.getPlatformList();
});
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}
</style>
