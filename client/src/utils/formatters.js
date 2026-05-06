/**
 * Format number to Indian Numbering System (Lakhs/Crores)
 * @param {number} num 
 * @returns {string}
 */
export const formatIndianNumber = (num) => {
  if (!num) return '0';
  const x = num.toString();
  let lastThree = x.substring(x.length - 3);
  const otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== '') lastThree = ',' + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
};

/**
 * Format score to 1 decimal place
 * @param {number} score 
 * @returns {string}
 */
export const formatScore = (score) => {
  return Number(score).toFixed(1);
};

/**
 * Map score to color class
 * @param {number} score 
 * @returns {string}
 */
export const getScoreColorClass = (score) => {
  if (score >= 85) return 'text-green-500 bg-green-500/10 border-green-500/20';
  if (score >= 70) return 'text-lime-500 bg-lime-500/10 border-lime-500/20';
  if (score >= 55) return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
  if (score >= 40) return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
  return 'text-red-500 bg-red-500/10 border-red-500/20';
};
