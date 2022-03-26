<template>
  <a-scene embedded arjs>
    <a-marker preset="hiro">
      <a-entity
        position="0 0 0"
        scale="0.05 0.05 0.05"
        gltf-model="url(/scene.gltf)"
      ></a-entity>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
  <!-- <a-scene embedded style="width: 100%; height: 400px">
    <a-entity
      gltf-model="url(/scene.gltf)"
      position="15 2 0"
      look-controls
    ></a-entity>
  </a-scene> -->
</template>

<script lang="ts">
import aframe from 'aframe'

import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<style scoped>
.a-scene {
}
</style>
