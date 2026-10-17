import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="px-4 pt-16 md:px-8 md:pt-20 lg:pt-0">
      <div className="relative mx-auto flex max-w-[1192px] flex-col items-center gap-8 overflow-hidden rounded-2xl bg-mist px-4 py-12 text-center md:gap-10 md:py-20 lg:py-24">
        <Image
          src="/images/pattern-fork.svg"
          alt=""
          width={315}
          height={391}
          className="absolute hidden h-auto md:-left-12 md:top-[182px] md:block md:w-[179px] lg:-left-[73px] lg:top-[23px] lg:w-[315px]"
        />
        <Image
          src="/images/pattern-knife.svg"
          alt=""
          width={339}
          height={339}
          className="absolute hidden h-auto md:-right-[21px] md:-top-[50px] md:block md:w-[172px] lg:-right-[70px] lg:top-6 lg:w-[339px]"
        />

        <div className="relative flex flex-col gap-3">
          <h2 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px] lg:tracking-[-1.44px]">
            Ready to cook smarter?
          </h2>
          <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>

        <Link
          href="/recipes"
          className="relative rounded-[10px] bg-ink px-6 py-4 font-heading text-[18px] font-bold text-white transition-colors hover:bg-ink-soft"
        >
          Browse recipes
        </Link>
      </div>
    </section>
  );
}