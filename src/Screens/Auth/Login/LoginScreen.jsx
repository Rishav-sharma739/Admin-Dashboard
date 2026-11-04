import './LoginScreen.css';
import { HeaderText as Header, InputTextField as InputField, CommonButton as Button } from '../../../Components';




//----------------Component-------------------

export const LoginScreen = () => {








    //---------------------UI-----------------
    return (
        <div className="login-page">
            <div className='login-container'>

                {/* header1 */}
                <Header />

                {/* Header2 */}
                {/* <Header /> */}

                {/* inputfield1 */}
                <InputField />

                {/* inputfield2 */}
                <InputField />

                {/* button */}
                <Button />
            </div>
        </div>
    )
}