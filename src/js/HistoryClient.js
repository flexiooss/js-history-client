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
  }

  /**
   *
   * @param {HistoryClient~onPopStateClb} clb
   */
  onPopState(clb) {
  }

  /**
   * @callback HistoryClient~onPopStateClb
   * @param {HistoryState} historyState
   */

  /**
   * return {HistoryState}
   */
  state() {
  }
}
