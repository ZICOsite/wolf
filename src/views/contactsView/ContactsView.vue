<script setup>
import Typography from "@/components/UI/Typography.vue";
import Card from "@/components/UI/Card.vue";
import useFetch from "@/services/api";
const { data, isFetching, fetchData } = useFetch();
fetchData("common/contact-us/list/");
</script>

<template>
    <section class="contacts">
        <div class="container">
            <Typography tagName="h2" class="contacts__title title">Контакты</Typography>
            <div class="contacts__cards">
                <Card v-for="item in data" :key="item" class="contacts__card">
                    <Typography tagName="h2" class="contacts__card-title">{{item.employee_name}}</Typography>
                    <Typography tagName="p" class="contacts__card-txt">{{ item.description }}</Typography>
                    <a :href="`tel:${item.phone_number}`" class="contacts__card-call">{{ item.phone_number }}</a>
                </Card>
            </div>
        </div>
    </section>
</template>
