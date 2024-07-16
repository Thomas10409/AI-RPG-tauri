<script setup lang="ts">
//tauri操作介面功能匯入 tauri GUI import


//運作相關套件匯入 Runtime import
import { ref } from 'vue'
</script>

<template>
    <div id="menu">
        <div id="menu-title">
            <p id="title-main">AI RPG</p>
            <p id="title-description">一款用AI驅動的文字RPG</p>
        </div>
        <div style="width:0px;height:40svh;border-right: 0.5svw solid rgba(255,255,255,0.8);border-radius:0.25svw;margin: 5svh 2.25svw;"></div>
        <div id="menu-choice">
            <div class="menu-choice">
                <p>新遊戲</p>
            </div>
            <div class="menu-choice">
                <p>載入存檔</p>
            </div>
            <div class="menu-choice">
                <p>設定</p>
            </div>
            <div class="menu-choice">
                <p>離開遊戲</p>
            </div>
        </div>
        <div style="width:0px;height:40svh;border-right: 0.5svw solid rgba(255,255,255,0.8);border-radius:0.25svw;margin: 5svh 2.25svw;"></div>
    </div>
</template>

<style>
div#menu{
    user-select:none;
    width: 100%;
    display: flex;
    height: 50svh;
    text-align: left;
    margin: 25svh 0px;
}
div#menu div#menu-title{
    width: 25svw;
}
div#menu #title-main{
    font-size: 11.8svh;  
    padding: None;
    margin-bottom: 0.2svh;
}
div#menu #title-description{
    font-size: 2.8svh;
    padding: None;
    margin-bottom: 0.2svh;
}

div#menu-choice{
    text-align: center;
    display: block;
    height: 50svh;
    width: 45svw;
}

div#menu-choice div.menu-choice{
    z-index: 1;
    width:80%;
    margin: 0 10% 1%;
    height: fit-content;
    padding: 0.5svh 0;
    font-weight: 1000;
    font-size: 1.55rem;
    border-radius: 0.5svh;
    transition: 800ms;
}

div#menu-choice div.menu-choice:hover{
    background-color: rgba(0,0,0,0.1);
    backdrop-filter: blur(2.5px);
}

</style>