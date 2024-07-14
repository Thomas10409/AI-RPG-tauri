<script setup lang="ts">
//tauri匯入 import for tauri(GUI)

//遊戲匯入 import for game
import { ref } from 'vue'
import * as API from './components/Main.ts'
import { langList , get} from './assets/lang.ts'
import { VueMarkdownRender } from 'vue-markdown-viewer';

let currentLang = langList[0]
let playerName = new String()
const lang = get(currentLang).game
const inp_t = ref()
var historys = ref(new Array())
playerName = "Thomas104019"
function sendMsg(){
    console.log(inp_t.value)
    historys.value.push({"role":"user","content":inp_t.value})
    let res = API.run(historys.value)
    res.then((data)=>{
        console.log(data.choices[0].message.content)
        historys.value.push({"role":data.choices[0].message.role,"content":data.choices[0].message.content})
    })
}
</script>

<template>
    <div id="game">
        <div id="sidebar">
            <h3 type="title">{{lang.title.status}}</h3> <!--狀態資料 Status-->
        </div>
        <div style="display: block;">
            <div style="height: 5svh;"></div>
            <div style="background-color:rgba(255,255,255,0.3);height: 60svh;width: 0.1svw;border-radius: 0.05svw;margin: 5svh none;"></div>
            <div style="height: 5svh"></div>
        </div>
        <div id="chat">
            <div id="msg">
                <h3 type="title">{{lang.title.chatHistory}}</h3> <!--聊天紀錄 chat history-->
                <div id="content">
                    <!--循環輸出歷史記錄 loop for print chat history-->
                    <div type="content_text" v-for="(history,index) in historys"> 
                        <div :class="history.role">
                            <div :class="history.role+'-context'" style="border-bottom: 1px solid lightgray;"> <!--用戶名 username-->
                                <p style="font-size: 1.2em;text-align: right" v-if="history['role'] == 'user'">{{playerName}}</p>
                                <p style="font-size: 1.2em;" v-else-if="history['role'] == 'assistant'">AI</p> 
                            </div>
                            <VueMarkdownRender :class="history.role+'-context'" style="padding-right:2svw" :content="history.content" v-if="history['role'] == 'user'"></VueMarkdownRender> <!--訊息內容 context (Markdown)-->
                            <VueMarkdownRender :class="history.role+'-context'" style="padding-left:2svw" :content="history.content" v-else></VueMarkdownRender> <!--訊息內容 context (Markdown)-->
                            <p style="color:gray;font-size: 0.6em;text-align: right;margin:1%">{{index+1}}</p> <!--對話計數器 chat counter-->
                        </div>
                    </div>
                </div>
            </div>

            <div id="inp">
                <textarea id="msg_inp" cols="50" rows="3" v-model="inp_t"></textarea> <!--文字輸入框 text input-->
                <input id="send_btn" type="button" .value="lang.btn.send" @click="sendMsg()"></input> <!--傳送按鈕 send btn-->
            </div>
        </div>
    </div>
</template>

<style>
/*@media only screen (min-width: 960px){
}*/
html{
    font-size: 2svh;
    background-repeat: no-repeat;
    background-position: top center;
    background-attachment: fixed;
    background-size: cover;
    background-image: url("/images/background/game_background.jpg");
}
.title{
    padding: 0.4svh;
    max-height: 0.6svh;
    min-height: 0.2svh;
}
div{
    color: white;
}

div #game{
    height: 70svh;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(4px);
    border-radius: 10px;
}

div #sidebar{
    width: 30svw;
}

div #chat{
    display: block;
    width: 60svw;
}

div #msg{
    display: block;
}

div #content{
    overflow-y: auto;
    font-size: 1.5svh;
    text-align: left;
    padding: 1svh;
    margin-right: 1svh;
    max-height: 50svh;
    min-height: 50svh;
}

div #inp{
    margin: 1svh 1svh;
    max-height: 5svh;
    min-height: 5svh;
    display: flex;
}
div #msg_inp{
    color: white;
    resize: none;
    width: 90%;
    margin-left: 1%;
    background-color: rgba(0,0,0,0.8);
    border: solid 1px white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

div .user{
    color: black;
    padding: 1svh;
    margin: 1%;
    margin-left: 25svw;
    background-color: white;
    border-radius: 1svh;
}

div .user-context{
    color: black;
    text-align: right;
    padding-right: 1svw
}

div .assistant{
    color: black;
    padding: 1svh;
    margin: 1%;
    margin-right: 25svw;
    background-color: white;
    border-radius: 1svh;
}

div .assistant-context{
    color: black;
    padding-left: 1svw;
}

div #send_btn{
    background-color: white;
    margin-right: 1%;
    border: solid 1px white;
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
div #send_btn:hover{
    background-color: rgba(200,200,200);
    border: solid 1px rgba(200,200,200);
    border-left: none;
}
div #send_btn:active{
    background-color: rgba(100,100,100);
    border: solid 1px rgba(100,100,100);
    border-left: none;
}
pre{
    color: white;
    border-radius: 1em;
    padding: 2em;
    background-color: rgb(50,50,50);
}

.button{
    border: solid 1px white;
}

::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgba(0,0,0,0.5); 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.5); 
  border-radius: 10px;
  border: solid 1px rgba(255,255,255,0.3);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.7);
  border: solid 1px rgba(255,255,255,0.36);
}

::-webkit-scrollbar-thumb:active {
  background: rgba(0,0,0,1); 
  border: solid 1px rgba(255,255,255,0.5);
}
</style>