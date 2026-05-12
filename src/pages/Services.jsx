import ServicesHero from "../components/services/ServicesHero";
import ServiceList from "../components/services/ServiceList";
import ServiceDetail from "../components/services/ServiceDetail";
import ServiceFAQ from "../components/services/ServiceFAQ";
import CTASection from "../components/home/CTASection";

export default function Services() {
 return (
  <>
   <ServicesHero />
   <ServiceList />
   <ServiceDetail />
   <ServiceFAQ />
   <CTASection />
  </>
 );
}