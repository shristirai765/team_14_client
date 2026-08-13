import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (

        <section className="relative min-h-screen" >


            {/* Background Image  */}
            <Image
                src="/off.jpg"
                alt="Glowora beauty products"
                fill
                className="object-cover object-center"

            />

            {/* Navbar + Hero content */}
            <div className="relative z-1">
                <div className="flex min-h-150 items-center px-10">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-semibold font-serif leading-tight">
                            EVERY DEVICE & TECH <br />
                            <span className="text-primary-light">PLUS</span> BEAUTY PRODUCTS & VEHICLES
                        </h1>

                        <p className="mt-5 max-w-md text-text-secondary">
                            Discover appliances, laptops for you.
                        </p>

                        <Link
                            href="/products"
                            className="mt-20 inline-block rounded-full bg-primary px-7 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:opacity-90"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero