import {FlexArray} from '@flexio-oss/flex-types'
import {TypeCheck} from './TypeCheck'
import {assertType} from '@flexio-oss/assert'

/**
 * @extends {FlexArray<HistoryState>}
 */
export class HistoryStateArray extends FlexArray {
  _validate(v) {
    assertType(
      TypeCheck.isHistoryState(v),
      'HistoryStateArray: input should be a HistoryState'
    )
  }

  /**
   *
   * @return {Array}
   */
  toObject() {
    return this.mapToArray(v => v.toObject())
  }
}
