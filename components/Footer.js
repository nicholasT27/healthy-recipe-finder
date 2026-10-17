import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 md:px-8">
      <div className="mx-auto flex max-w-[1192px] flex-col-reverse items-center gap-6 pb-5 pt-8 text-center text-[16px] tracking-[-0.3px] md:flex-row md:justify-between md:py-10 md:text-left">
        <p>Made with ❤️ and 🥑</p>

        <div className="flex items-center gap-4">
          <Image src="/images/icon-instagram.svg" alt="Instagram" width={23} height={22} />
          <Image src="/images/icon-bluesky.svg" alt="Bluesky" width={26} height={22} />
          <Image src="/images/icon-tiktok.svg" alt="TikTok" width={20} height={22} />
        </div>
      </div>
    </footer>
  );
}