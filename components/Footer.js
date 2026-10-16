export default function Footer() {
    return (
        <footer className="bg-green-900 px-6 py-12 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold">
                             Recipe Finder
                        </h2>

                        <p className="mt-4 text-sm text-green-100">
                            Making healthy eating simple, 
                            delicious, and accessible to everyone. 
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold">
                            Quick Links
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-green-100">
                            <a href="#home" className="hover:text-white">Home</a>
                            <a href="#about" className="hover:text-white">About</a>
                            <a href="#recipes" className="hover:text-white">Recipes</a>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-semibold">
                            Follow Us
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-green-700 pt-6 text-center">
                    © 2026 Recipe Finder. All rights reserved.
                </div>
            </div>
        </footer>
    )
}