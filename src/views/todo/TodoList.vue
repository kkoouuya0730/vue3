<script setup lang="ts">
import { RouterLink } from "vue-router"


</script>
<template>
    <h1>Todoリスト</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>
                <RouterLink v-bind:to="{name: 'AppTop'}">
                    TOP
                </RouterLink>
            </li>
            <li>
                Todoリスト
            </li>
        </ul>
    </nav>
    <section>
        <h2>Todoリスト</h2>
        <section>
            <ul>
                <li>
                    <RouterLink v-bind:to="{name: 'TodoDetail', params: {id: '001'}}">
                        IDが001のTodo
                    </RouterLink>
                </li>
            </ul>
        </section>
    </section>
</template>