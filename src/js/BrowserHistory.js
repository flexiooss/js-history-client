import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {assertType, isFunction} from '@flexio-oss/assert'
import {HistoryClient} from './HistoryClient'

/**
 * @implements {HistoryClient}
 */
export class BrowserHistory extends HistoryClient {

  /**
   *
   * @param {HistoryClient~onPopStateClb} clb
   * @return {string}
   */
  onPopState(clb) {
    assertType(
      isFunction(clb),
      'BrowserHistory:onPopState: `clb` argument should be callable'
    )

    window.addEventListener('popstate', (event) => {
      clb(new globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder()
        .url(
          new globalFlexioImport.io.flexio.extended_flex_types
            .FlexUrlBuilder()
            .value(event.state.location)
            .build()
        )
        .state(event.state.state)
        .build())
    })
    return 'noToken'
  }

  /**
   *
   * @param {HistoryState} historyState
   * @return {this}
   */
  pushState(historyState) {
    assertType(historyState instanceof globalFlexioImport.io.flexio.js_history_client.types.HistoryState,
      'BrowserHistory:pushState: `historyState` argument should be HistoryState'
    )

    history.pushState(
      historyState.state(),
      '',
      historyState.url().value()
    )

    return this
  }

  /**
   *
   * @param {HistoryState} historyState
   * @return {this}
   */
  replaceState(historyState) {
    assertType(historyState instanceof globalFlexioImport.io.flexio.js_history_client.types.HistoryState,
      'BrowserHistory:replaceState: `historyState` argument should be HistoryState'
    )

    history.replaceState(
      historyState.toObject(),
      '',
      historyState.url().value()
    )

    return this
  }

  /**
   * @return {HistoryState} historyState
   */
  state() {
    return this.historyStateFromObject(history.state)
      .build()
  }

  /**
   * @return {HistoryState}
   */
  back() {
    history.back()
    return this.state()
  }

  /**
   * @return {HistoryState}
   */
  forward() {
    history.forward()
    return this.state()
  }

  /**
   * @param {number} delta
   * @return {HistoryState}
   */
  go(delta) {
    history.go(delta)
    return this.state()
  }

  /**
   *
   * @return {number}
   */
  length() {
    return history.length
  }
}
