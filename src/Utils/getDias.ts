import zeroEsquerda from "./zeroEsquerda";

/**
 * Cálcula a quantidade de dias de acordo com os milisegundos.
 * @param milisegundos Quantidade de milisegundos.
 * @returns {string} Quantidade de dias de acordo com os milisegundos.
 */
const getDias = (
    milisegundos: number
): string => zeroEsquerda(milisegundos / (1000 * 60 * 60 * 24));

export default getDias;
