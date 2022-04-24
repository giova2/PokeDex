import {useState} from 'react'
import { useRouter } from "next/router";

import Presentational from './Presentational'

const AddPokemon = () => {
  const router = useRouter()
  const [name, setName] = useState('');
  const [ability, setAbility] = useState('');
  const [errorName, setErrorName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [errorAbility, setErrorAbility] = useState('');

  const validate = () => {
    if(!name){
      setErrorName('name should not be empty')
    }
    if(!ability){
      setErrorAbility('ability should not be empty')
    }

    return !!name && !!ability
  }
  
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAbility = (event) => {
    setAbility(event.target.value);
  };

  
  const handleSubmit = () =>{
    if(!validate()){
      return
    }
    setErrorName('')
    setErrorAbility('')
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setName('')
      setAbility('')
      setSubmited(true)
      setTimeout(() => {setSubmited(false)}, 2000)
    }, 2000);
  }

  const handleCancel = () =>(router.push(`/`, undefined, { shallow: true }))

  const props = {
    name,
    ability,
    errorName,
    submitting,
    submited,
    errorAbility,
    handleChangeName, 
    handleChangeAbility,
    handleSubmit,
    handleCancel
  }
  return(<Presentational {...props} />
  );
}

export { AddPokemon as default }