import React, { useEffect, useState } from 'react'

const localCache = {};

export const useFetch = ( url, section , id = 0) => {
  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const productList = JSON.parse(localStorage.getItem("home"));

  useEffect(()=>{
    getFetch();

  },[url]);
  
  const setLoadingState = () =>{
    setState({
        data: null,
        isLoading: true,
        hasError:false,
        error: null,
    });
  }

  const getFetch = async() =>{

    if( productList != null && ( section == "home" )){
       setState({
            data:productList,
            isLoading: false,
            hasError: false,
            error: null,
        });
        return;
    }else{
      if ( localCache[url] ){
            setState({
                  data:localCache[url],
                  isLoading: false,
                  hasError: false,
                  error: null,
              });
              return;
          }else{
            if(productList != null){
  const producto = productList.find(product => parseInt(product.id,10) === parseInt(id, 10));
            setState({
              data: producto,
              isLoading: false,
              hasError: false,
              error: null,
            });
            return;
            }
          }
    }

    setLoadingState();
  
  const resp = await fetch(url);
  
  await new Promise( resolve => setTimeout( resolve, 500));

  if (!resp.ok ){
    setState({
        data:null,
        isLoading:false,
        hasError: true,
        error: {
            code: resp.status,
            message: resp.statusText,
        }
    });
    return;
  }

  const data = await resp.json();

  setState({
    data:data,
    isLoading:false,
    hasError:false,
    error:null,
  });

  if(section == "home"){
    localStorage.setItem('home',JSON.stringify(data));
  }

  localCache[ url ] = data;

  }

 
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
