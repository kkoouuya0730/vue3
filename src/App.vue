<script setup lang="ts">
import { computed, ref } from "vue"
import OneMember from "./components/OneMember.vue";

const memberListInit = new Map<number, Member>();
memberListInit.set(33456, {id: 334546, name: "test", email: "test", points: 34, note: "初回特選あり"})
memberListInit.set(33457, {id: 334547, name: "test", email: "test", points: 34, note: "初回特選あり"})
const memberList = ref(memberListInit);

const totalPoints = computed(
  (): number => {
    let total = 0;
    for(const member of memberList.value.values()) {
      total += member.points;
    }
    return total;
  }
)

interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
</script>

<template>
  <h1>Props基礎</h1>
  <section>
    <h2>ループでコンポーネントを作成: {{ totalPoints }}</h2>
    <OneMember 
      v-for="[id, member] in memberList"
      :key="id"
      :id="id"
      :name="member.name"
      :email="member.email"
      :points="member.points"
      :member="member.note"
    />
  </section>
</template>