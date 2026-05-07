package game_admin

import grails.testing.web.controllers.ControllerUnitTest
import spock.lang.Specification

class GameControllerSpec extends Specification implements ControllerUnitTest<GameController> {

     void "test index action"() {
        when:
        controller.index()

        then:
        status == 200

     }
}
