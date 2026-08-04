
import LoginForm from "@/components/client/form/login.form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce | Login",
  description: "Ecommerce Login page",
}; 

const LoginPage = () => {
  return (
    <main className="bg-violet-100 p-[20px]">
        <section>
          {/* page heading */}
          <div className="border-2 border-red-500 pt-5 px-2 rounded-lg max-w">
            <h1 className="text-red-500 text-[40px]">Login</h1>
            <p>Welocme Back</p>
          </div>

          {/* login form */}
          <LoginForm/>
        </section>
        {/* <div className=" h-100 border flex flex-row gap-10 justify-evenly items-center">
          <div className="h-[200px] w-[200px] bg-amber-200 rounded-full"></div>
          <div className="h-[200px] w-[200px] bg-amber-800"></div>
          <div className="h-[200px] w-[200px] bg-blue-500"></div>
        </div> */}
        {/* <div className=" h-100 border flex flex-row gap-10 justify-around">
          <div className="h-[200px] w-[200px] bg-amber-200"></div>
          <div className="h-[200px] w-[200px] bg-amber-800"></div>
          <div className="h-[200px] w-[200px] bg-blue-500"></div>
        </div> */}
    </main>
  )
}

export default LoginPage
