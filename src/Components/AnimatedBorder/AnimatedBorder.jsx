import React from "react";

/**
 * Animated gradient bottom bar using Tailwind animation (moveGradient)
 * Props:
 *  - width (string) css width e.g. "140px" or "10rem"
 *  - height (string) css height e.g. "4px"
 *  - colors (array) gradient colors
 *  - duration (string) e.g. "3s"
 */
const AnimatedBorder = ({
  width = "140px",
  height = "4px",
  colors = ["#D97706", "#F59E0B", "#FBBF24"],
  duration = "3s",
}) => {
  // build gradient, repeat first color at end for smooth cycle
  const gradient = `linear-gradient(90deg, ${colors.join(", ")}, ${colors[0]})`;

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{
        width,
        height,
        // The animation class is provided by tailwind (animate-moveGradient)
        background: gradient,
        // ensure large background so the gradient can move
        backgroundSize: "300%",
        // Duration override (tailwind keyframes + inline duration)
        animation: `moveGradient ${duration} linear infinite`,
        // fallback for browsers reading background-position initially
        backgroundPosition: "0% 50%",
      }}
      // keep animate-moveGradient class too so you get the tailwind keyframe name generated
      // (style.animation already sets it, but class is fine to keep)
      // note: If you prefer to rely solely on the class, remove style.animation and use animationDuration below via style
      // and ensure the className "animate-moveGradient" exists from tailwind config
      // className="rounded-sm animate-moveGradient"
    />
  );
};

export default AnimatedBorder;
