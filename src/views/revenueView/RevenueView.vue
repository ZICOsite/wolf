<script setup>
import Typography from '@/components/UI/Typography.vue';
const revenueItems = [
    {
        title:`За 2020 год`,
        revenue:'46 000 000 руб'
    },
    {
        title:`За 2021 год`,
        revenue:'63 000 000 руб'
    },
    {
        title:`Текущий прирост`,
        revenue:'36,96%'
    },
]

</script>
<template>
    <section class="revenue">
        <div class="container">
            <Typography class="revenue__title title" tagName="h2">Прирост выручки</Typography>
            <div class="revenue__content">
                <div class="revenue__item" v-for="(item, index) in revenueItems" :key="index">
                        <h3 class="revenue__item-title">{{item.title}}</h3>
                        <p class="revenue__item-txt">{{item.revenue}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

