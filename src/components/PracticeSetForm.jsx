
import '../index.css'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const PracticeSetForm = () => {

    const schema = Yup.object().shape({
        firstName: Yup.string().required('enter name'),
        middleName: Yup.string().required(),
        lastName: Yup.string().required(),
        ssn: Yup.string().required(),
        mobile: Yup.string().required('enter number'),
        email: Yup.string().required('email is required').email('enter valid email'),
        dob: Yup.string().required('DOB is required'),
        designation: Yup.string().required(),
        address: Yup.string().required(),
        town: Yup.string().required(),
        state: Yup.string().required(),
        zipCode: Yup.string().required()
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data)=> {
        alert(data)
    }

  return (
    <div className='create_container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Create User</h2>

                <div className='form_row_box'>
                    <div className="form-row">
                        <label htmlFor="firstname">Firstname:</label>
                        <input type="text" id="firstname" name="firstname"{...register('firstName')}/>
                        <p>{errors.firstName?.message}</p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="middlename">Middle Name:</label>
                        <input type="text" id="middlename" name="middlename" {...register('middleName')}/>
                        <p>{errors.middleName?.message}</p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" {...register('lastName')}/>
                        <p>{errors.lastName?.message}</p>
                    </div>
                </div>
                <div className='form_row_box'>
                    <div className="form-row">
                        <label htmlFor="firstname">SSN:</label>
                        <input type="text" id="ssn" name="ssn" {...register('ssn')}/>
                        <p>{errors.ssn?.message}</p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="text" id="mobile" name="mobile" {...register('mobile')}/>
                        <p>{errors.mobile?.message}</p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email"  {...register('email')}/>
                        <p>{errors.email?.message}</p>
                    </div>
                </div>

                <div className='form_row_box'>
                    Gender
                    <div className="form-row radio_box">
                        <div>
                            <input type="radio" id="male" name="male" value="male"  />
                            <label htmlFor="male">Male</label>
                        </div>

                        <div>
                            <input type="radio" id="female" name="male" value="female"  />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <p>{errors.genderType?.message}</p>

                    <div className="form-row">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="text" id="dob" name="dob" {...register('dob')}/>
                        <p>{errors.dob?.message}</p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" id="designation" name="designation"  {...register('designation')}/>
                        <p>{errors.designation?.message}</p>
                    </div>
                </div>

                <div className='form_row_box'>
                    <div className="form-row address">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" {...register('address')}/>
                        <p>{errors.address?.message}</p>
                    </div>
                </div>

                <div className='form_row_box'>
                    <div className="form-row">
                        <label htmlFor="town">Town:</label>
                        <input type="text" id="town" name="town" {...register('town')}/>
                        <p>{errors.town?.message}</p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" {...register('state')}/>
                        <p>{errors.state?.message}</p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="zipcode">ZipCode:</label>
                        <input type="text" id="zipcode" name="zipcode" {...register('zipCode')}/>
                        <p>{errors.zipCode?.message}</p>
                    </div>
                </div>

                <div className='buttons'>
                    <button type='submit'>Save</button>
                </div>

            </form>
        </div>
  )
}

export default PracticeSetForm