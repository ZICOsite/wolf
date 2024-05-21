<script setup>
import { useRoute } from "vue-router";

const route = useRoute()

</script>

<template>
    <main>
        <h1>This is {{ route.params.id }}</h1>
    </main>
</template>