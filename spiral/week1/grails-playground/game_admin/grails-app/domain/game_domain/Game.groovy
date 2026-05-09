package game_domain

class Game {

    String name
    String genre
    String status
    Date releaseDate

    static constraints = {
        name blank: false, maxSize: 100
        genre blank: false, maxSize: 50
        status blank: false
    }
}