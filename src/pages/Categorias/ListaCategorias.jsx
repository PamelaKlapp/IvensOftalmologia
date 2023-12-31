import React from 'react';
import Categorias from './Categorias';
import { productlinks } from '../../data';
import ImgCir from '../../assets/Categorias/Iconocirugía.png';
import ImgDiag from '../../assets/Categorias/Iconodiagnóstico.png';
import ImgRef from '../../assets/Categorias/Iconorefracción.png';
import ImgUndRe from '../../assets/Categorias/Iconounidadrefracción.png';

const Cirugia = () => {
  const dataCirugia = productlinks.find((item) => item.categoria === 'Cirugía');
  return <Categorias img={ImgCir} title="Cirugía" data={dataCirugia} />;
};

const Diagnostico = () => {
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
  const dataRefraccion = productlinks.find(
    (item) => item.categoria === 'Refracción'
  );
  return <Categorias img={ImgRef} title="Refracción" data={dataRefraccion} />;
};

const UnidadesRefraccionProd = () => {
  const dataUnidRefraccion = productlinks.find(
    (item) => item.categoria === 'Unidades de Refracción'
  );
  return (
    <Categorias
      img={ImgUndRe}
      title="Unidades de Refracción"
      data={dataUnidRefraccion}
      customStyle="orange-background"
    />
  );
};

export { Cirugia, Diagnostico, Refraccion, UnidadesRefraccionProd };
