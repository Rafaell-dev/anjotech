// ClientApi.tsx
import React, { useEffect } from 'react';
import { IClient } from '@/interfaces';
import { fetchClientByIdDoc } from '@/services';

interface ClientApiProps {
  requestData: string;
  onSuccess: (data: IClient[]) => void;
  onError: (error: Error) => void;
}

const ClientApi: React.FC<ClientApiProps> = ({
  requestData,
  onSuccess,
  onError,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchClientByIdDoc(requestData);
        if (response.data) {
          onSuccess(response.data);
        } else {
          onError(new Error('Cliente não encontrado'));
        }
      } catch (error) {
        onError(error as Error);
      }
    };

    if (requestData) {
      fetchData();
    }
  }, [requestData, onSuccess, onError]);

  return null; // This component doesn't render anything
};

export { ClientApi };
