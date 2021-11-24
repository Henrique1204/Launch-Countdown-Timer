import zeroEsquerda from "./zeroEsquerda";

/**
 * Cálcula a quantidade de segundos de acordo com os milisegundos.
 * @param milisegundos Quantidade de milisegundos.
 * @returns {string} Quantidade de segundos de acordo com os milisegundos.
 */
const getSegundos = (
    milisegundos: number
): string => zeroEsquerda(milisegundos / (1000) % 60);

export default getSegundos;
