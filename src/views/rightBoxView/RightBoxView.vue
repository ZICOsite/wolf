<script setup>
import Typography from "@/components/UI/Typography.vue";
import Button from "@/components/UI/Button.vue";
</script>
<template>
    <section class="rightbox">
        <div class="container">
            <div class="rightbox__descr">
                <Typography tagName="h2" class="title rightbox__title">
                    Райтбокс
                </Typography>
                <Typography tagName="p" class="rightbox__txt">
                    Изготовление упаковки из тонкого картона
                </Typography>
                <Button bg="#24353C" color="var(--white)" class="rightbox__btn">Сайт компании</Button>
            </div>
            <img src="@i/rightbox.jpg" alt="" class="rightbox__img">
        </div>
    </section>
</template>

