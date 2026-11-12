import '../component.css';

export const InputTextField = ({
    containerStyle,
    label,
    labelStyle,
    error,
    type,
    placeholder,
    inputFieldStyle,
    maxLength,
    ...rest




}) => {







    return (
        <div className='input-field-container' style={containerStyle}>

            <text
                className='input-field-label'
                style={labelStyle}
            >{label || "Input Field"}</text>

            <input
                className={`input-field ${error ? 'input-error' : ""}`}
                type={type || 'text'}
                placeholder={placeholder || "Enter the input"}


                style={inputFieldStyle}
                maxLength={maxLength || 50}
                {...rest}

            />

            {
                error && <text className='input-validation-error'>{error || ''}</text>
            }



        </div>
    )
}