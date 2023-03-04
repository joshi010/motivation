import React, { useState} from "react";
import './form.css';


export default function Form(){
    const [formData, setFormData] = useState({
        "entry.119062118": "",
        "entry.1316435799": "",
    });

    const hanldeInputData = (input) => (e) => {
        const {value} = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [input]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdtszha0B5DB_KuMCUs9cuVitZyuPPRWmJF7RotHx45KgqkeA/formResponse?entry.119062118=${formData["entry.119062118"]}&entry.1316435799=${formData["entry.1316435799"]}`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }


    return(
        <div className="formcontact">
            <form className="take-action-form" onSubmit={handleSubmit} target="_self">
                <fieldset>
                    <label htmlFor="entry.119062118">E-mail:</label>
                    <input 
                        required
                        type="email"
                        name="entry.119062118"
                        onChange={hanldeInputData("entry.119062118")}
                        value={formData["entry.119062118"]}
                        autoComplete={false}
                          
                    />
                </fieldset>

                <fieldset id="messege">
                    <label htmlFor="entry.1316435799">Message:</label>
                    <textarea 
                        required
                        type="text"
                        name="entry.1316435799"
                        onChange={hanldeInputData("entry.1316435799")}
                        value={formData["entry.1316435799"]}
                        placeholder="Write the reason you're doing this. Ex. You're quitting smoking because you value your health and want to live a longer, happier life."
                        
                    />
                </fieldset>

                <button type="submit" className="link-button">Motivate Me</button>
            </form>
        </div>
    )
}