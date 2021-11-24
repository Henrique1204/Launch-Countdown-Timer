/**
 * Adicionar o zero na esquerda caso o numero só tenha um digito.
 * @param {number} n O numero que deverá ser preenchido com o "0" a esquerda.
 * @returns {string} O numero que foi passado, mas com o "0" adicionado na esquerda. 
 */
const zeroEsquerda = (n: number): string => Math.floor(n).toString().padStart(2, '0');

export default zeroEsquerda;
