import Logo from "../ui/Logo";

export default function Hero() {
    return (
        <section className="bg-white w-full max-w-7xl mx-auto h-96 flex items-center justify-center">
            <div className="mx-4 flex flex-col items-center">
                <div className="flex tems-center space-x-2 ">
                    <Logo color="#FFC000" />
                    <h1 className="text-4xl font-radioCanadaBold uppercase text-main-dark">Fixed Pricing</h1>
                </div>
                <p className="
                    font-radioCanadaRegular 
                    text-['#1B1B1B'] 
                    opacity-60 
                    text-center 
                    md:w-1/2 
                    w-full 
                    md:px-4
                    mt-8
                    tracking-wide">We have hundreds of fixed priced locations for those most used destrinations.  All you have is enter the destination from the search box below and if results are found </p>
            </div>
        </section>
    )
}