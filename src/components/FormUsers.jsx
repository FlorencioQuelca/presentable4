import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
//aqui para renderizar una sola vez
const defaultValues={
  email:'',
  password:'',
  first_name:'',
  last_name:'',
  birthday:'',
}

const FormUsers = ({createNewUser,updateInfo,updateUserById,setUpdateInfo}) => {
  //console.log(updateInfo)
//useeffect primer renderizado y cuando cambia el arreglo de dependecias
  useEffect (()=>{  //evitar ciclos infonitos
    if(updateInfo){ 
      reset(updateInfo)
    }
  },[updateInfo])

const {register,reset, handleSubmit}=useForm()
const submit =(data) =>{
  if(updateInfo){
    //update
    updateUserById(updateInfo.id,data)
    setUpdateInfo()
  }else{
    //create
    createNewUser(data)
  }
  reset(defaultValues)
}
  return (
    <form onSubmit={handleSubmit(submit)}   >
        <h2> {updateInfo ? 'Edit User':'New User'}</h2>
        <div>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" {...register('email')} />
        </div>
        <div>
            <label htmlFor='password'>Pasword</label>
            <input type="password" id="password" {...register('password')}/>
        </div>
        <div>
            <label htmlFor='first_name'>First Name</label>
            <input type="text" id="first_name" {...register('first_name')}/>
        </div>
        <div>
            <label htmlFor='last_name'>Last Name</label>
            <input type="text" id="last_name" {...register('last_name')} />
        </div>
        <div>
            <label htmlFor='birthday'>BirthDay</label>
            <input type="date" id="birthday"  {...register('birthday')} />
        </div>
        <button > {updateInfo  ?'Update' :'Create' }</button>
    </form>
  )
}

export default FormUsers