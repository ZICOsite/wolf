<script setup>
import Typography from "@/components/UI/Typography.vue";
import { IconPlay } from "@/components/icons/icons";

const isPlay = ref(false)
const videoResult = ref(null)

const playback = () => {
    isPlay.value = true
    videoResult.value.play()
}

</script>

<template>
  <section class="about-result">
    <div class="container">
      <Typography tagName="h2" class="about-result__title title">Почему мы запустили Resulting</Typography>
      <div class="about-result__content">
        <div class="about-result__content-video" :class="{'active': isPlay}">
          <video src="@/assets/video/anons.mp4" poster="@i/logo.svg" ref="videoResult" :controls="isPlay"></video>
          <IconPlay class="about-result__content-icon" @click="playback" :class="{'active': isPlay}"/>
        </div>
        <div class="about-result__content-desc">
            <Typography tagName="h3" class="about-result__content-title">Почему мы запустили Resulting</Typography>
            <Typography tagName="p" class="about-result__content-txt">–Жестко контролируем вас и вашу команду во время проекта: ежедневные созвоны, проверки, ведение до результата</Typography>
        </div>
      </div>
    </div>
  </section>
</template>
