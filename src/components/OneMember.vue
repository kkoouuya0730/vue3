<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
const props = defineProps<Props>();

interface Emits {
  (event: "update:points", points: number): void;
}

const emit = defineEmits<Emits>();

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  const inputPoints = Number(element.value);
  emit("update:points", inputPoints);
}

// const localPoints = ref(props.points);
const localNote = computed((): string => {
  let localNote = props.note;
  if(localNote == undefined) {
    localNote = "--";
  }
  return localNote;
})


</script>

<template>
  <section class="box">
    <h4>{{ name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ email }}</dd>
      <dt>保有ポイント</dt>
      <dd>
        <input type="number" :value="points" @input="onInput"/>
      </dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
