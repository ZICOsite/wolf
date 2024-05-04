<script setup>

const props = defineProps({
    bg: String,
    color: String
})

</script>

<template>
  <button class="btn"><slot /></button>
</template>

<style lang="scss" scoped>

.btn {
    padding: 17px 24px;
    background: v-bind(bg);
    color: v-bind(color);
    font-size: 16px;
    font-weight: 600;
    border-radius: var(--radius-8);
    cursor: pointer;
}

</style>