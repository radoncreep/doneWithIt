import React from 'react';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputlist';

function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        // setImageUri([...imageUris, uri]) 
        // or
        // setImageUri(imageUris.concat(uri));
        // see we dont have local state here and our state is updated by formik
        // the formik state has a key value pair cos it manages different state of our fields in the form
        // so the first param "name" is the key and the value is the updated array/list of uris
        setFieldValue(name, [...imageUris, uri]);
      }
      const handleRemove = (uri) => {
        //   const newImageUri = [...imageUri];
        //   let filteredImageUri = newImageUri.filter((item) => item !== uri );
        //   setImageUri(filteredImageUri) or
        // setImageUri(imageUris.filter((imageUri) => imageUir !== uri ));
        setFieldValue(name, [...imageUris.filter((imageUri) => imageUri !== uri )])
      };

    return (
        <>
            <ImageInputList 
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};



export default FormImagePicker;