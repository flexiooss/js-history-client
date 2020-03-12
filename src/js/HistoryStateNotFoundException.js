export const NOT_FOUND = 'NOT_FOUND'

export class HistoryStateNotFoundException extends Error {
  constructor(message = '', ...params) {
    super(...params)
    this.message = message
    this.name = this.constructor.name
    this.code = null
  }

  /**
   *
   * @param {string} code
   * @return {HistoryStateNotFoundException}
   */
  setCode(code) {
    this.code = code
    return this
  }

  /**
   * @return {HistoryStateNotFoundException}
   */
  static NOT_FOUND() {
    return new HistoryStateNotFoundException('history state not found ')
      .setCode(NOT_FOUND)
  }

  toString() {
    return `${this.code} - ${this.name} : ${this.message} `
  }
}
