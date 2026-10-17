import Image from "next/image";
import Link from "next/link";

const mins = (n) => `${n} ${n > 1 ? "mins" : "min"}`;

function Meta({ icon, width, label }) {
  return (
    <li className="flex items-center gap-1.5">
      <Image src={icon} alt="" width={width} height={20} />
      {label}
    </li>
  );
}

export default function RecipeCard({ recipe, priority = false }) {
  const { slug, title, description, image, servings, prep, cook } = recipe;

  return (
    <article className="flex h-full flex-col gap-4 rounded-[10px] border border-line bg-white p-2">
      <div className="relative aspect-[327/300] overflow-hidden rounded-md md:aspect-[3/2] lg:aspect-[6/5]">
        <Image
  src={image}
  alt={title}
  fill
  priority={priority}
  sizes="(min-width: 1192px) 360px, (min-width: 768px) 688px, 100vw"
  className="object-cover"
/>
      </div>

      <div className="flex flex-col gap-3 px-2">
        <h3 className="truncate font-heading text-[20px] font-bold leading-[1.4] tracking-[-0.5px]">
          {title}
        </h3>
        <p className="text-[16px] leading-[1.5] tracking-[-0.3px] text-ink-soft">{description}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[16px] leading-[1.5] tracking-[-0.3px]">
          <Meta icon="/images/icon-servings.svg" width={20} label={`Servings: ${servings}`} />
          <Meta icon="/images/icon-prep-time.svg" width={21} label={`Prep: ${mins(prep)}`} />
          <Meta icon="/images/icon-cook-time.svg" width={20} label={`Cook: ${mins(cook)}`} />
        </ul>
      </div>

      <Link
        href={`/recipes/${slug}`}
        className="mt-auto rounded-[10px] bg-ink py-3 text-center font-heading text-[18px] font-bold leading-[1.4] text-white transition-colors hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        View Recipe
      </Link>
    </article>
  );
}