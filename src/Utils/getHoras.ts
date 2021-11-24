import zeroEsquerda from "./zeroEsquerda";

/**
 * Cálcula a quantidade de horas de acordo com os milisegundos.
 * @param milisegundos Quantidade de milisegundos.
 * @returns {string} Quantidade de horas de acordo com os milisegundos.
 */
const getHoras = (
    milisegundos: number
): string => zeroEsquerda(milisegundos / (1000 * 60 * 60) % 24);

export default getHoras;
