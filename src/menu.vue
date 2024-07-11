<script setup lang="ts">
//tauri操作介面功能匯入 tauri GUI import


//運作相關套件匯入 Runtime import
import { ref } from 'vue'
</script>

<template>
    <div id="menu">
        <div class="title" id="menu-title">
            <p id="title-main">AI RPG</p>
            <p id="title-description">一款用AI驅動的文字RPG</p>
        </div>
    </div>
</template>

<style>
div #menu{
    text-align: left;
    margin-top: 20svh;
    margin-right: 70svw;
    margin-bottom: 50svh;
}
div #menu #title-main{
    font-size: 12svh;  
    padding: None;
    margin-bottom: 0.2svh;
}
</style>