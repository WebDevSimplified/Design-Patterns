class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

export default FancyLogger