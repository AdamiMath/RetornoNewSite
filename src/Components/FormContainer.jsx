import React, { useState } from 'react'

const FormContainer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let v = value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      }
      setFormData({ ...formData, [name]: v });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Campo obrigatório";
    if (!formData.lastName.trim()) newErrors.lastName = "Campo obrigatório";

    if (!formData.email) {
      newErrors.email = "Campo obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.phone) {
      newErrors.phone = "Campo obrigatório";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Número inválido";
    }

    if (!formData.message.trim()) newErrors.message = "Campo obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Formulário enviado com sucesso!");
    }
  };

  return (
    <div className='ContainerForm'>
      <div className='imageForm'>
        <img
          className='formimage'
          src="/assets/formimage.png"
          alt="Imagem de pessoas trabalhando em um cartoon"
        />
      </div>

      <div className='Form'>
        <h3 className='h3-contato'>Entre em Contato</h3>

     <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="field">
      <input
        type="text"
        name="firstName"
        placeholder="Primeiro Nome"
        value={formData.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <span className="error">{errors.firstName}</span>}
    </div>

    <div className="field">
      <input
        type="text"
        name="lastName"
        placeholder="Último Nome"
        value={formData.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <span className="error">{errors.lastName}</span>}
    </div>
  </div>

  <div className="row">
    <div className="field">
      <input
        type="email"
        name="email"
        placeholder="Endereço de E-mail"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}
    </div>

    <div className="field">
      <input
        type="text"
        name="phone"
        placeholder="Número de Celular"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <span className="error">{errors.phone}</span>}
    </div>
  </div>

  <div className="field full">
    <textarea
      className="inputText"
      name="message"
      placeholder="Mensagem"
      value={formData.message}
      onChange={handleChange}
    />
    {errors.message && <span className="error">{errors.message}</span>}
  </div>

  <button type="submit" className="buttonEnviar">Enviar</button>
</form>
      </div>
    </div>
  )
}

export default FormContainer;
