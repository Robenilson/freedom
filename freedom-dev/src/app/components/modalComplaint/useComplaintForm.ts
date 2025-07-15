import { useState } from "react";
export const useComplaintForm = () => {
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [selectedType, setSelectedType] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const handleSend = () => {
    console.log("Mensagem:", message);
    console.log("Endereço:", address);
    console.log("Tipo de Denúncia:", selectedType);
    // Aqui vai a lógica para enviar a denúncia
  };
  return {
    message,
    setMessage,
    address,
    setAddress,
    selectedType,
    setSelectedType,
    handleSend,
  };
};
