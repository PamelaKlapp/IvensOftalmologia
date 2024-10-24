import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LentesEVO from './pages/LentesEVO/LentesEVO';
import ServicioTec from './pages/ServicioTec/ServicioTec';
import Nosotros from './pages/Nosotros/Nosotros';
import {
  InstrumentosQuirurgicos,
  LaserOftalmologico,
  VitreoRetina,
  Biomecanica,
  BiometroOptico,
  CamarasNoMidr,
  Campimetros,
  Ecografos,
  LamparasHen,
  Paquimetros,
  TomografoOcular,
  Tonometros,
  TopografosCorneal,
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
} from './pages/Productos/ListaProductos';
import {
  Cirugia,
  Diagnostico,
  Refraccion,
  UnidadesRefraccionProd,
} from './pages/Categorias/ListaCategorias';
import CTA from './components/CTA/CTA';
import Contacto from './pages/Contacto/Contacto';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Results from './pages/Results/Results';
import ProductosInicio from './pages/Productos/ProductosInicio';
import RespuestaForm from './components/FormServTec/RespuestaForm';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="espacio-navbar"></div>
      <ScrollToTop />
      <Routes>
        {/* MENU PRINCIPAL */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<ProductosInicio />} />
        <Route exact path="/lentes-evo-icl" element={<LentesEVO />} />
        <Route exact path="/servicio-tecnico" element={<ServicioTec />} />

        {/* CATEGORIAS */}
        <Route exact path="/productos/diagnosticos" element={<Diagnostico />} />
        <Route exact path="/productos/refraccion" element={<Refraccion />} />
        <Route exact path="/productos/cirugia" element={<Cirugia />} />
        <Route
          exact
          path="/productos/unidadesrefraccion"
          element={<UnidadesRefraccionProd />}
        />

        {/* PRODUCTOS */}
        <Route
          exact
          path="/laseroftalmologico"
          element={<LaserOftalmologico />}
        />
        <Route exact path="/vitreoretina" element={<VitreoRetina />} />
        <Route exact path="/biometrooptico" element={<BiometroOptico />} />
        <Route
          exact
          path="/instrumentalquirurgico"
          element={<InstrumentosQuirurgicos />}
        />
        <Route
          exact
          path="/unidadesrefraccion"
          element={<UnidadesRefraccion />}
        />
        <Route exact path="/estudiomiopia" element={<EstudioMiopia />} />
        <Route exact path="/autokerato" element={<AutoKeratoRef />} />
        <Route exact path="/optotipos" element={<Optotipos />} />
        <Route exact path="/testdevision" element={<TestVision />} />
        <Route exact path="/cajaslentes" element={<CajasLentes />} />
        <Route exact path="/monturasprueba" element={<MonturasPruebas />} />
        <Route exact path="/foropteros" element={<Foropteros />} />
        <Route exact path="/lensometros" element={<Lensometros />} />
        <Route exact path="/mesaselectricas" element={<MesasElectricas />} />

        <Route exact path="/camarasnomidiraticas" element={<CamarasNoMidr />} />
        <Route exact path="/tonometros" element={<Tonometros />} />
        <Route
          exact
          path="/topografoscorneales"
          element={<TopografosCorneal />}
        />
        <Route exact path="/lamparasdehendidura" element={<LamparasHen />} />
        <Route exact path="/paquimetros" element={<Paquimetros />} />
        <Route exact path="/campimetros" element={<Campimetros />} />
        <Route exact path="/tomografoocular" element={<TomografoOcular />} />
        <Route exact path="/biomecanicacorneal" element={<Biomecanica />} />
        <Route exact path="/ecografos" element={<Ecografos />} />
        <Route exact path="/formularioenviado" element={<RespuestaForm />} />

        {/* FOOTER */}
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/searchresultados" element={<Results />} />
      </Routes>
      <CTA />
      <Footer />
    </>
  );
};

export default App;
