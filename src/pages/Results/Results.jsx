import { useSearchContext } from '../../components/SearchResults/SearchResults';
import './Results.css';

const Results = () => {
  const { searchResults } = useSearchContext();

  return (
    <section className="result-wrapper container">
      <div className="result-content">
        <h2>Resultados de la búsqueda:</h2>
        <ul className="results-list">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div key={item.id} className="result-item">
                <div className="product-wrapper">
                  <div className="product-img">
                    <img src={item.imagen} alt={item.modelo} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <div className="product-main-info">
                      <div className="modelo">{item.modelo}</div>
                      <div className="fabrica">{item.fabrica}</div>
                    </div>
                    <p className="product-desc">{item.descripcion}</p>
                    <button className="btn">
                      <a href={item.catalogo} target="_blank" rel="noreferrer">
                        Catálogo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No se encontraron resultados</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Results;
