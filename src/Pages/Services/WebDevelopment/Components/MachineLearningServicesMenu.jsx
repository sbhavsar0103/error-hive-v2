import { Bot, FileText, Search, ScanText, FileCheck, Code } from "lucide-react";

const services = [
  {
    id: 1,
    title: "RAG-Based Knowledge Bot",
    description:
      "Our RAG-powered chatbot provides intelligent, context-aware responses by retrieving relevant information from your knowledge base. Perfect for customer support, internal documentation, and enterprise knowledge management systems.",
    icon: Bot,
  },
  {
    id: 2,
    title: "Dynamic Report Generation",
    description:
      "Automatically generate comprehensive reports from your data using AI. Transform raw information into actionable insights with customizable templates, visualizations, and natural language summaries that save hours of manual work.",
    icon: FileText,
  },
  {
    id: 3,
    title: "AI-Powered Search Assistance",
    description:
      "Enhance your search capabilities with semantic understanding and natural language processing. Our AI-powered search goes beyond keywords to understand user intent and deliver more accurate, contextual results.",
    icon: Search,
  },
  {
    id: 4,
    title: "Intelligent Document Processing (IDP) & OCR",
    description:
      "Our AI-powered OCR extracts and categorizes information from scanned documents and images. This solution is essential for finance, healthcare, and legal industries, reducing manual data entry and improving accuracy.",
    icon: ScanText,
  },
  {
    id: 5,
    title: "Automated Text Summarization",
    description:
      "Extract key insights from lengthy documents instantly. Our advanced summarization technology processes reports, articles, and research papers to deliver concise summaries while preserving critical information and context.",
    icon: FileCheck,
  },
  {
    id: 6,
    title: "AI-Driven Content & Code Generation",
    description:
      "Accelerate your content creation and development workflows with AI-generated text and code. From marketing copy to production-ready code snippets, our AI understands context and maintains your brand voice and coding standards.",
    icon: Code,
  },
];

export default services;
