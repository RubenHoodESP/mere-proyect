import './Form.css'
import { useRef } from 'react';
import { mail } from '../../services/mail'
import emailjs from "@emailjs/browser";

export const Form = () => {

    const ref = useRef(null);
    const name = document.getElementById('floatingName');
    const message = document.getElementById('floatingMsg');

    const sendForm = () => {
        emailjs.init("9Qg_Udq4cU__dPR3f");
        document.getElementById('contact-form')?.addEventListener('submit', function(event) {
            console.log("hola");
            event.preventDefault();
            emailjs.sendForm('service_caiqcec', 'template_eis4ort', ref.current!)
                .then(() => console.log("enviado"));
        });
    } 

  return (
    <form ref={ref} id='contact-form'>
        <div className="form-floating mb-3">
            <input type="text" className='form-control' name='user_name' id='floatingName' placeholder='Nombre' required/>
            <label htmlFor="inputName" className='form-label'>Nombre</label>
        </div>
        <div className="form-floating mb-3">
            <input type="email" className='form-control' name='user_email' id='floatingEmail' placeholder='Nombre' required/>
            <label htmlFor="inputEmail" className='form-label'>Correo electrónico</label>
        </div>
        <div className="form-floating mb-3">
            <textarea className='form-control' name='message' id='floatingMsg' placeholder='Mensaje' required/>
            <label htmlFor="inputMsg" className='form-label'>Mensaje</label>
        </div>
        <div>
            <button className='btn btn-primary mb-3' type='submit' onClick={sendForm}>Enviar</button>
        </div>
    </form>
  )
}
