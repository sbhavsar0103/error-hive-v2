import AIBusinessServiceItem from "./AIBusinessServiceItem";

export default function AIBusinessServiceList({ services, hoveredId, setHoveredId }) {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <AIBusinessServiceItem
          key={service.id}
          service={service}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
  );
}