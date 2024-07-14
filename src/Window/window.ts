import * as tauri from '@tauri-apps/api'
import { windowSizes } from './configs'

const Window = tauri.window.getCurrent()

function setWindowSize(select:number){
    Window.setSize(new tauri.window.PhysicalSize(windowSizes[select][1],windowSizes[select][2]))
}