---
layout: page
title: Chatsplaining - Intelligent STEM Tutoring System
description: An AI tutor fine-tuned on Qwen3-0.6B-Base for EPFL-related STEM questions.
img: assets/img/publication_preview/chatsplaining.jpg
importance: 3
category: work
---

**Abstract**

Developed an AI tutor by fine-tuning **Qwen3-0.6B-Base** language model for EPFL-related STEM questions. Implemented four model variants: **supervised fine-tuning (SFT)**, **quantization** (W4A8/W8A8), **retrieval-augmented generation (RAG)**, and **direct preference optimization (DPO)**. Designed two-stage curriculum learning combining instruction-following with domain-specific MCQA fine-tuning. Built RAG system with custom-trained embeddings and FAISS vector store for EPFL course materials retrieval. Achieved significant performance improvements across multiple benchmarks (HellaSwag, MathQA, MedMCQA, MMLU, SciQ).

<a href="https://github.com/MarioRicoIbanez/ChatSplaining" target="_blank">View on GitHub</a>
