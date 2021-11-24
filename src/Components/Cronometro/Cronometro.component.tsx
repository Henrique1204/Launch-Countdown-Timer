import React from 'react';

import getDias from '../../Utils/getDias';
import getFimDoMes from '../../Utils/getFimDoMes';
import getHoras from '../../Utils/getHoras';
import getMinutos from '../../Utils/getMinutos';
import getSegundos from '../../Utils/getSegundos';

import ItemContador from '../ItemContador';

const Cronometro: React.FC = () => {
    const [fimDoMes, setFimDoMes] = React.useState<number>(0);
    const [dias, setDias] = React.useState<string>('');
    const [horas, setHoras] = React.useState<string>('');
    const [minutos, setMinutos] = React.useState<string>('');
    const [segundos, setSegundos] = React.useState<string>('');

    React.useEffect(() => {
        setFimDoMes(getFimDoMes());

        const delay = 1000 - new Date().getMilliseconds();

        setTimeout(() => {
            setInterval(() => setFimDoMes(getFimDoMes()), 1000);
        }, 1000 - delay);
    }, []);

    React.useEffect(() => {
        setDias(getDias(fimDoMes));
        setHoras(getHoras(fimDoMes));
        setMinutos(getMinutos(fimDoMes));
        setSegundos(getSegundos(fimDoMes));
    }, [fimDoMes])

    return (
        <>
            <ItemContador legenda='days' digito={dias} />
            <ItemContador legenda='hours' digito={horas} />
            <ItemContador legenda='minutes' digito={minutos} />
            <ItemContador legenda='seconds' digito={segundos} />
        </>
    );
};

export default Cronometro;
