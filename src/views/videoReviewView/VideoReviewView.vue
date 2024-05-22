<script setup>
import Typography from "@/components/UI/Typography.vue";
import { IconPlay } from "@/components/icons/icons";

const isPlay = ref(false);
const videoResult = ref(null);

const playback = () => {
  isPlay.value = true;
  videoResult.value.play();
};
</script>

<template>
  <section class="video-review">
    <div class="container">
      <Typography tagName="h2" class="video-review__title title">Видеоотзыв</Typography>
      <div class="video-review__video" :class="{'active': isPlay}">
        <video
          src="@/assets/video/anons.mp4"
          poster="@i/logo.svg"
          ref="videoResult"
          :controls="isPlay"
        ></video>
        <IconPlay
          class="about-result__content-icon"
          @click="playback"
          :class="{ active: isPlay }"
        />
      </div>
    </div>
  </section>
</template>
