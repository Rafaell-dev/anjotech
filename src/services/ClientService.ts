import { IClient } from '@/interfaces';
import api from '@/providers';

export const fetchClientByIdDoc = async (cli_id_doc: string) => {
  try {
    const response = await api.get(`/clients?cli_id_doc=${cli_id_doc}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter as pessoas: ' + error);
  }
};
export const fetchAllClients = async (
  value_id_doc: String,
  value_name_filter: String
) => {
  try {
    if (value_id_doc.length <= 11) {
      const response = await api.get(`/clients?cli_cpf=${value_id_doc}`);
      return response.data;
    } else if (value_id_doc.length > 11) {
      const repsonse = await api.get(`/clients?cli_cnpj=${value_id_doc}`);
      return repsonse.data;
    } else if (value_name_filter !== '') {
      const response = await api.get(`/clients?cli_name=${value_name_filter}`);
      return response.data;
    }
    return;
  } catch (error) {
    throw new Error('Erro ao obter as clientes: ' + error);
  }
};
