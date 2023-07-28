import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
  columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
const { fetchJSMData } = require('./api/jsm');
import React, { useEffect, useState } from "react";

export default function Settings() {
  // Estado para controlar o carregamento dos dados
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null); // Estado para armazenar os dados da API

  useEffect(() => {
    // Simulando um atraso de 1 segundo para carregar os dados
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Limpar o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);

  // Função para acionar a chamada de API
  const handleAPICall = async () => {
    try {
      setIsLoading(true); // Define o estado para true para exibir o Skeleton novamente
      const data = await fetchJSMData(); // Chama a função para obter os dados da API
      setApiData(data); // Armazena os dados da API no estado
      setIsLoading(false); // Define o estado para false para esconder o Skeleton
    } catch (error) {
      console.error('API error:', error);
      setIsLoading(false); // Caso ocorra algum erro, também define o estado para false para esconder o Skeleton
    }
  };

  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Verificar se os dados estão carregados */}
      {isLoading ? (
        // Se estiver carregando, renderizar o Skeleton dentro da Box
        <Box py="20px">
          <Skeleton height="40px" mb="20px" />
          <Skeleton height="40px" mb="20px" />
          <Skeleton height="40px" mb="20px" />
          <Skeleton height="40px" mb="20px" />
          <Skeleton height="40px" mb="20px" />
          <Skeleton height="40px" mb="20px" />
        </Box>
      ) : (
        // Se os dados estiverem carregados, renderizar a tabela
        <ComplexTable columnsData={columnsDataComplex} tableData={apiData || tableDataComplex} />
      )}

      {/* Botão para acionar a chamada de API */}
      <button onClick={handleAPICall}>Chamar API</button>
    </Box>
  );
}
