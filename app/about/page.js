import Image from "next/image";
import AboutList from "@/components/AboutList";
import CallToAction from "@/components/CallToAction";

export const metadata = { title: "About - Healthy Recipe Finder" };

const whyWeExist = [
  {
    title: "Cut through the noise.",
    text: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
  },
  {
    title: "Empower home kitchens.",
    text: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
  },
  {
    title: "Make healthy look good.",
    text: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
  },
];

const philosophy = [
  {
    title: "Whole ingredients first.",
    text: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
  },
  {
    title: "Flavor without compromise.",
    text: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
  },
  {
    title: "Respect for time.",
    text: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
  },
  {
    title: "Sustainable choices.",
    text: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
  },
];

const divider = <div className="h-px w-full bg-line" />;

export default function About() {
    return (
        <>
            {/* Our mission */}
            <section className="px-4 md:px-8">
                <div className="mx-auto flex max-w-[1192px] flex-col gap-10 pb-16 pt-12 md:gap-16 md:pb-20 md:pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
                    <div className="flex flex-col items-start gap-6 lg:w-[510px] lg:shrink-0">
                        <span className="rounded-md bg-orange px-1.5 py-0.5 font-heading text-[20px] font-bold leading-[1.4] tracking-[-0.5px]">
                            Our mission
                        </span>
                        <h1 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px]">
                            Help more people cook nourishing meals, more often. 
                        </h1>
                        <div className="flex flex-col gap-4 text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">
                            <p>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
                            <p>We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
                        </div>
                    </div>

                    <div className="relative h-[333px] w-full md:h-[683px] lg:h-[600px] lg:w-[618px] lg:shrink-0">
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/image-about-our-mission-large.webp"
                                alt="Woman cutting carrots in a bright kitchen"
                                fill
                                sizes="(min-width: 1024px) 618px, 100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <Image 
                            src="/images/pattern-squiggle-2.svg"
                            alt=""
                            width={201}
                            height={144}
                            className="pointer-events-none absolute bottom-[110px] right-2 hidden h-auto w-[140px] md:block"
                        />
                    </div>
                </div>
            </section>    

            {divider}
            <AboutList title="Why we exist" items={whyWeExist} />
            {divider}
            <AboutList title="Our food philosophy" items={philosophy} />
            {divider}

            {/* Beyond the plate */}
            <section className="px-4 md:px-8">
                <div className="mx-auto flex max-w-[1192px] flex-col gap-8 pb-0 pt-12 md:gap-10 md:pt-20 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:py-24">
                    <div className="flex flex-col gap-5 lg:w-[376px] lg:shrink-0">
                        <h2 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px]">
                            Beyond the plate
                        </h2>
                        <div className="flex flex-col gap-3 text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">
                            <p>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                            <ul className="ms-[30px] list-disc">
                                <li>Encourage family dinners and social cooking.</li>
                                <li>Reduce reliance on single-use packaging and delivery waste.</li>
                                <li>Spark curiosity about seasonal produce and local agriculture.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-[184px] w-full overflow-hidden rounded-xl md:h-[378px] lg:h-[400px] lg:w-[744px] lg:shrink-0">
                        <Image
                            src="/images/image-about-beyond-the-plate-large.webp"
                            alt="Family having fun preparing food in the kitchen"
                            fill
                            sizes="(min-width: 1024px) 744px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section> 

            <CallToAction />   
        </>
    )
}