import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  autokeratoref,
  biomecanicaCorneal,
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
} from '../../data';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../SearchResults/SearchResults';
import './SearchBar.css';

const SearchBar = () => {
  const { updateSearchResults } = useSearchContext();
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // const HandlerOpen = () => {
  //   setOpenSearch((current) => !current);
  // };

  const handleSearch = () => {
    const allProducts = [
      ...vitreoretinal,
      ...instrumentalquirurgico,
      ...autokeratoref,
      ...biomecanicaCorneal,
      ...cajaslentes,
      ...camarasNoMidr,
      ...campimetros,
      ...ecografos,
      ...estudiomiopia,
      ...foropterosDigitales,
      ...lamparashen,
      ...laseroftalmologico,
      ...lensometrosDigitales,
      ...mesasElectricas,
      ...monturasPruebas,
      ...optotipos,
      ...paquimetros,
      ...testvision,
      ...tomografoOcular,
      ...tonometros,
      ...topografosCorneal,
      ...unidadesrefraccion,
    ];

    updateSearchResults([]);

    setTimeout(() => {
      const filteredData = allProducts.filter(
        (item) =>
          item.fabrica.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.subcategoria.toLowerCase().includes(searchTerm.toLowerCase())
      );

      updateSearchResults(filteredData);

      navigate('/searchresultados');

      setSearchTerm('');
      setOpenSearch(true);
    }, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search__container">
      <input
        type="text"
        placeholder="Buscar.."
        className={openSearch ? 'active' : ''}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="nav__search-icon">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
