package game_admin

import game_domain.Game

class BootStrap {

    def init = { servletContext ->
        new Game(
                name: "Hades",
                genre: "Roguelike",
                status: "Published",
                releaseDate: new Date()
        ).save()

        new Game(
                name: "Celeste",
                genre: "Platformer",
                status: "Draft",
                releaseDate: new Date()
        ).save()
    }
    def destroy = {
    }
}