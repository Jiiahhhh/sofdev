package game_admin

import game_domain.Game
import grails.gorm.transactions.Transactional
import groovy.transform.CompileStatic

@Transactional
class GameService {

    def saveGame(params) {
        Game game
        if (params.id) {
            game = Game.get(params.id)
        } else {
            game = new Game(
                    releaseDate: new Date(),
                    status: "Draft"
            )
        }
        game.name = params.name
        game.genre = params.genre

        return game
    }

    def deleteGame(Long id) {
        def game = Game.get(id)

        if (game) {
            game.delete(flush: true)
        }
    }
}