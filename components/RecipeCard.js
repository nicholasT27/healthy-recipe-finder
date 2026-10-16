import Image from "next/image";

export default function RecipeCard({ title, description, image }) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            
            {/* Recipe Image */}
            <div className="overflow-hidden">
                <Image 
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Recipe Information */}
            <div className="p-6">
                <h3 className="text-xl font-semibold">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>
            </div>
            
        </div>
    )
}