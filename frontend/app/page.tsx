import { LoginForm } from "@/components/forms/login-form";
import { RegisterFrom } from "@/components/forms/register-form";
import React from "react";

const Home = () => {
    return (
        <>
            <section className="w-[500px] h-fit border-[1px] p-10 rounded-md">
                <RegisterFrom />
            </section>
            <section className="w-[500px] h-fit border-[1px] p-10 rounded-md">
                <LoginForm />
            </section>
        </>
    );
};

export default Home;
