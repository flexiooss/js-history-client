import {HistoryClient} from './HistoryClient'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

export class TypeCheck {
  /**
   *
   * @param instance
   * @return {boolean}
   */
  static isHistoryClient(instance) {
    return instance instanceof HistoryClient
  }
  /**
   *
   * @param instance
   * @return {boolean}
   */
  static isHistoryState(instance) {
    return instance instanceof  globalFlexioImport.io.flexio.js_history_client.types.HistoryState
  }
}
