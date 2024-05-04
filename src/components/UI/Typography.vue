<script setup>
    const props = defineProps({
        tagName: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <component :is="tagName"><slot>Test</slot></component>
</template>
