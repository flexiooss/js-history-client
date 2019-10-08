import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isFunction, isNull } from '@flexio-oss/assert'
import { HistoryClient } from './HistoryClient'

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
      console.log(event)

      let url
      let state

      if (isNull(event.state)) {
        state = new globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder()
          .build()
      } else {

        state = globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder
          .fromObject(event.state)
          .build()
      }

      clb(state)
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
      historyState.toObject(),
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
    const state = isNull(history.state) ? {} : history.state
    return this.historyStateFromObject(state)
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
