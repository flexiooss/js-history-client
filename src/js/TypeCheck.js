import {HistoryClient} from './HistoryClient'

export class TypeCheck {
  /**
   *
   * @param instance
   * @return {boolean}
   */
  static isHistoryClient(instance) {
    return instance instanceof HistoryClient
  }
}
