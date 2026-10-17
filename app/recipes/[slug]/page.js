import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  return { title: recipe ? `${recipe.title} - Healthy Recipe Finder` : "Recipe not found" };
}

const mins = (n) => `${n} ${n > 1 ? "mins" : "min"}`;

function Meta({ icon, width, label }) {
  return (
    <li className="flex items-center gap-2">
      <Image src={icon} alt="" width={width} height={20} />
      {label}
    </li>
  );
}

function ListSection({ title, items }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-heading text-[24px] font-bold leading-[1.3] tracking-[-1px]">{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft"
          >
            <Image
              src="/images/icon-bullet-point.svg"
              alt=""
              width={24}
              height={24}
              className="mt-[3px] shrink-0"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  const { title, description, image, servings, prep, cook, ingredients, instructions } = recipe;
  const more = recipes.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="px-4 pb-12 pt-12 md:px-8 lg:pb-16">
        <div className="mx-auto flex max-w-[1192px] flex-col gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[18px] leading-[1.5] tracking-[-0.3px]"
          >
            <Link href="/recipes" className="text-ink-soft hover:underline">
              Recipes
            </Link>
            <span aria-hidden="true" className="text-ink-soft">/</span>
            <span aria-current="page" className="truncate font-semibold">{title}</span>
          </nav>

          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl lg:w-[580px] lg:shrink-0">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1192px) 580px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-5 lg:w-[572px]">
              <h1 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px]">
                {title}
              </h1>
              <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">{description}</p>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[18px] leading-[1.5] tracking-[-0.3px]">
                <Meta icon="/images/icon-servings.svg" width={20} label={`Servings: ${servings}`} />
                <Meta icon="/images/icon-prep-time.svg" width={21} label={`Prep: ${mins(prep)}`} />
                <Meta icon="/images/icon-cook-time.svg" width={20} label={`Cook: ${mins(cook)}`} />
              </ul>

              <ListSection title="Ingredients:" items={ingredients} />
              <ListSection title="Instructions:" items={instructions} />
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-line" />

      <section className="px-4 pb-12 pt-12 md:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-[1192px] flex-col gap-6">
          <h2 className="font-heading text-[32px] font-bold leading-[1.3] tracking-[-1px]">
            More recipes
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {more.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-line" />
    </>
  );
}