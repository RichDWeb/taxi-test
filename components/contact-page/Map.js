import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export const Map = () => {

    console.log("PROCESS: ", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const center = useMemo(() => ({ lat:51.684064619030394, lng: -4.26138937064728 }), [])

    if(!isLoaded) return <div>Loading...</div>



    return (
        <section className="h-[633px] w-full relative">
            <GoogleMap 
                zoom={16} 
                center={center} 
                mapContainerClassName="w-full h-full">

                <Marker position={center}/>

            </GoogleMap>
        </section>
    )
}