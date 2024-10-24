import React, { useState } from 'react';
import './FormServTec.css';

const FormContacto = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Apellido: '',
    Teléfono: '',
    Email: '',
    Dirección: '',
    Comuna: '',
    Región: '',
    Asunto: '',
    Mensaje: '',
  });

  const [errorName, setErrorName] = useState(false);
  const [errorApe, setErrorApe] = useState(false);
  const [errorTel, setErrorTel] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorDir, setErrorDir] = useState(false);
  const [errorCom, setErrorCom] = useState(false);
  const [errorReg, setErrorReg] = useState(false);
  const [errorAsu, setErrorAsu] = useState(false);

  const handleErrorName = (e) => {
    setErrorName(true);
  };
  const handleErrorApe = (e) => {
    setErrorApe(true);
  };

  const handleErrorTel = (e) => {
    setErrorTel(true);
  };

  const handleErrorEmail = (e) => {
    setErrorEmail(true);
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

  const handleErrorAsu = (e) => {
    setErrorAsu(true);
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
      const response = await fetch('https://formspree.io/f/xbjnjzvz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // El formulario se envió correctamente, ahora redirige a otra página
        window.location.hash = '/formularioenviado'; // ajusta la ruta según tus necesidades
      } else {
        console.error('Error al enviar el formulario:', response.statusText);
        // Puedes manejar el error de alguna manera en tu interfaz de usuario
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
          placeholder="Nombre"
          required
          onChange={handleChange}
          onBlur={handleErrorName}
          error={errorName.toString()}
        />
        <span className="errorName-message">*Ingrese nombre</span>

        <input
          type="text"
          name="Apellido"
          placeholder="Apellido"
          required
          onChange={handleChange}
          onBlur={handleErrorApe}
          errorApe={errorApe.toString()}
        />
        <span className="errorApe-message">*Ingrese apellido</span>
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
          name="Dirección"
          placeholder="Dirección"
          required
          onChange={handleChange}
          onBlur={handleErrorDir}
          errorDir={errorDir.toString()}
        />
        <span className="errorDir-message">
          *Ingrese su dirección 
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
        
        <input
          type="text"
          name="Asunto"
          placeholder="Asunto"
          required
          onChange={handleChange}
          onBlur={handleErrorAsu}
          errorAsu={errorAsu.toString()}
        />
        
        <span className="errorAsu-message">*Ingrese asunto</span>

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

export default FormContacto;
