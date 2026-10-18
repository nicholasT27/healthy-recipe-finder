"use client";
import { useState } from "react";
import Image from "next/image";
import FilterSelect from "./FilterSelect";
import RecipeCard from "./RecipeCard";
import { recipes } from "@/data/recipes";

export default function RecipeBrowser() {
  const [maxPrep, setMaxPrep] = useState(null);
  const [maxCook, setMaxCook] = useState(null);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = recipes.filter(
    (r) =>
      (maxPrep === null || r.prep <= maxPrep) &&
      (maxCook === null || r.cook <= maxCook) &&
      (q === "" || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q))
  );

  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-[1192px] pb-16 md:pb-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row">
            <FilterSelect
              label="Max Prep Time"
              name="prep"
              options={[0, 5, 10]}
              value={maxPrep}
              onChange={setMaxPrep}
            />
            <FilterSelect
              label="Max Cook Time"
              name="cook"
              options={[0, 5, 10, 15, 20]}
              value={maxCook}
              onChange={setMaxCook}
            />
          </div>

          <label className="flex w-full items-center gap-2 rounded-[10px] border border-line bg-white px-4 py-2.5 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ink md:w-[320px] lg:w-[310px]">
            <Image src="/images/icon-search.svg" alt="" width={20} height={21} />
            <input
              type="text"
              aria-label="Search recipes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or ingredient…"
              className="min-w-0 flex-1 bg-transparent text-[20px] leading-[1.35] tracking-[-0.3px] outline-none placeholder:text-ink-soft md:text-[16px] lg:text-[18px]"
            />
          </label>
        </div>

        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 md:gap-8 lg:mt-10 lg:grid-cols-3">
            {visible.map((recipe, i) => (
  <RecipeCard key={recipe.slug} recipe={recipe} priority={i < 3} />
))}
          </div>
        ) : (
          <p className="mt-10 text-center text-[20px] text-ink-soft">
            No recipes match your filters.
          </p>
        )}
      </div>
    </section>
  );
}