import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import LabelInput from './../../Components/LabelInput'

import { doSetWord } from './../../Actions/Input'

import './InputForm.scss';

export function InputForm() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const word = useSelector(state => state.input.word);

  const onSubmit = data => {
    dispatch(doSetWord(data));
  };

  return (
    <div className="login-form">
      <div className="login-form_container">
        <div className="row">
            <div className="col-md-12">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <LabelInput 
                    label={'Enter Word'} 
                    type={'text'} 
                    name={'word'}   
                    register={register({
                      required: "You must specify a word"
                    })} 
                    errors={errors}
                  />
                </div>
                <div className="form-group">
                    <input id="btnLogIn" type="submit" name="submit" className="btn login-form_container--btn" value="Send" />
                    {word}
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;