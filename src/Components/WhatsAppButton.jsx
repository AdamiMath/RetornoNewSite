import React from 'react';


const WhatsAppButton = () => {
  const phoneNumber = '5518996751373'; // ⚠️ Altere este número para o seu com o código do país
  const message = 'Olá! Gostaria de mais informações sobre os serviços.'; // Mensagem pré-definida

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
      <img src="/assets/wpp.png" alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;