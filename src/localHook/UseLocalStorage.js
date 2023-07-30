import { useState } from 'react';

export default function useLocalStorage(key,defaultValue){

  const [value,setValue]= useState(()=>{
    //ilk açılışta localstorage okuyoruz
    const localVal = JSON.parse(localStorage.getItem(key));

    if(localVal === null){
      //localVal'da değer yoksa default değeri localStorage'e atıyoruz
      
      localStorage.setItem(key,JSON.stringify(defaultValue));

      return defaultValue;
    } else{
      //localVal'da değer varsa mevcut değeri dönüyoruz.
      return localVal;
    }
  })
    const setLocalStorage = (newValue) => {
      localStorage.setItem(key,JSON.stringify(newValue));
      setValue(newValue);
    };

    
  return[value,setLocalStorage];
}

