import logger from './fancyLogger.js'

export default function logSecondImplementation() {
  logger.printLogCount()
  logger.log('Second File')
  logger.printLogCount()
}