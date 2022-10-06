import React from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({createNewUser}) => {

const {register,reset, handleSubmit}=useForm()
const submit =(data) =>{
  createNewUser(data)
}
  return (
    <form onSubmit={handleSubmit(submit)}>
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
        <button> Create</button>
    </form>
  )
}

export default FormUsers