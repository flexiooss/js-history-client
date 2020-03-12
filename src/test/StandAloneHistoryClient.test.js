/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {StandAloneHistoryClient} from '../js/StandAloneHistoryClient'
import '@flexio-oss/extended-flex-types'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import '@flexio-oss/extended-flex-types'
import '../../generated/io/package'

const assert = require('assert')

export class StandAloneHistoryClientTest extends TestCase {
  setUp() {
    /**
     *
     * @type {StandAloneHistoryClient}
     */
    this.historyClient = new StandAloneHistoryClient()
  }

  historyState1() {
    return this.historyClient
      .historyStateBuilder()
      .url(
        new globalFlexioImport.io.flexio.extended_flex_types
          .FlexUrlBuilder()
          .value('https://toto.fr')
          .build()
      )
      .build()
  }

  historyState2() {
    return this.historyClient
      .historyStateBuilder()
      .url(
        new globalFlexioImport.io.flexio.extended_flex_types
          .FlexUrlBuilder()
          .value('https://bibi.fr')
          .build()
      )
      .build()
  }

  historyState3() {
    return this.historyClient
      .historyStateBuilder()
      .url(
        new globalFlexioImport.io.flexio.extended_flex_types
          .FlexUrlBuilder()
          .value('https://ahaha.fr')
          .build()
      )
      .build()
  }

  testPush() {

    const historyState = this.historyState1()

    this.historyClient.pushState(
      historyState
    )

    assert.deepEqual(
      this.historyClient.state(), historyState
    )

    assert(
      this.historyClient.length() === 2,
      'length should be 2'
    )
  }

  testReplace() {
    const historyState = this.historyState2()

    this.historyClient.pushState(
      this.historyState1()
    )

    this.historyClient.replaceState(
      historyState
    )

    assert.deepEqual(
      this.historyClient.state(), historyState
    )

    assert(
      this.historyClient.length() === 2,
      'lenghth should be 2'
    )
  }

  testNavigation() {

    this.historyClient
      .pushState(
        this.historyState1()
      )
      .pushState(
        this.historyState2()
      )
      .pushState(
        this.historyState3()
      )

    assert.deepEqual(
      this.historyClient.state(),
      this.historyState3(),
      'history should to be on state3'
    )
    assert.deepEqual(
      this.historyClient.forward(),
      this.historyState3(),
      'history shouldn\'t changed'
    )
    assert.deepEqual(
      this.historyClient.back(),
      this.historyState2(),
      'history should to be on state2'
    )
    assert.deepEqual(
      this.historyClient.forward(),
      this.historyState3(),
      'history should to be on state3'
    )
    assert.deepEqual(
      this.historyClient.go(1),
      this.historyState3(),
      'history should to be on state3'
    )
    assert.deepEqual(
      this.historyClient.go(-4),
      this.historyState3(),
      'history should to be on state3'
    )
    assert.deepEqual(
      this.historyClient.go(-2),
      this.historyState1(),
      'history should to be on state1'
    )
  }

}

runTest(StandAloneHistoryClientTest)
