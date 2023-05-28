<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();

// interface Emits {
//     (event: "toggleDone"): void;
// }

// const emit = defineEmits<Emits>();

// const onToggleButtonClick = (): void => {
//     emit("toggleDone")
// }

</script>

<template>
  <section class="box">
    <p>タイトル {{ title }}</p>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
