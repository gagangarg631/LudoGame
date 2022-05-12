import util from "./Util.js";

const ludo = {
    players: ['player_blue'],
    current_player: 0,

    initialize(){
        this.players.forEach(player => {
            let color = player.slice(7);

            let cells = Array.from(document.querySelector(`#${player} .player_goti_cover`).children);
            cells.forEach((cell,index) => {
                cell.appendChild(util.mkgoti(index+1, color));
            });
        })
    },

}



ludo.initialize();