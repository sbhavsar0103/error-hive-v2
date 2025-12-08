import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function ParticleMorph() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles;
    const count = 12000;
    let currentState = "sphere";
    const morphText = "ABOUT US"; // FIXED TEXT 🔥🔥🔥

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000);

      containerRef.current.appendChild(renderer.domElement);

      camera.position.z = 25;

      createParticles();
      animate();
      setupScrollTrigger();
    }

    function createParticles() {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      function sphere(i) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;

        return {
          x: 8 * Math.cos(theta) * Math.sin(phi),
          y: 8 * Math.sin(theta) * Math.sin(phi),
          z: 8 * Math.cos(phi),
        };
      }

      for (let i = 0; i < count; i++) {
        const p = sphere(i);

        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;

        const color = new THREE.Color();
        const depth = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z) / 8;
        color.setHSL(0.5 + depth * 0.2, 0.7, 0.4 + depth * 0.3);

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.9,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    }

    function createTextPoints(text) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const fontSize = 150;

      ctx.font = `bold ${fontSize}px Arial`;
      const width = ctx.measureText(text).width;

      canvas.width = width + 40;
      canvas.height = fontSize + 40;

      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      const pts = [];
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i] > 128) {
          const x = (i / 4) % canvas.width;
          const y = Math.floor(i / 4 / canvas.width);

          if (Math.random() < 0.3) {
            pts.push({
              x: (x - canvas.width / 2) / 15,
              y: -(y - canvas.height / 2) / 15,
            });
          }
        }
      }

      return pts;
    }

    function morphToText() {
      const textPoints = createTextPoints(morphText);
      const pos = particles.geometry.attributes.position.array;
      const newPos = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        if (i < textPoints.length) {
          newPos[i * 3] = textPoints[i].x;
          newPos[i * 3 + 1] = textPoints[i].y;
          newPos[i * 3 + 2] = 0;
        } else {
          newPos[i * 3] = (Math.random() - 0.5) * 20;
          newPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
          newPos[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
      }

      for (let i = 0; i < pos.length; i += 3) {
        gsap.to(pos, {
          [i]: newPos[i],
          [i + 1]: newPos[i + 1],
          [i + 2]: newPos[i + 2],
          duration: 2,
          ease: "power3.inOut",
          onUpdate: () => (particles.geometry.attributes.position.needsUpdate = true),
        });
      }
    }

    function setupScrollTrigger() {
      window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        if (scroll > 200 && currentState === "sphere") {
          currentState = "text";
          morphToText();
        }
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      if (currentState === "sphere") {
        particles.rotation.y += 0.002;
      }
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    init();
  }, []);

  return (
    <div className="relative h-[300vh] w-full bg-black">
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full overflow-hidden"
      />
    </div>
  );
}