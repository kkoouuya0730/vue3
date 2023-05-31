<script setup lang="ts">
import { RouterLink } from "vue-router"


</script>
<template>
    <h1>Todo管理</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>
                <RouterLink v-bind:to="{name: 'AppTop'}">
                    TOP
                </RouterLink>
            </li>
            <li>
                <RouterLink v-bind:to="{name: 'TodoList'}">
                    Todoリスト
                </RouterLink>
            </li>
            <li>Todo詳細情報</li>
        </ul>
    </nav>
    <section>
        <h2>Todo詳細情報</h2>
    </section>
</template>