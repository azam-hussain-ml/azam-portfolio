// =============================================================
//  YOUR PROJECTS — edit this file to add / remove / reorder.
// =============================================================

export const projects = [
  {
    title: "RAG Knowledge Management System",
    category: "GenAI",
    image: "/projects/rag-kms.png",

    description:
      "Answers questions from a private document set and returns the exact source passage behind every response — retrieval with full traceability.",

    metric: "Source-cited answers",

    stack: [
      "LangChain",
      "ChromaDB",
      "GPT-3.5-Turbo",
      "Flask"
    ],

    live:
      "https://huggingface.co/spaces/azam8954/rag-knowledge-management-system",

    github:
      "https://github.com/azam-hussain-ml/RAG-Based-Knowledge-Management-System",
  },

  {
    title: "VisionVoice AI",
    category: "GenAI",
    image: "/projects/visionvoice.png",

    description:
      "A multimodal assistant that listens, sees, speaks, and generates — transcription, reasoning, text-to-speech, and image generation in one pipeline.",

    metric: "4 modalities, 1 pipeline",

    stack: [
      "Whisper",
      "GPT-4o-mini",
      "TTS",
      "gpt-image-1",
      "Streamlit"
    ],

    live:
      "https://visionvoice-ai.streamlit.app/",

    github:
      "https://github.com/azam-hussain-ml/VisionVoice-AI",
  },

  {
    title: "Generative AI Job Recommender",
    category: "GenAI",
    image: "/projects/job-recommender.png",

    description:
      "Scrapes live job listings and uses LLMs to match and rank roles against a candidate profile — an end-to-end applied GenAI product.",

    metric: "Live scraping + LLM ranking",

    stack: [
      "Apify",
      "OpenAI",
      "Gemini",
      "Streamlit"
    ],

    live:
      "https://azam-ai-job-recommender.streamlit.app/",

    github:
      "https://github.com/azam-hussain-ml/Generative-AI-Powered-Job-Recommender-System",
  },
];