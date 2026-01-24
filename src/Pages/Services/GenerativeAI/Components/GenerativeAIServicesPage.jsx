import { useState } from "react";
import GenerativeAIServiceHeader from "./GenerativeAIServiceHeader";
import GenerativeAIServicesList from "./GenerativeAIServicesList";
import GenerativeAIServiceDetails from "./GenerativeAIServiceDetails";
import services from "./GenerativeAIServicesMenu";

export default function GenerativeAIServicePage() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const selectedService =
    services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <div className="min-h-screen bg-[#060010] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <GenerativeAIServiceHeader />

        <div className="grid lg:grid-cols-[400px,1fr] gap-6 lg:gap-8 h-[600px]">

          <GenerativeAIServicesList
            services={services}
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />

          <GenerativeAIServiceDetails selectedService={selectedService} />
        </div>
      </div>
    </div>
  );
}