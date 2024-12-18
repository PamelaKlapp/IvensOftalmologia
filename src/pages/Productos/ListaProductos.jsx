import React from 'react';
import Productos from './Productos';
import {
  autokeratoref,
  biomecanicaCorneal,
  biometroOptico,
  cajaslentes,
  camarasNoMidr,
  campimetros,
  ecografos,
  estudiomiopia,
  foropterosDigitales,
  instrumentalquirurgico,
  lamparashen,
  laseroftalmologico,
  lensometrosDigitales,
  mesasElectricas,
  monturasPruebas,
  optotipos,
  paquimetros,
  testvision,
  tomografoOcular,
  tonometros,
  topografosCorneal,
  unidadesrefraccion,
  vitreoretinal,
  tomografoCoherencia
} from '../../data';

//CIRUGIA

const InstrumentosQuirurgicos = () => {
  return (
    <Productos data={instrumentalquirurgico} title="Instrumentos Quirúrgicos" />
  );
};

const LaserOftalmologico = () => {
  return <Productos data={laseroftalmologico} title="Láser Oftalmológico" />;
};
const VitreoRetina = () => {
  return <Productos data={vitreoretinal} title="Vitreo Retina" />;
};

//DIAGNOSTICO
const Coherencia = () => {
  return <Productos data={tomografoCoherencia} title="Tomógrafo de Coherencia" />;
};

const Biomecanica = () => {
  return <Productos data={biomecanicaCorneal} title="Biomecánica Corneal" />;
};

const CamarasNoMidr = () => {
  return <Productos data={camarasNoMidr} title="Cámaras No Midriáticas" />;
};

const Campimetros = () => {
  return <Productos data={campimetros} title="Campímetros" />;
};

const Ecografos = () => {
  return <Productos data={ecografos} title="Ecógrafos" />;
};

const LamparasHen = () => {
  return <Productos data={lamparashen} title="Lámparas de Hendiduras" />;
};

const Paquimetros = () => {
  return <Productos data={paquimetros} title="Paquímetros" />;
};

const TomografoOcular = () => {
  return <Productos data={tomografoOcular} title="Tomógrafo Ocular" />;
};

const Tonometros = () => {
  return <Productos data={tonometros} title="Tonómetros" />;
};

const TopografosCorneal = () => {
  return <Productos data={topografosCorneal} title="Topógrafos Corneales" />;
};

const BiometroOptico = () => {
  return <Productos data={biometroOptico} title="Biómetro Óptico" />;
};

//REFRACCION

const AutoKeratoRef = () => {
  return (
    <Productos data={autokeratoref} title="Auto Kerato - Refractómetros" />
  );
};

const CajasLentes = () => {
  return <Productos data={cajaslentes} title="Cajas de Lentes" />;
};

const EstudioMiopia = () => {
  return <Productos data={estudiomiopia} title="Estudio de la Miopía" />;
};

const Foropteros = () => {
  return <Productos data={foropterosDigitales} title="Forópteros Digitales" />;
};

const Lensometros = () => {
  return (
    <Productos data={lensometrosDigitales} title="Lensómetros Digitales" />
  );
};

const MesasElectricas = () => {
  return <Productos data={mesasElectricas} title="Mesas Eléctricas" />;
};

const MonturasPruebas = () => {
  return <Productos data={monturasPruebas} title="Monturas de Prueba" />;
};

const Optotipos = () => {
  return (
    <Productos data={optotipos} title="Sistema de Proyección de Optotipos" />
  );
};

const TestVision = () => {
  return <Productos data={testvision} title="Test de Visión" />;
};

//UNIDAD DE REFRACCION

const UnidadesRefraccion = () => {
  return <Productos data={unidadesrefraccion} title="Unidades de Refracción" />;
};

export {
  InstrumentosQuirurgicos,
  VitreoRetina,
  LaserOftalmologico,
  Biomecanica,
  CamarasNoMidr,
  Campimetros,
  Ecografos,
  LamparasHen,
  Paquimetros,
  TomografoOcular,
  Tonometros,
  TopografosCorneal,
  BiometroOptico,
  AutoKeratoRef,
  CajasLentes,
  EstudioMiopia,
  Foropteros,
  Lensometros,
  MesasElectricas,
  MonturasPruebas,
  Optotipos,
  TestVision,
  UnidadesRefraccion,
  Coherencia,
};
