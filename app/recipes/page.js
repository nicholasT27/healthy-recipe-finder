import RecipeBrowser from "@/components/RecipeBrowser";

export const metadata = { title: "Recipes - Healthy Recipe Finder" };

export default function Recipes() {
  return (
    <>
      <section className="px-4 py-12 md:px-8 md:pb-12 md:pt-16 lg:pb-20">
        <div className="mx-auto flex max-w-[1192px] flex-col gap-3 lg:items-center lg:text-center">
          <h1 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px]">
            Explore our simple, healthy recipes
          </h1>
          <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft lg:max-w-[724px]">
            Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.
          </p>
        </div>
      </section>

      <RecipeBrowser />
      <div className="h-px w-full bg-line" />
    </>
  );
}