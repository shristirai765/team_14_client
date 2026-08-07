import RegisterForm from "@/components/client/form/register.form";
import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: "Ecommerce | Sign Up",
    description: "Ecommerce Sign up page",
};

const SignUpPage = () => {
    return (
        <main className='bg-white min-h-full flex justify-center items-center'>
            <section className='shadow-sm shadow-primary-shadow border border-primary min-h-100 min-w-130 px-8 py-8 rounded-md flex flex-col gap-5'>
                {/* page heading */}
                <div className='flex flex-col gap-1'>
                    <h1 className='text-3xl font-bold text-primary'>Create Account</h1>
                    <p className='text-lg'>Welcome</p>
                </div>

                {/* register form */}
                <RegisterForm />

                {/* link to signup page */}
                <div className='-mt-4'>

                    <p className='text-center text-[14px]'>
                        Already have an Account? <Link title='go to login page' className='text-primary italic  font-semibold' href={'/login'}>Sign In</Link>
                    </p>
                </div>
            </section>

        </main>
    )
}

export default SignUpPage
