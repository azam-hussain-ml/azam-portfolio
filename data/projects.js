// =============================================================
//  YOUR PROJECTS  —  edit this file to add / remove / reorder.
//  This is the ONLY file you touch to manage projects.
//
//  For each project:
//   - image:  put a screenshot in /public/projects/ and reference it
//             like "/projects/visionvoice.png"  (leave "" for a placeholder)
//   - category: "GenAI" or "ML"  (used by the filter buttons)
//   - metric: a real number if you have one — recruiters love proof
//   - live / github: paste your URLs. Leave "" to hide that button.
// =============================================================

export const projects = [
  {
    title: "RAG Knowledge Management System",
    category: "GenAI",
    image: "/projects/rag-kms.svg", // e.g. "/projects/rag-kms.png"
    description:
      "Answers questions from a private document set and returns the exact source passage behind every response — retrieval with full traceability.",
    metric: "Source-cited answers",
    stack: ["LangChain", "ChromaDB", "GPT-3.5-Turbo", "Flask"],
    live: "",
    github: "https://github.com/azam-hussain-ml",
  },
  {
    title: "VisionVoice AI",
    category: "GenAI",
    image: "/projects/visionvoice.svg",
    description:
      "A multimodal assistant that listens, sees, speaks, and generates — transcription, reasoning, text-to-speech, and image generation in one pipeline.",
    metric: "4 modalities, 1 pipeline",
    stack: ["Whisper", "GPT-4o-mini", "TTS", "gpt-image-1", "Streamlit"],
    live: "",
    github: "https://github.com/azam-hussain-ml",
  },
  {
    title: "Generative AI Job Recommender",
    category: "GenAI",
    image: "/projects/job-recommender.svg",
    description:
      "Scrapes live job listings and uses LLMs to match and rank roles against a candidate profile — an end-to-end applied GenAI product.",
    metric: "Live scraping + LLM ranking",
    stack: ["Apify", "OpenAI", "Gemini", "Streamlit"],
    live: "",
    github: "https://github.com/azam-hussain-ml",
  },
  {
    title: "Medical Chatbot",
    category: "GenAI",
    image: "/projects/medical-chatbot.svg",
    description:
      "A domain-focused conversational assistant for medical queries, shaped by 8 years of healthcare data experience — with careful guardrails.",
    metric: "Healthcare-grounded",
    stack: ["LLM", "RAG", "Python"],
    live: "",
    github: "https://github.com/azam-hussain-ml",
  },
  {
    title: "Sentiment Analysis",
    category: "ML",
    image: "/projects/sentiment.svg",
    description:
      "Text classification model that labels sentiment across a real dataset, tuned for balanced performance across classes.",
    metric: "87% F1 score",
    stack: ["TensorFlow", "Keras", "Scikit-learn"],
    live: "",
    github: "https://github.com/azam-hussain-ml",
  },
  {
    title: "Credit Card Fraud Detection",
    category: "ML",
    image: "/projects/fraud.svg",
    description:
      "Detects fraudulent transactions on a heavily imbalanced dataset, optimised to keep false positives low.",
    metric: "95% precision",
    stack: ["Scikit-learn", "Pandas", "NumPy"],
    live: "",
    github: "https://github.com/azam-hussain-ml",
  },
];
