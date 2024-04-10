import ServiceCard from "../components/ServiceCard"
import { services } from "../constants/Data"


const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((item , index) => (
        <ServiceCard key={index} {...item}/>
      ))}
    </section>
  )
}

export default Services
