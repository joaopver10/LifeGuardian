import React, {useRef, useEffect, useCallback, useState} from "react";
import {Keyboard, Text, TextInput, StyleSheet, Alert} from 'react-native'
import {useField} from '@unform/core'


export default function Input({name, label, onChangeText, ...rest}){
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
      inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
      if (inputRef.current) inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        getValue() {
          if (inputRef.current) return inputRef.current.value;
          return '';
        },
        setValue(ref, value) {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: value });
            inputRef.current.value = value;
          }
        },
        clearValue() {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: '' });
            inputRef.current.value = '';
          }
        },
      });
    }, [fieldName, registerField]);
    const handleChangeText = useCallback(
      text => {
        if (inputRef.current) inputRef.current.value = text;
        if (onChangeText) onChangeText(text);
      },
      [onChangeText],
    );

    
    return(
        <>
        {label && <Text>{label}</Text>}
        <TextInput
            ke
            ref={inputRef}
            onChangeText={handleChangeText}
            defaultValue={defaultValue}
            style={styles.campo}
            autoCapitalize='none'
            editable
            maxLength={40}
            
            {...rest}
      />
        {error && Alert.alert(error)}
    </>
    );
}

const styles = StyleSheet.create({
    campo:{
        borderWidth: 1,
        height: 45,
        padding: 10,
        width: 260,
        borderColor: 'gray',
        marginBottom: 15,
        borderRadius: 3,
        alignSelf:'center'
    }
})