import fs from 'fs'
import path from 'path'
import Hero from "../../components/services-page/Hero"
import ServiceList from "../../components/services-page/ServicesList"

export default function ServicesPage({defaults, services}) {
    return (
        <>
            <Hero service={defaults} />
            <ServiceList data={services} />
        </>
    )
}

export async function getStaticProps() {

    const defaults = {
        "hero-image": '/images/services-page/patrick-tomasso-5hvn-2WW6rY-unsplash.jpg',
        title: 'All Services',
        slug: 'services'
    }

    const filepath = path.join(process.cwd(), 'data', 'services.json')
    const fileData = fs.readFileSync(filepath)
    const data = JSON.parse(fileData)

    return {
        props: {
            defaults,
            services: data.services
        }
    }
}