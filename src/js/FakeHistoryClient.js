import {HistoryClient} from './HistoryClient'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {EventHandlerBase, EventListenerConfigBuilder} from '@flexio-oss/event-handler'
import {HistoryStateArray} from './HistoryStateArray'

/**
 * @implements {HistoryClient}
 */
export class FakeHistoryClient extends HistoryClient {
  constructor() {
    super()
    /**
     *
     * @type {HistoryStateArray}
     * @private
     */
    this.__state = new HistoryStateArray(
      new globalFlexioImport.io.flexio.js_history_client.types
        .HistoryStateBuilder()
        .build()
    )

    /**
     *
     * @type {number}
     * @private
     */
    this.__current = 0
    /**
     *
     * @type {EventHandlerBase}
     * @private
     */
    this.__eventHandler = new EventHandlerBase()
  }

  /**
   *
   * @param {HistoryState} historyState
   * @return {this}
   */
  pushState(historyState) {
    this.__state.push(historyState)
    this.__current++
    return this
  }

  /**
   *
   * @param {HistoryState} historyState
   * @return {this}
   */
  replaceState(historyState) {
    this.__state[this.__current] = historyState
    return this
  }

  /**
   *
   * @param {HistoryClient~onPopStateClb} clb
   * @return {string}
   */
  onPopState(clb) {
    return this.__eventHandler.addEventListener(
      EventListenerConfigBuilder
        .listen('popstate')
        .callback(clb)
        .build()
    )
  }

  /**
   * @callback HistoryClient~onPopStateClb
   * @param {HistoryState} historyState
   */

  /**
   * return {HistoryState}
   */
  state() {
    return this.__state.get(this.__current)
  }

  /**
   * @return {Number}
   */
  length() {
    return this.__state.length
  }

}
