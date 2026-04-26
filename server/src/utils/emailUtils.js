const logger = require('../config/logger');

/**
 * Send Email Placeholder
 * @param {object} options { email, subject, message, template }
 */
const sendEmail = async (options) => {
  // In a real app, use nodemailer or a service like SendGrid/Mailgun
  // For now, we just log it to the console
  logger.info(`[EMAIL SIMULATOR] To: ${options.email} | Subject: ${options.subject}`);
  logger.debug(`[EMAIL BODY]: ${options.message || 'Template: ' + options.template}`);
  
  return true;
};

module.exports = {
  sendEmail
};
