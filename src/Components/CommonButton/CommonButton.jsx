import '../component.css'

export const CommonButton = ({
    label,
    onClick,
    containerStyle,
    buttonStyle,
    buttonTextStyle,

}) => {

    return (
        <div className="custom-button-container"
            style={containerStyle}>

            <div className="custom-button"
                style={buttonStyle}
                onClick={onClick}>

                <text className="custom-button-text"
                    style={buttonTextStyle}>
                    {label || 'Custom Button'}
                </text>

            </div>

        </div>
    )


}