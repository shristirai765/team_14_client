
import LoginForm from "@/components/client/form/login.form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce | Login",
  description: "Ecommerce Login page",
}; 

const LoginPage = () => {
  // const handleSubmit = (e: any)=>{
  //   e.preventDefault();
  //   console.log("Form submitted successfullt.", e.target.value);

  // }
  return (

    <main className="bg-violet-50 min-h-full flex justify-center items-center">
      <section className="shadow-sm shadow-primary-hover border border-primary min-h-100 min-w-100 px-10 py-8 rounded-md flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-primary">Login</h1>
          <p className="text-base">Welcome Back</p>

        </div>
        {/* login form */}
        <LoginForm/>

        {/* link to signup page */}
        <div className="-mt-5">
          <Link href={'/forgot-password'}>
            <p className="text-center text-[16px] text-primary">forgot password</p>
          </Link>
          <p className="text-center text-[14px]">
            Don't have an account? <Link title="go to sign up page" className="text-primary italic font-semibold" href={'/sign-up'}> Sign Up</Link>
          </p>
        </div>
      </section>
    </main>
    // className="bg-violet-100 p-[20px]
    // <main>
    //     <section className="bg-cyan-800 w-fit h-[600px] flex flex-col m-auto mt-[100px] py-[50px] px-[70px] text-olive-100">
    //       {/* page heading */}
    //       {/* className="border-2 border-red-500 pt-5 px-2 rounded-lg max-w" */}
    //       <div className="flex flex-col items-center ">
    //         <h1 className="text-red-500 text-[40px] ">Login</h1>
    //         <p className="text-lg ">Welcome Back</p>
    //       </div>

    //       {/* login form */}
    //       <LoginForm/>
    //     </section>
    //     {/* <div className=" h-100 border flex flex-row gap-10 justify-evenly items-center">
    //       <div className="h-[200px] w-[200px] bg-amber-200 rounded-full"></div>
    //       <div className="h-[200px] w-[200px] bg-amber-800"></div>
    //       <div className="h-[200px] w-[200px] bg-blue-500"></div>
    //     </div> */}
    //     {/* <div className=" h-100 border flex flex-row gap-10 justify-around">
    //       <div className="h-[200px] w-[200px] bg-amber-200"></div>
    //       <div className="h-[200px] w-[200px] bg-amber-800"></div>
    //       <div className="h-[200px] w-[200px] bg-blue-500"></div>
    //     </div> */}
    // </main>
  )
}

export default LoginPage
