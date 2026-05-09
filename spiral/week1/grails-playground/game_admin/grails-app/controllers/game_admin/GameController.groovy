package game_admin

import game_domain.Game
import grails.gorm.transactions.Transactional

@Transactional
class GameController {

    GameService gameService

    def index() {
        [games: Game.list()]
    }

    def save() {
        def game = gameService.saveGame(params)

        if (!game.validate()) {
            render(view: "index", model: [
                    games: Game.list(),
                    game: game
            ])
            return
        }

        game.save(flush: true)
        flash.message = "Game saved successfully."
        redirect(action: "index")
    }

    def deleteGame(Long id) {
        gameService.deleteGame(id)
        flash.message = "Game deleted successfully."
        redirect(action: "index")
    }
}