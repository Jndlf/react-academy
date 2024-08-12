import './CustomButton.css';

interface CustomButtonProps {
    buttonText: string,
    myOnClick: () => void
}


export default function CustomButton(props: CustomButtonProps) {

    return <button onClick={props.myOnClick} className='button'>{props.buttonText}</button>
}