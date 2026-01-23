import { useState } from "react";
import WebDevelopmentServiceHeader from "./WebDevelopmentServiceHeader";
import WebDevelopmentServicesList from "./WebDevelopmentServicesList";
import WebDevelopmentServiceDetails from "./WebDevelopmentServiceDetails";
import services from "./MachineLearningServicesMenu";

export default function WebDevelopmentServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const selectedService =
    services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <div className="min-h-screen bg-[#060010] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <WebDevelopmentServiceHeader />

        <div className="grid lg:grid-cols-[400px,1fr] gap-6 lg:gap-8 h-[600px]">

          <WebDevelopmentServicesList
            services={services}
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />

          <WebDevelopmentServiceDetails selectedService={selectedService} />
        </div>
      </div>
    </div>
  );
}