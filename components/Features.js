import Image from "next/image";

const features = [
  {
    icon: "icon-whole-food-recipes.svg",
    width: 24,
    height: 34,
    title: "Whole-food recipes",
    text: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    icon: "icon-minimum-fuss.svg",
    width: 40,
    height: 42,
    title: "Minimum fuss",
    text: "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    icon: "icon-search-in-seconds.svg",
    width: 40,
    height: 40,
    title: "Search in seconds",
    text: "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

export default function Features() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-[1192px] pb-0 pt-16 md:pb-20 md:pt-20 lg:pb-24 lg:pt-0">
        <h2 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px] lg:text-center">
          What you’ll get
        </h2>

        <div className="mt-8 flex flex-col gap-6 md:mt-12 md:gap-8 lg:grid lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-5 md:gap-6">
              <div className="grid size-[60px] place-items-center rounded-xl border border-mist bg-white shadow-[0_1px_0_#e9ede8]">
                <Image
                    src={`/images/${feature.icon}`}
                    alt=""
                    width={feature.width}
                    height={feature.height}
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-heading text-[32px] font-bold leading-[1.3] tracking-[-1px]">
                  {feature.title}
                </h3>
                <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden h-px max-w-[1192px] bg-line md:block" />
    </section>
  );
}