import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const useContactForm = () => {

    const [loading, setLoading] = useState(false);

    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },

        validationSchema: Yup.object({

            name: Yup.string()
                .min(3, "Minimum 3 characters")
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),

            subject: Yup.string()
                .required("Subject is required"),

            message: Yup.string()
                .min(10, "Minimum 10 characters")
                .required("Message is required")

        }),

        onSubmit: async (values, { resetForm }) => {

            try {

                setLoading(true);

                await emailjs.send(

                    import.meta.env.VITE_EMAILJS_SERVICE_ID,

                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

                    {
                        from_name: values.name,
                        from_email: values.email,
                        subject: values.subject,
                        message: values.message
                    },

                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY

                );

                toast.success("Message sent successfully 🚀");

                resetForm();

            }
            catch {

                toast.error("Failed to send message");

            }
            finally {

                setLoading(false);

            }

        }

    });

    return {

        formik,

        loading

    };

}

export default useContactForm;