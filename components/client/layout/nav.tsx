"use client";
import { IoMdHeart } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthSection from "@/components/common/authsection";
import { useAuth } from "@/hooks/auth.hook";


const NavLinks = [
    {
        route: '/',
        label: 'Home'
    },
    {
        route: '/about-us',
        label: 'About Us'
    },
    {
        route: '/contact-us',
        label: 'Contact Us'
    },
    {
        route: '/products',
        label: 'Products'
    }

]

const Nav = () => {
    const {logout, login} = useAuth;

    const router = useRouter();
    const user = {
        src: "",
        alt: "",
    };
    return (
        <nav className="flex flex-none justify-between items-center bg-[#0F172A] px-30 h-18">
            <div>
                <Image
                    onClick={() => router.push("/")}
                    src="/logo.png"
                    alt=""
                    height={500}
                    width={500}
                    className="w-15 cursor-pointer"
                />
            </div>

            <div className="flex gap-7 h-fit">
                {
                    NavLinks.map((link) => {
                        return <NavItem key={link.route} item={link} />
                    })
                }
            </div>
            <div className="flex items-center gap-4">
                <IoMdHeart className="text-2xl cursor-pointer text-primary" />
                <CiShoppingCart
                    onClick={() => {
                        router.push("/cart");
                    }}
                    className="text-2xl cursor-pointer text-white"
                />
                {/* <Image
                    src={user.src || "/profile.png"}
                    alt="user profile"
                    height={500}
                    width={500}
                    onClick={() => router.push("/profile")}
                    className="w-10 cursor-pointer text-primary "

                /> */}
                <AuthSection/>
            </div>
        </nav>
    );
};

export default Nav;


const NavItem = ({ item: { route, label } }: { item: { route: string, label: string } }) => {

    const pathname = usePathname();
    // const activeTab = pathname.split("/")[1];
    return (
        <Link
            href={route}
            className={`min-w-30 text-center tracking-wider font-semibold text-primary  p-2 cursor-pointer ${pathname === route ? "border-b-2 border-primary  transition-colors  duration-300 text-white" : ""}`}
        >
            {label}
        </Link>
    )
}
