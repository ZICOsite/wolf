<script setup>
const props = defineProps({
  direction: String,
  size: {
    type: Number,
    default: 20,
  },
  color: {
    type: String,
    default: "#6A7B82",
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="{
      transform:
        direction == 'up'
          ? 'rotate(90deg)'
          : direction == 'down'
          ? 'rotate(-90deg)'
          : direction == 'right'
          ? 'rotate(180deg)'
          : direction == 'left'
          ? 'rotate(0)'
          : 'rotate(45deg)',
    }"
  >
    <mask
      id="mask0_71_1926"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect
        x="20"
        y="20"
        width="20"
        height="20"
        transform="rotate(-180 20 20)"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_71_1926)">
      <path
        d="M6.52092 9.1667H15.8334C16.0695 9.1667 16.2674 9.24656 16.4272 9.40628C16.5869 9.566 16.6667 9.76392 16.6667 10C16.6667 10.2361 16.5869 10.4341 16.4272 10.5938C16.2674 10.7535 16.0695 10.8334 15.8334 10.8334H6.52092L10.6042 14.9167C10.7709 15.0834 10.8508 15.2778 10.8438 15.5C10.8369 15.7223 10.7501 15.9167 10.5834 16.0834C10.4167 16.2361 10.2223 16.316 10.0001 16.3229C9.77786 16.3299 9.58342 16.25 9.41675 16.0834L3.91675 10.5834C3.83342 10.5 3.77439 10.4098 3.73967 10.3125C3.70494 10.2153 3.68758 10.1111 3.68758 10C3.68758 9.88892 3.70494 9.78475 3.73967 9.68753C3.77439 9.59031 3.83342 9.50003 3.91675 9.4167L9.41675 3.9167C9.56953 3.76392 9.7605 3.68753 9.98967 3.68753C10.2188 3.68753 10.4167 3.76392 10.5834 3.9167C10.7501 4.08336 10.8334 4.28128 10.8334 4.51045C10.8334 4.73961 10.7501 4.93753 10.5834 5.1042L6.52092 9.1667Z"
        :fill="color"
      />
    </g>
  </svg>
</template>
