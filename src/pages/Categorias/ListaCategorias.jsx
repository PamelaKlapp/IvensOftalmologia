import React from 'react';
import Categorias from './Categorias';
import { productlinks } from '../../data';

const Cirugia = () => {
  const ImgCir =
    'https://lh3.googleusercontent.com/d/1bMBO9dRRrybDFX8z8ZzWbM_ERTNKz4uR';

  const dataCirugia = productlinks.find((item) => item.categoria === 'Cirugía');
  return <Categorias img={ImgCir} title="Cirugía" data={dataCirugia} />;
};

const Diagnostico = () => {
  const ImgDiag =
    'https://lh3.googleusercontent.com/d/1ILQXG-Zjw6x5G04Tow6uzZRjyg-voMxN';
  const dataDiagnostico = productlinks.find(
    (item) => item.categoria === 'Diagnóstico'
  );
  return (
    <Categorias
      img={ImgDiag}
      title="Diagnóstico"
      data={dataDiagnostico}
      customStyle="orange-background"
    />
  );
};

const Refraccion = () => {
  const ImgRef =
    'https://lh3.googleusercontent.com/d/1bOva7KHFGMLP0DSQE1fib2-MfDvd90ge';
  const dataRefraccion = productlinks.find(
    (item) => item.categoria === 'Refracción'
  );
  return <Categorias img={ImgRef} title="Refracción" data={dataRefraccion} />;
};

const UnidadesRefraccionProd = () => {
  const ImgUndRe =
    'https://lh3.googleusercontent.com/d/1iynHbm_QOq65wYdynhjnV_nuzNoCbelh';
  const dataUnidRefraccion = productlinks.find(
    (item) => item.categoria === 'Unidades de Refracción'
  );
  return (
    <Categorias
      img={ImgUndRe}
      title="Unidades de Refracción"
      data={dataUnidRefraccion}
      customStyle="orange-background-height"
    />
  );
};

export { Cirugia, Diagnostico, Refraccion, UnidadesRefraccionProd };
