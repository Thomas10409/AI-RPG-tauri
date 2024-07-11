const langList = ['zh-tw']
const langs = {
    'zh-tw':{
        title:{
            status:"狀態資料",
            chatHistory:"聊天紀錄"
        },
        btn:{
            send:"傳送"
        },
        prompt:{
            default:"繼續"
        },
    }
}
function get(currentLang:String){
    return langs[currentLang as keyof typeof langs]
}

export {
    langList,
    get
}