import {globalFlexioImport} from '@flexio-oss/global-import-registry'

/**
 * @interface
 */
export class HistoryClient {
  /**
   *
   * @param {HistoryState} historyState
   * @return {this}
   */
  pushState(historyState) {
    throw new Error('should be override')
  }

  /**
   *
   * @param {HistoryState} historyState
   * @return {this}
   */
  replaceState(historyState) {
    throw new Error('should be override')
  }

  /**
   *
   * @param {HistoryClient~onPopStateClb} clb
   * @return {string}
   */
  onPopState(clb) {
    throw new Error('should be override')
  }

  /**
   * @callback HistoryClient~onPopStateClb
   * @param {HistoryState} historyState
   */

  /**
   * return {HistoryState}
   */
  state() {
    throw new Error('should be override')
  }

  /**
   * @return {Number}
   */
  length() {
    throw new Error('should be override')
  }

  /**
   *
   * @return {HistoryStateBuilder}
   */
  historyStateBuilder() {
    return new globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder()
  }

  /**
   * @param {HistoryState} instance
   * @returns {HistoryStateBuilder}
   */
  historyStateFrom(instance) {
    return globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder.from(instance)
  }

  /**
   * @param {string} json
   * @returns {HistoryStateBuilder}
   */
  historyStateFromJSON(json) {
    return globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder.fromJSON(json)
  }

  /**
   * @param {Object} object
   * @returns {HistoryStateBuilder}
   */
  historyStateFromObject(object) {
    return globalFlexioImport.io.flexio.js_history_client.types.HistoryStateBuilder.fromObject(object)
  }
}
