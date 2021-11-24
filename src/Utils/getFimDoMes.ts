/**
 * Cálcula quanto tempo falta para o fim do mês em milisegundos.
 * @returns {number} Quantidade em milisegundos para o fim do mês.
 */
const getFimDoMes = (): number => {
    const hoje = new Date();
    const fimDoMes = new Date(hoje.getFullYear(), hoje.getMonth()+1, 0);

    return fimDoMes.getTime() - hoje.getTime();
};

export default getFimDoMes;
