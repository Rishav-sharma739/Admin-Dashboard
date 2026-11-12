import { Check, CircleX } from "lucide-react";

export const CommonToast = (
    {
        status,
        message,
        onClose,
    }
) => {





    return (
        <div className="toast-container">

            {status == true ? <Check /> : <CircleX />}
            <text className="toast-message">{message}</text>
            <div className="toast-close-button"
                onClick={onClose}>

            </div>


        </div>

    );
} 