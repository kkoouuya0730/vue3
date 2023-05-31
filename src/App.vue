<script setup lang="ts">
import { ref } from "vue"
import TodoItem from "./components/TodoItem.vue";
import type {Todo} from "./interfaces"
import {v4 as uuidv4} from 'uuid'
import {RouterView} from "vue-router"

const todoTitle = ref('')

const todoListInit: Todo[] = []
const todoList = ref(todoListInit)

const onSaveButtonClick = (): void => {
  if (todoTitle.value === '') return

  const todo = {
    id: uuidv4(),
    title: todoTitle.value,
    done: false
  }
  todoList.value.push(todo)

  todoTitle.value = ''
}

const getTodo = (id: string): number => {
  const passIndex = todoList.value.findIndex(function(element){
    return element.id == id;
  });
  return passIndex
}

const toggleDone = (id: string): void => {
  const todoIndex = getTodo(id)
  const todo = todoList.value[todoIndex]
  todo.done = !todo.done
}

const deleteTodo = (id: string): void => {
  const todoIndex = getTodo(id)
  todoList.value.splice(todoIndex, 1)
}

</script>

<template>
  <h1>Vue3基礎</h1>
  <section>
    <form action="#" v-on:submit.prevent="onSaveButtonClick">
      <input type="text" v-model="todoTitle" required/>
      <button>保存</button>
    </form>
    <TodoItem
      v-for="todo in todoList"
      v-bind:key="todo.id"
      v-bind:id="todo.id"
      v-bind:title="todo.title"
      v-bind:done="todo.done"
      v-on:toggle-done="toggleDone"
      v-on:delete-todo="deleteTodo"
    />
  </section>
  <main>
    <RouterView/>
  </main>
</template>