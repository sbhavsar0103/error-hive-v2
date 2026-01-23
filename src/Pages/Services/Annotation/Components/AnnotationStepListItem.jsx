import { Check } from "lucide-react";

export default function AnnotationStepListItem({ text }) {
  return (
    <li className="flex items-start gap-3 group/item">
      <div className="flex-shrink-0 mt-1">
        <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 group-hover/item:bg-amber-500/30 transition-colors duration-300">
          <Check className="w-3 h-3 text-amber-500" strokeWidth={3} />
        </div>
      </div>

      <span className="text-gray-300 text-sm leading-relaxed">
        {text}
      </span>
    </li>
  );
}
