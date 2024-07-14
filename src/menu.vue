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
        <div style="width:0px;height:50svh;border-right: 5px solid rgba(255,255,255,0.8);margin: 0px 4svw;"></div>
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
    </div>
</template>

<style>
div#menu{
    width: 100%;
    display: flex;
    height: 50svh;
    text-align: left;
    margin: 25svh none;
}
div#menu div#menu-title{
    width: 27svw;
    
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
    height: 40svh;
    width: 50svw;
    margin: 5svh none;
}

div#menu-choice div.menu-choice{
    z-index: 1;
    width:50%;
    height: 8svh;
    margin: 1svh 10%;
    margin-bottom: none;
    padding: 2.5svh none;
    font-weight: 1000;
    font-size: 3svh;
    /*background-color: rgba(0,0,0,0.4);*/
    border-radius: 0.5svh;
    transition: 500ms;
}

div#menu-choice div.menu-choice:hover{
    background-color: rgba(0,0,0,0.05);
    backdrop-filter: blur(10px);
}

</style>