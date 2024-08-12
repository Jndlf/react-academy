import "./CustomButton.css"

interface CustomButtonProps {
    buttonText: string,
    onClick: () => void
}


export default function CustomButton(props: CustomButtonProps) {

    return <button onClick={props.onClick} className="button">{props.buttonText}</button>
}