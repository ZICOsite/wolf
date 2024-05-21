<script setup>
import Typography from '@/components/UI/Typography.vue';
import { useRoute } from "vue-router";
import RightBoxView from '@/views/rightBoxView/RightBoxView.vue'
import RevenueView from '@/views/revenueView/RevenueView.vue'
const route = useRoute()

</script>

<template>
    <main>
        <!-- <h1>This is {{ route.params.id }}</h1> -->
        <RightBoxView/>
        <RevenueView/>
    </main>
</template>