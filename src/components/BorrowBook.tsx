import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {
  RootState,
  setIsOpenSheet,
  useAppDispatch,
  useAppSelector,
  useUpdateBookMutation,
} from 'store';
import Loader from './Loader';
import {Controller, useForm} from 'react-hook-form';
import {IBookPayload} from 'interfaces';
import {errorMessages} from '@constants';

const BorrowBook = () => {
  const dispatch = useAppDispatch();
  const selectedBook = useAppSelector(
    (state: RootState) => state.selectedBook.book,
  );
  const [updateBook, {isLoading}] = useUpdateBookMutation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Partial<IBookPayload>>({
    defaultValues: {
      borrowedTo: selectedBook?.borrowedTo ?? '',
      borrowedAt: selectedBook?.borrowedAt ?? '',
      borrowed: selectedBook?.borrowed ?? false,
    },
  });

  const onSubmit = async (data: Partial<IBookPayload>) => {
    if (selectedBook?.id)
      await updateBook({id: selectedBook?.id, body: {...data, borrowed: true}});
    dispatch(setIsOpenSheet(false));
  };

  if (isLoading)
    return (
      <View className="flex-1 justify-center h-[350] w-full">
        <Loader />
      </View>
    );
  return (
    <View className="flex items-start justify-evenly py-6 px-16 h-full w-full">
      <Text className="text-base font-neuton">
        {`¿A quién prestaste `}
        <Text className="font-neuton-bold">{selectedBook?.title}</Text>
        {`?`}
      </Text>
      <Controller
        name="borrowedTo"
        control={control}
        rules={{
          required: true,
          maxLength: 30,
          pattern: /^[\p{L}\s.'-]+$/u,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            maxLength={30}
            className="w-full mt-3 font-neuton"
            mode="outlined"
            label={<Text className="text-gray-500 font-neuton">Nombre</Text>}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Pepito Pérez"
          />
        )}
      />
      {errors.borrowedTo && (
        <Text className="text-sm text-red-600 mt-1 ml-4 font-neuton">
          {/* @ts-ignore */}
          {errorMessages[errors.borrowedTo?.type] ?? 'El valor es inválido'}
        </Text>
      )}
      <Text className="text-base mt-4 font-neuton">¿Cuándo lo prestaste?</Text>
      <Controller
        name="borrowedAt"
        control={control}
        rules={{
          required: true,
          maxLength: 10,
          validate: value => {
            if (value === undefined) {
              return false;
            }
            const [day, month, year] = value.split('/').map(Number);

            const date = new Date(year, month - 1, day);
            if (isNaN(date.getTime())) {
              return false;
            }

            const minDate = new Date(1900, 0, 1);
            const maxDate = new Date();
            return date >= minDate && date <= maxDate;
          },
          pattern: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            maxLength={10}
            className="w-full mt-3 font-neuton"
            mode="outlined"
            label={<Text className="text-gray-500 font-neuton">Fecha</Text>}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="DD/MM/AAAA"
          />
        )}
      />
      {errors.borrowedAt && (
        <Text className="text-sm text-red-600 mt-1 ml-4 font-neuton">
          {/* @ts-ignore */}
          {errorMessages[errors.borrowedAt?.type] ??
            'Debes ingresar una fecha entre 01/01/1900 y hoy'}
        </Text>
      )}
      <View className="flex flex-row w-full justify-evenly">
        <Button mode="text" onPress={() => dispatch(setIsOpenSheet(false))}>
          Cancelar
        </Button>
        <Button mode="text" onPress={handleSubmit(onSubmit)}>
          Guardar
        </Button>
      </View>
    </View>
  );
};

export default BorrowBook;
