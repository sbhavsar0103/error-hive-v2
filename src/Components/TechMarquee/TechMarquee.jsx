import React from "react";
import ReactSVG from "../../Assets/SVG/React.svg";
import PythonSVG from "../../Assets/SVG/Python.svg";
import JSSVG from "../../Assets/SVG/JS.svg";
import TSSVG from "../../Assets/SVG/TS.svg";
import NodeJsSVG from "../../Assets/SVG/NodeJs.svg";
import TensorFlowSVG from "../../Assets/SVG/TensorFlow.svg";
import PyTorchSVG from "../../Assets/SVG/PyTorch.svg";
import DockerSVG from "../../Assets/SVG/Docker.svg";
import KubernetesSVG from "../../Assets/SVG/Kubernetes.svg";
import AWSSVG from "../../Assets/SVG/AWS.svg";
import AzureSVG from "../../Assets/SVG/Azure.svg";
import MongoDBSVG from "../../Assets/SVG/MongoDB.svg";
import PostgresSQLSVG from "../../Assets/SVG/PostgresSQL.svg";
import GraphQLSVG from "../../Assets/SVG/GraphQL.svg";
import NextJsSVG from "../../Assets/SVG/Next.js.svg";
import VueJsSVG from "../../Assets/SVG/Vue.js.svg";

const TechMarquee = () => {
  const technologies = [
    { name: "React", img: ReactSVG },
    { name: "Python", img: PythonSVG },
    { name: "JavaScript", img: JSSVG },
    { name: "TypeScript", img: TSSVG },
    { name: "Node.js", img: NodeJsSVG },
    { name: "TensorFlow", img: TensorFlowSVG },
    { name: "PyTorch", img: PyTorchSVG },
    { name: "Docker", img: DockerSVG },
    { name: "Kubernetes", img: KubernetesSVG },
    { name: "AWS", img: AWSSVG },
    { name: "Azure", img: AzureSVG },
    { name: "MongoDB", img: MongoDBSVG },
    { name: "PostgreSQL", img: PostgresSQLSVG },
    { name: "GraphQL", img: GraphQLSVG },
    { name: "Next.js", img: NextJsSVG },
    { name: "Vue.js", img: VueJsSVG },
  ];

  const allTechs = [...technologies, ...technologies];

  return (
    <section className="bg-[#060010] border-y border-amber-500/20 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {allTechs.map((tech, index) => (
            <div
              key={index}
              className="tech-card inline-flex items-center justify-center mx-8 px-8 py-4 hover:border-amber-500 transition-all duration-300 group"
            >
              <div className="tech-icon">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .tech-icon {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tech-card {
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;