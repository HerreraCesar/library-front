import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {
  setIsOpenSheet,
  useAddBookMutation,
  useAppDispatch,
  useUpdateBookMutation,
} from 'store';
import {Button, TextInput} from 'react-native-paper';
import {IBook, IBookPayload} from 'interfaces';
import {Loader} from '@components';
import {errorMessages} from '@constants';

interface Props {
  initialValue?: IBook | undefined;
}

const BookForm = ({initialValue}: Props) => {
  const dispatch = useAppDispatch();
  const [addBook, {isLoading: addBookIsLoading}] = useAddBookMutation();
  const [updateBook, {isLoading: updateBookIsLoading}] =
    useUpdateBookMutation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IBookPayload>({
    defaultValues: {
      title: initialValue?.title ?? '',
      author: initialValue?.author ?? '',
      description: initialValue?.description ?? '',
      pages: initialValue?.pages?.toString() ?? '',
      year: initialValue?.year?.toString() ?? '',
    },
  });

  const onSubmit = async (data: IBookPayload) => {
    initialValue
      ? await updateBook({id: initialValue.id, body: data})
      : await addBook(data);
    dispatch(setIsOpenSheet(false));
  };

  if (addBookIsLoading || updateBookIsLoading)
    return (
      <View className="flex-1 justify-center h-[75vh] w-full">
        <Loader />
      </View>
    );
  else
    return (
      <ScrollView>
        <View className="flex-1 justify-evenly h-[75vh] w-full px-8 pb-8">
          <Controller
            disabled={true}
            name="cover"
            control={control}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <TextInput
                disabled={true}
                className="w-full mt-3 font-neuton"
                mode="outlined"
                label={<Text className="text-gray-400">Portada</Text>}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                ref={ref}
              />
            )}
          />
          <Controller
            name="title"
            control={control}
            rules={{
              required: true,
              maxLength: 60,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                maxLength={60}
                className="w-full mt-3 font-neuton"
                mode="outlined"
                label={<Text className="text-gray-500">Título</Text>}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.title && (
            <Text className="text-sm text-red-600 mt-1 ml-4 font-neuton">
              {/* @ts-ignore */}
              {errorMessages[errors.title?.type] ?? 'El valor es inválido'}
            </Text>
          )}
          <Controller
            name="author"
            control={control}
            rules={{
              required: true,
              maxLength: 30,
              pattern: /^[\p{L}\s.'-]+$/u,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                maxLength={30}
                className="w-full mt-3"
                mode="outlined"
                label={<Text className="text-gray-500">Autor</Text>}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.author && (
            <Text className="text-sm text-red-600 mt-1 ml-4 font-neuton">
              {/* @ts-ignore */}
              {errorMessages[errors.author?.type] ?? 'El valor es inválido'}
            </Text>
          )}
          <Controller
            name="description"
            control={control}
            rules={{
              maxLength: 300,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                maxLength={300}
                className="w-full mt-3 font-neuton"
                mode="outlined"
                label={<Text className="text-gray-500">Descripción</Text>}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={true}
              />
            )}
          />
          {errors.description && (
            <Text className="text-sm text-red-600 mt-1 ml-4 font-neuton">
              {/* @ts-ignore */}
              {errorMessages[errors.description?.type] ??
                'El valor es inválido'}
            </Text>
          )}
          <Controller
            name="year"
            control={control}
            rules={{
              required: true,
              maxLength: 6,
              validate: value => {
                const currentYear = new Date().getFullYear();
                const yearValue = parseInt(value, 10);
                return !(
                  isNaN(yearValue) ||
                  yearValue < -10000 ||
                  yearValue > currentYear
                );
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                maxLength={6}
                className="w-full mt-3 font-neuton"
                mode="outlined"
                label={<Text className="text-gray-500 ">Año</Text>}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="numeric"
              />
            )}
          />
          {errors.year && (
            <Text className="text-sm text-red-600 mt-1 ml-4 font-neuton">
              {/* @ts-ignore */}
              {errorMessages[errors.year?.type] ??
                'El año debe estar entre -10.000 y el año actual'}
            </Text>
          )}
          <Controller
            name="pages"
            control={control}
            rules={{
              required: true,
              maxLength: 5,
              validate: value => {
                const pagesValue = parseInt(value, 10);
                return !(
                  isNaN(pagesValue) ||
                  pagesValue <= 0 ||
                  pagesValue >= 10000
                );
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                maxLength={5}
                className="w-full mt-3 font-neuton"
                mode="outlined"
                label={<Text className="text-gray-500 ">Páginas</Text>}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="numeric"
              />
            )}
          />
          {errors.pages && (
            <Text className="text-sm text-red-600 mt-1 ml-4 font-neuton">
              {/* @ts-ignore */}
              {errorMessages[errors.pages?.type] ??
                'El valor debe estar entre 1 y 10.000'}
            </Text>
          )}
          <View className="flex flex-row w-full justify-evenly mt-8">
            <Button mode="text" onPress={() => dispatch(setIsOpenSheet(false))}>
              Cancelar
            </Button>
            <Button mode="text" onPress={handleSubmit(onSubmit)}>
              Guardar
            </Button>
          </View>
        </View>
      </ScrollView>
    );
};

export default BookForm;
