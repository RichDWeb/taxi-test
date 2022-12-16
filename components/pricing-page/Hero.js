import Logo from "../ui/Logo";

export default function Hero() {
    return (
        <section className="bg-white w-full max-w-7xl mx-auto md:h-96 h-80 flex items-center justify-center">
            <div className="mx-4 flex flex-col md:items-center">
                <div className="flex items-center space-x-2 ">
                    <Logo color="#FFC000" />
                    <h1 className="text-4xl font-radioCanadaBold uppercase text-main-dark">Fixed Pricing</h1>
                </div>
                <p className="
                    font-radioCanadaRegular 
                    text-['#1B1B1B'] 
                    opacity-60 
                    md:text-center 
                    md:w-[600px] 
                    w-full 
                    md:px-4
                    mt-8
                    tracking-wide">
                        We have hundreds of fixed priced locations for those most used destrinations.  
                        All you have is enter the destination from the search box below and if results 
                        are found 
                </p>
            </div>
        </section>
    )
}