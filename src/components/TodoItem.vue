<script setup lang="ts">
import {computed} from 'vue'

const isDone = computed(() => {
    return props.done ? "完了" : "未完了"
})

interface Props {
    id: string;
    title: string;
    done: boolean
}

const props = defineProps<Props>();

interface Emits {
    (event: "toggleDone", id: string): void;
    (event: "deleteTodo", id: string): void;
}

const emit = defineEmits<Emits>();

const onToggleButtonClick = (): void => {
    emit("toggleDone", props.id)
}

const onDeleteButtonClick = (): void => {
    emit("deleteTodo", props.id)
}

</script>

<template>
  <section class="box" >
    <p>タイトル: {{ props.title }}</p>
    <p @click="onToggleButtonClick">ステータス: {{ isDone }}</p>
    <button @click="onDeleteButtonClick">削除</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
