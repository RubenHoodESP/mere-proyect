import emailjs from "@emailjs/browser";

export const mail = (name: any, msg: any, form: any) => {

    emailjs.init("9Qg_Udq4cU__dPR3f");
    document.getElementById('contact-form')?.addEventListener('submit', function(event) {
        console.log("hola");
        event.preventDefault();
        emailjs.sendForm('service_caiqcec', 'contact-form', form)
            .then();
    });
}

