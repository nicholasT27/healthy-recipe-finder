import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative isolate overflow-x-clip px-4 pt-12 md:px-8 lg:px-6 lg:pb-24 lg:pt-20">
                <Image 
                    src="/images/pattern-squiggle-1.svg"
                    alt=""
                    width={1440}
                    height={616}
                    className="pointer-events-none absolute left-1/2 top-[254px] -z-10 hidden max-w-none -translate-x-1/2 lg:block"
                />

                <div className="mx-auto flex max-w-[1192px] flex-col gap-10 lg:items-center lg:gap-20">
                    <div className="flex flex-col items-start gap-8 lg:items-center lg:gap-10">
                        <div className="flex max-w-[805px] flex-col items-start gap-4 lg:items-center lg:gap-3 lg:text-center">
                            <h1 className="font-heading text-[52px] font-extrabold leading-[1.1] tracking-[-2px] md:text-[64px] md:tracking-[-2.56px] lg:text-[72px] lg:tracking-[-2px]">
                                <span className="bg-[linear-gradient(to_top,rgba(254,159,107,0.4)_45%,transparent_45%)]">
                                    Healthy
                                </span>{" "}
                                meals, zero fuss
                            </h1>

                            <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft lg:max-w-[580px]">
                                Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.
                            </p>
                        </div>

                        <Link 
                            href="/recipes"
                            className="rounded-[10px] bg-ink px-8 py-4 font-heading text-[20px] font-bold leading-[1.4] tracking-[-0.5px] text-white transition-colors hover:bg-ink-soft">
                                Start exploring
                        </Link>
                    </div>

                    <div className="relative aspect-[343/200] w-full overflow-hidden rounded-[4px] shadow-[0_0_0_12px_white] md:aspect-[704/350] md:rounded-[7px] lg:aspect-[1192/530] lg:rounded-xl">
                        <Image
                            src="/images/image-home-hero-large.webp"
                            alt="Woman preparing a salad in a bright kitchen"
                            fill
                            sizes="(min-width: 1192px) 1192px, 100vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
    );
}