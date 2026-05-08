package game_domain

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class GameSpec extends Specification implements DomainUnitTest<Game> {

     void "test domain constraints"() {
        when:
        Game domain = new Game()
        //TODO: Set domain props here

        then:
        domain.validate()
     }
}
