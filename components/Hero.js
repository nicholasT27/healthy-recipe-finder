import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-7xl">
                
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Left: Content */}
                    <div>
                        <h1 className="text-3xl font-bold leading tight md:text-5xl lg:text-6xl">
                            Healthy meals, zero fuss
                        </h1>

                        <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
                            Discover simple, nutritious recipes that make healthy eating easy and enjoyable. 
                        </p>

                        <button className="mt-8 rounded-full bg-green-700 px-6 py-3 text-white transition-colors hover:bg-green-800">
                            Start exploring
                        </button>
                    </div>

                    {/* Right: Image */}
                    <div className="overflow-hidden rounded-3xl">
                        <Image
                            src="/images/banana-pancakes-large.webp"
                            alt="Healthy breakfast"
                            width={600}
                            height={500}
                            className="h-64 w-full object-cover md:h-96 lg:h-[450px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}