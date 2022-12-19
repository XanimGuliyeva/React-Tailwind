export default function MobileApp() {
    return (
        <div className="bg-primary-brand-color flex flex-col md:flex-row justify-between items-center bg-mobile-app md:rounded-lg text-white">
            <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
                <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
                <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
                <nav className="mt-5 flex flex-wrap lg:flex-nowrap justify-center gap-2">
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://www.aps.edu/students-parents/images/downloadOnTheGooglePlayStoreBadge.png/download" style={{width:'180px', height:'60px'}} className="md:h-8 lg:h-auto" />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://legacynyplorg-live.s3.amazonaws.com/s3fs-public/apple-android-store-icons.png" style={{width:'180px', height:'40px',marginTop:'10px'}} className="md:h-8 lg:h-auto" />
                    </a>
                </nav>
            </div>
            <picture className="pt-6 hidden md:block md:self-end">
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
            </picture>
        </div>
    )
}