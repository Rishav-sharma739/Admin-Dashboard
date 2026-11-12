import '../component.css'





export const HeaderText = ({
    title,
    containerStyle,
    textStyle,
}) => {


    return (
        <div
            className="header-text-container"
            style={containerStyle}>

            <text
                className="header-text"
                style={textStyle}>

                {title || ""}

            </text>


        </div>
    )
}