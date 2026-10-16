import RecipeCard from "./RecipeCard";

const recipes = [
    {
        id: 1, 
        title: "Avocado Toast", 
        description: "Wholegrain toast topped with avocado and tomato.",
        image: "/images/avocado-tomato-wholegrain-toast-large.webp",
    },

    {
        id: 2,
        title: "Banana Pancakes", 
        description: "Simple pancakes made with banana and wholesome ingredients.",
        image: "/images/banana-pancakes-large.webp",
    },

    {
        id: 3,
        title: "Greek Yogurt",
        description: "Creamy Greek yogurt served with fresh and healthy toppings.",
        image: "/images/greek-yogurt-large.webp",
    },
];

export default function RecipeSection() {
    return (
        <section id="recipes" className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold">
                        Explore our simple, healthy recipes.
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Discover nutritious recipes for every day.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            image={recipe.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}