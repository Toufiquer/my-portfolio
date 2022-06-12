import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import img from "./img.png";
const Contact = () => {
    // Use Form for design and validate
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = e => {
        const contact = e;
        fetch("https://quiet-wave-28723.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ contact }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    toast.success("You message was send.");
                    reset();
                } else {
                    toast.error("Please try again.");
                }
            });
    };

    return (
        <>
            <div>
                <div className="container mx-auto min-h-screen">
                    <div
                        className="my-6 py-6  min-h-screen"
                        style={{ background: `url(${img})` }}
                    >
                        <div className="text-center py-6">
                            <div className="text-2xl font-bold">Contact</div>
                        </div>
                        <form
                            className="flex flex-col w-full lg:w-2/4 mx-auto gap-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <>
                                {/* Input Name */}
                                <input
                                    type="text"
                                    autoComplete="name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required.",
                                        },
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: "Provide a valid Name.",
                                        },
                                    })}
                                    placeholder="Your Name"
                                    className="input input-bordered input-accent w-full"
                                />
                                {errors.name?.type === "required" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.name.message}{" "}
                                    </span>
                                )}
                                {errors.name?.type === "pattern" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.name.message}{" "}
                                    </span>
                                )}
                                {/* --- --- --- */}
                                {/* Input Email */}
                                <input
                                    autoComplete="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required.",
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid Email.",
                                        },
                                    })}
                                    placeholder="Your Email"
                                    className="input input-bordered input-accent w-full"
                                />
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.email.message}{" "}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-lg text-red-500">
                                        {errors.email.message}{" "}
                                    </span>
                                )}
                                {/* --- --- --- */}
                                {/* Input Name */}
                                <textarea
                                    type="textarea"
                                    autoComplete="textarea"
                                    {...register("textarea", {
                                        required: {
                                            value: true,
                                            message: "Message is Required.",
                                        },
                                    })}
                                    placeholder="Your Message"
                                    className="input input-bordered input-accent w-full"
                                />
                                {/* --- --- --- */}
                            </>
                            <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary w-1/2 mx-auto"
                            />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
