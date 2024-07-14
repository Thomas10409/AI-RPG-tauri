import OpenAI from "openai";
import token from "../assets/token";
import prompts from "../assets/prompts";

const api = new OpenAI({
    dangerouslyAllowBrowser: true,
    baseURL: 'https://api.deepinfra.com/v1/openai',
    apiKey: token
})
const PromptModel = (history:Array<any>)=>{
    let buffer = new Array
    buffer.push({"role":"system","content":prompts.prompt})
    buffer.push({"role":"system","content":"演示模式開始 以下對話為開發人員所設計的對話方便你理解系統提示，可以參考以下對話並在實際對話時保持一定的彈性，不用完全一樣"})
    for(const data of prompts.settingUpPrompt){
        const user = data[0]
        const res = data[1]
        buffer.push({"role":"user","content":user})
        buffer.push({"role":"assistant","content":res})
    }
    buffer.push({"role":"system","content":"演示模式結束"})
    for(const data of JSON.parse(JSON.stringify(history))){
        buffer.push(data)
    }
    console.log(buffer)
    console.log(typeof(buffer))
    return buffer
}

async function run(history:Array<any>) {
    let prompt = PromptModel(history)
    const completion = await api.chat.completions.create({
        messages: prompt,
        model: "mistralai/Mixtral-8x22B-Instruct-v0.1"
    })
    return completion
}

async function vertify_run(inp:string){
    let prompt = new Array();
    prompt.push({"role":"system","content":prompts.vertify_prompt})
    prompt.push({"role":"user","content":inp})
    const completion = await api.chat.completions.create({ 
        messages: prompt,
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
        temperature: 0,
        max_tokens:1,
        top_p:0.9,
    })
    return completion
}

export { run , vertify_run }