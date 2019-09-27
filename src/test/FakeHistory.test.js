/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {FakeHistoryClient} from '../js/FakeHistoryClient'
import '@flexio-oss/extended-flex-types'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import '@flexio-oss/extended-flex-types'
import '../../generated/io/package'

const assert = require('assert')

export class FakeHistory extends TestCase {
  setUp() {
    /**
     *
     * @type {FakeHistoryClient}
     */
    this.historyClient = new FakeHistoryClient()
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

}

runTest(FakeHistory)
