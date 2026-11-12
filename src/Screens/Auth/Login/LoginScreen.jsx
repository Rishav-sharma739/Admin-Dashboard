import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../../Utils/validationSchema.js';
import './LoginScreen.css';
import { HeaderText as Header, InputTextField as InputField, CommonButton as Button } from '../../../Components';







//----------------Component-------------------

export const LoginScreen = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })


    const onSubmit = (data) => {
        console.log("Form data : ", data);

        alert(`Logged in as : ${data.email} and ${data.password}`);
    }






    //---------------------UI-----------------
    return (
        <div className="login-page">
            <div className='login-container'>

                {/* header1 */}
                <Header
                    title={'ADMINISTRATOR ACCESS'}
                    textStyle={{
                        color: '#06402A',
                        fontSize: '10px',
                        fontWeight: '700'




                    }}

                />

                {/* Header2 */}
                <Header
                    containerStyle={{
                        marginTop: '10px',
                    }}
                    title={'Administrator Sign In'}
                    textStyle={{
                        color: 'black',
                        fontSize: '19px',
                        fontWeight: '900'




                    }}
                />

                {/* inputfield1 */}
                <InputField
                    containerStyle={{
                        marginTop: '17px',
                    }}
                    inputFieldStyle={{
                        paddingTop: '7px',
                        paddingBottom: '7px'
                    }}
                    label='Email Address'
                    error={errors.email?.message}
                    {...register('email')}
                />


                {/* <InputField /> */}
                <InputField
                    containerStyle={{
                        marginTop: '17px',
                    }}
                    inputFieldStyle={{
                        paddingTop: '7px',
                        paddingBottom: '7px'
                    }}
                    label='Password'
                    error={errors.password?.message}
                    {...register('password')}
                />

                {/* button */}
                <Button
                    containerStyle={{
                        marginTop: '18px'
                    }}
                    label='Sign In'

                    onClick={handleSubmit(onSubmit)}

                />
            </div>
        </div>
    )
}