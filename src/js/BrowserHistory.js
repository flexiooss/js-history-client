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
   */
  onPopState(clb) {
    assertType(
      isFunction(clb),
      'BrowserHistory:onPopState: `clb` argument should be callable'
    )

    window.addEventListener('popstate', (event) => {
      clb(new globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder()
        .url(
          new globalFlexioImport.io.flexio.extended_flex_types.types
            .FlexUrlBuilder()
            .value(event.state.location)
            .build()
        )
        .state(event.state.state)
        .build())
    })
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
      historyState.state(),
      '',
      historyState.url().value()
    )

    return this
  }

  /**
   * @return {HistoryState} historyState
   */
  state() {

    return new globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder()
      .url(
        new globalFlexioImport.io.flexio.extended_flex_types.types
          .FlexUrlBuilder()
          .value(history.state.location)
          .build()
      )
      .state(history.state.state)
      .build()

  }
}
