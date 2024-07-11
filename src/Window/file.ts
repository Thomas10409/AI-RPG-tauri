import * as tauri from "@tauri-apps/api"
const entries = await tauri.fs.readDir('',{ dir:tauri.fs.BaseDirectory.Resource, recursive: true})

function lsdir() {
    for(const entry of entries){
        console.log(entry.path)
    }
}

export {
    lsdir
}