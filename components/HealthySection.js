import Image from "next/image";

export default function HealthySection() {
    return (
        <section id="about" className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    
                    {/* Left: Image */}
                    <div className="overflow-hidden rounded-3xl">
                        <Image
                            src="/images/image-about-beyond-the-plate-large.webp"
                            alt="Family preparing healthy food"
                            width={600}
                            height={400}
                            className="h-64 w-full object-cover md:h-96"
                        />
                    </div>

                    {/* Right: Content */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                            Healthy Eating
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                            Healthy eating made simple
                        </h2>

                        <p className="mt-6 text-base leading-7 text=gray-600 md:text-lg">
                            Eating healthy doesn't have to be complicated. Discover simple recipes and practical tips to make nutritious meals part of your everyday life.
                        </p>

                        <button className="mt-8 rounded-full bg-green-700 px-6 py-3 text-white transition-colors hover:bg-green-800">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}