import React from 'react';
import {Text} from '../../../../components/Text/Text';
import {ActivityIndicator} from '../../../../components/ActivityIndicator/ActivityIndicator';
import {Button} from '../../../../components/Button/Button';
import {Box} from '../../../../components/Box/Box';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há produtos cadastrados no momento
    </Text>
  );
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          Não foi possível carregar os produtos 😥
        </Text>
        <Button title="recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
