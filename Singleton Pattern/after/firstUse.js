import FancyLogger from './fancyLogger.js'

const logger = new FancyLogger()

export default function logFirstImplementation() {
  logger.printLogCount()
  logger.log('First File')
  logger.printLogCount()
}