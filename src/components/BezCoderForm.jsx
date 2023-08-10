import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const BezCoderForm = () => {

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required(),
        userName: Yup.string().required('UserName is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 cchareters'),
        email: Yup.string().required('email is rquired').email('invalid email'),
        Password: Yup.string().required('Password is required')
        .min(6, 'password must be atleast 6 charecters')
        .max(20, 'password must not exceed 20 charecters'),
        ConfirmPassword: Yup.string().required('confirm your password')
        .oneOf([Yup.ref('Password'), null], 'Confirm password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'accept terms is required')
      })
    
      const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
      } = useForm({
        resolver: yupResolver(validationSchema)
      })
    
      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      }

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullname"
            type="text"
            {...register('fullName')}
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullName?.message}</div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            {...register('userName')}
            className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.userName?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('Password')}
            className={`form-control ${errors.Password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.Password?.message}</div>
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            {...register('ConfirmPassword')}
            className={`form-control ${
              errors.ConfirmPassword ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">
            {errors.ConfirmPassword?.message}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${
              errors.acceptTerms ? 'is-invalid' : ''
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={reset}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default BezCoderForm