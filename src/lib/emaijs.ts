import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace with your actual values from EmailJS dashboard
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_HERE';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
    name: string;
    email: string;
    phone: string;
    company: string;
    location: string;
    usp?: string;
    service?: string;
    message: string;
    service_type?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
    try {
        // Template parameters that match your EmailJS template variables
        const templateParams = {
            name: data.name,
            title: `${data.service_type || data.usp || 'General Inquiry'} - Contact Form`,
            message: `
Contact Details:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Location: ${data.location}
Service/Solution: ${data.service_type || data.usp || data.service || 'General Inquiry'}

Message:
${data.message}

---
Submitted at: ${new Date().toLocaleString()}
      `.trim(),
            time: new Date().toLocaleString(),
            email: data.email, // This will be used for Reply-To
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log('Email sent successfully:', response);
        return true;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
};