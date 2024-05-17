<script setup>
import Typography from "@/components/UI/Typography.vue";
import Card from "@/components/UI/Card.vue";
</script>

<template>
    <section class="communication">
        <div class="container">
            <Typography tagName="h2" class="communication__title title">Для обращения</Typography>
            <div class="communication__cards">
                <Card v-for="item in 4" :key="item" class="communication__card">
                    <Typography tagName="h2" class="communication__card-title">Номер телефона</Typography>
                    <a href="tel:++998999999999" class="communication__card-call">+998 99 999 99 99</a>
                </Card>
            </div>
        </div>
    </section>
</template>
