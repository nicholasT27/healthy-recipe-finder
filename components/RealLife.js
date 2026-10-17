import Image from "next/image";

export default function RealLife() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto flex max-w-[1192px] flex-col gap-8 pt-16 md:gap-10 md:pt-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px] lg:tracking-[-1.44px]">
            Built for real life
          </h2>

          <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <strong className="bg-[linear-gradient(to_top,rgba(254,159,107,0.6)_30%,transparent_30%)] font-heading font-bold">
              30 minutes
            </strong>{" "}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>

          <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
          </p>
        </div>

        <div className="relative h-[243px] w-full overflow-hidden rounded-[10px] md:h-[499px] md:rounded-2xl lg:h-[450px]">
            <Image
                src="/images/image-home-real-life-large.webp"
                alt="Chopping greens on a wooden board"
                fill
                sizes="(min-width: 1024px) 572px, 100vw"
                className="object-cover"
            />
        </div>
      </div>
    </section>
  );
}