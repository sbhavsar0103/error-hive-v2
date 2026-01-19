import POCServiceItem from "./POCServiceItem";

export default function POCServiceList({ services, hoveredId, setHoveredId }) {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <POCServiceItem
          key={service.id}
          service={service}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
  );
}