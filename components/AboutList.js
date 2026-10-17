import Image from "next/image";

export default function AboutList({ title, items }) {
    return (
        <section className="px-4 md:px-8">
            <div className="mx-auto flex max-w-[1192px] flex-col gap-10 py-12 md:py-20 lg:flex-row lg:gap-16 lg:py-24">
                <h2 className="font-heading text-[40px] font-extrabold leading-[1.2] tracking-[-2px] md:text-[48px] lg:w-[376px] lg:shrink-0">
                    {title}
                </h2>

                <ul className="flex flex-1 flex-col gap-6 md:gap-8 lg:gap-12">
                    {items.map((item => (
                        <li key={item.title} className="flex items-start gap-5">
                            <Image src="/images/icon-bullet-point.svg" alt="" width={32} height={32} className="shrink-0" />

                            <div className="flex flex-col gap-3">
                                <h3 className="font-heading text-[24px] font-bold leading-[1.3] tracking-[-1px]">
                                    {item.title}
                                </h3>

                                <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-ink-soft">
                                    {item.text}
                                </p>
                            </div>
                        </li>
                    )))}
                </ul>
            </div>
        </section>
    )
}