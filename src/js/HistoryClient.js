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
    throw new Error('should be override')
  }

  /**
   * @param {HistoryState} instance
   * @returns {HistoryStateBuilder}
   */
  historyStateFrom(instance) {
    throw new Error('should be override')
  }

  /**
   * @param {string} json
   * @returns {HistoryStateBuilder}
   */
  historyStateFromJSON(json) {
    throw new Error('should be override')
  }

  /**
   * @param {Object} object
   * @returns {HistoryStateBuilder}
   */
  historyStateFromObject(object) {
    throw new Error('should be override')
  }
}
