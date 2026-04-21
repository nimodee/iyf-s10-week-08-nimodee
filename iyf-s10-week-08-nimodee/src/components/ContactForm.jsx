import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />

                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                />

                <button type="submit">Send</button>
            </form>

            <div>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Message: {formData.message}</p>
            </div>
        </div>
    );
}

export default ContactForm;