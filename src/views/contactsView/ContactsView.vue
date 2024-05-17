<script setup>
import Typography from "@/components/UI/Typography.vue";
import Card from "@/components/UI/Card.vue";
</script>

<template>
    <section class="contacts">
        <div class="container">
            <Typography tagName="h2" class="contacts__title title">Контакты</Typography>
            <div class="contacts__cards">
                <Card v-for="item in 4" :key="item" class="contacts__card">
                    <Typography tagName="h2" class="contacts__card-title">Алина Кусакина</Typography>
                    <Typography tagName="p" class="contacts__card-txt">Какой-то текст с призывом на действие или просто текст</Typography>
                    <a href="tel:++998999999999" class="contacts__card-call">+7 (495) 136-95-96</a>
                </Card>
            </div>
        </div>
    </section>
</template>
