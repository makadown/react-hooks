export const procesoPesado = (iteraciones) => {
    console.log('iniciando proceso pesado');
    for(let i=0; i< iteraciones; i++)
    {
        console.log('Ai vamos...');
    }

    return `${iteraciones} iteraciones realizadas`;
};