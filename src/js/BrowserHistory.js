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
        .location(
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
      historyState.location().value()
    )

    return this
  }

  /**
   * @return {HistoryState} historyState
   */
  state() {

    return new globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder()
      .location(
        new globalFlexioImport.io.flexio.extended_flex_types.types
          .FlexUrlBuilder()
          .value(history.state.location)
          .build()
      )
      .state(history.state.state)
      .build()

  }
}
