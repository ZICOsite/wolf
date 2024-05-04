<script setup>
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <slot/>
  </div>
</template>
