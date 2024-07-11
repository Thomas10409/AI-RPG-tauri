import { createApp } from 'vue';
import './style.css';
import game from './game.vue';
import menu from './menu.vue';

const Menu = createApp(menu);
const App = createApp(game);
let Data = {'Player':{}};

Menu.mount('#app');

function start(player:object){
    Data['Player'] = player
    Menu.unmount();
    App.mount('#app');
}

const _ = Data;

export{
    start,
    _ as Data
}
