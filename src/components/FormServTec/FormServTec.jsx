import React, { useState } from 'react';
import './FormServTec.css';

const FormServTec = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Teléfono: '',
    Email: '',
    Establecimiento: '',
    Dirección: '',
    Comuna: '',
    Región: '',
    Servicio: 'ninguna',
    Mensaje: '',
  });

  const [errorName, setErrorName] = useState(false);
  const [errorTel, setErrorTel] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEs, setErrorEs] = useState(false);
  const [errorDir, setErrorDir] = useState(false);
  const [errorCom, setErrorCom] = useState(false);
  const [errorReg, setErrorReg] = useState(false);

  const handleErrorName = (e) => {
    setErrorName(true);
  };

  const handleErrorTel = (e) => {
    setErrorTel(true);
  };

  const handleErrorEmail = (e) => {
    setErrorEmail(true);
  };

  const handleErrorEs = (e) => {
    setErrorEs(true);
  };

  const handleErrorDir = (e) => {
    setErrorDir(true);
  };

  const handleErrorCom = (e) => {
    setErrorCom(true);
  };

  const handleErrorReg = (e) => {
    setErrorReg(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mnqeqgko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
       
        window.location.hash = '/formularioenviado'; 
      } else {
        console.error('Error al enviar el formulario:', response.statusText);
        
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <form
      action="https://formspree.io/f/mnqkkepr"
      method="POST"
      className="serv__form-container"
      onSubmit={handleSubmit}
    >
      <div className="serv__form">
        <input
          type="text"
          name="Nombre"
          placeholder="Nombre Completo"
          required
          onChange={handleChange}
          onBlur={handleErrorName}
          error={errorName.toString()}
        />
        <span className="errorName-message">*Ingrese nombre completo</span>
        <input
          type="tel"
          name="Teléfono"
          placeholder="Teléfono"
          pattern="[0-9]*"
          required
          onChange={handleChange}
          onBlur={handleErrorTel}
          errorTel={errorTel.toString()}
        />
        <span className="errorTel-message">
          *Ingrese sólo números, por ejemplo: 56947848791
        </span>

        <input
          type="email"
          name="Email"
          placeholder="Correo Electrónico"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          onChange={handleChange}
          onBlur={handleErrorEmail}
          errorEmail={errorEmail.toString()}
        />
        <span className="errorEmail-message">
          *Ingrese un correo electrónico válido
        </span>
        <input
          type="text"
          name="Establecimiento"
          placeholder="Nombre Establecimiento"
          required
          onChange={handleChange}
          onBlur={handleErrorEs}
          errorEs={errorEs.toString()}
        />
        <span className="errorEs-message">
          *Ingrese nombre de establecimiento
        </span>
        <input
          type="text"
          name="Dirección"
          placeholder="Dirección Establecimiento"
          required
          onChange={handleChange}
          onBlur={handleErrorDir}
          errorDir={errorDir.toString()}
        />
        <span className="errorDir-message">
          *Ingrese dirección de establecimiento
        </span>
        <input
          type="text"
          name="Comuna"
          placeholder="Comuna"
          required
          onChange={handleChange}
          onBlur={handleErrorCom}
          errorCom={errorCom.toString()}
        />
        <span className="errorCom-message">*Ingrese comuna</span>
        <input
          type="text"
          name="Región"
          placeholder="Región"
          required
          onChange={handleChange}
          onBlur={handleErrorReg}
          errorReg={errorReg.toString()}
        />
        <span className="errorReg-message">*Ingrese región</span>
        <select
          name="Servicio"
          id="seleccion"
          onChange={handleChange}
          required
          value={formData.seleccion}
        >
          <option value="ninguna">-- Seleccione una Opción --</option>
          <option value="Mantención">Mantención</option>
          <option value="Reparación">Reparación</option>
          <option value="Visita inspectiva">Visita inspectiva</option>
          <option value="Otros">Otros</option>
        </select>
        <textarea
          name="Mensaje"
          id="texto"
          cols="50"
          rows="5"
          placeholder="Mensaje"
          required
          onChange={handleChange}
        ></textarea>
        <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />
      </div>
      <button type="submit" className="btn btn-tec">
        Enviar
      </button>
    </form>
  );
};

export default FormServTec;
