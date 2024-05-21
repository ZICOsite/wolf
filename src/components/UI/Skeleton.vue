<script setup>

const props = defineProps({
    loader: Boolean,
    count: {
        type: Number,
        default: 1
    }
})

</script>
<template>
    <slot name="loader" v-if="loader">
        <div class="skeleton" v-for="item in count" :key="item"></div>
    </slot>
    <slot name="default" v-else></slot>
</template>

<style lang="scss" scoped>
    .skeleton {
        height: 300px;
        background: linear-gradient(90deg, rgba(26, 43, 50, 0.15) 25%, #fff 37%, rgba(26, 43, 50, 0.15) 63%);
        background-size: 400% 100%;
        animation: skeleton-loading 1.4s ease infinite;
        border-radius: var(--radius-8);
    }
    
    @keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}
</style>
