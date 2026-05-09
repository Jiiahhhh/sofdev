package game_admin

import grails.testing.services.ServiceUnitTest
import spock.lang.Specification

class GameServiceSpec extends Specification implements ServiceUnitTest<GameService> {

     void "test something"() {
        expect:
        service.doSomething()
     }
}
