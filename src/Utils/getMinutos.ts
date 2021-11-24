import zeroEsquerda from "./zeroEsquerda";

/**
 * Cálcula a quantidade de minutos de acordo com os milisegundos.
 * @param milisegundos Quantidade de milisegundos.
 * @returns {string} Quantidade de minutos de acordo com os milisegundos.
 */
const getMinutos = (
    milisegundos: number
): string => zeroEsquerda(milisegundos / (1000 * 60) % 60);

export default getMinutos;
