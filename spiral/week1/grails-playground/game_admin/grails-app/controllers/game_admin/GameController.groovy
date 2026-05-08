package game_admin

import game_domain.Game


class GameController {

    def index() {
        [games: Game.list()]
    }
}