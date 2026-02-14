## **Procedural Integrity and the Geometry of Dialogue**

### **A Formal and Computational Theory of Legitimate Reasoning**

---

# **Part I — Foundations**

## **Chapter 1\. Introduction**

1.1 The Problem of Procedural Legitimacy

1.2 From Truth to Process: A Paradigm Shift

1.3 Research Questions

Primary question:

Can legitimacy of dialogue be formalized independently of semantic truth and predictive accuracy?

Secondary questions:

• What is the minimal ontology of a legitimate reasoning system?

• Can structural semantic continuity be evaluated deterministically?

• Can geometric diagnostics coexist with strict normative dominance?

• What are the formal limits of procedural reasoning?

1.4 Contributions

• Formal teleological model of admissible goals

• Algebraic definition of procedural integrity

• Deterministic structural semantic layer

• Geometric diagnostics of dialogue trajectories

• Institutional-grade layered architecture

1.5 Structure of the Dissertation

---

## **Chapter 2\. Intellectual Background**

2.1 Argumentation Theory

– Pragma-Dialectics (van Eemeren & Grootendorst)

– Commitment-based dialogue (Hamblin, Walton & Krabbe)

2.2 Formal Logic and Proof Theory

– Gentzen systems

– Process logics

2.3 Distributional Semantics

– Vector space models (Salton)

– LSA (Landauer & Dumais)

2.4 Geometric Deep Learning

– Manifold representations (Bronstein et al.)

2.5 Governance and Explainable AI

– Doshi-Velez & Kim

– EU AI governance principles

Conclusion:

No existing framework integrates teleology, procedural algebra, and geometric diagnostics into a unified deterministic model.

---

# **Part II — Formal Theory**

## **Chapter 3\. Ontology of Dialogue Systems**

Formal definition:

R \= ⟨A, E, S, G, P, O⟩

Definitions of:

• Environment E \= ⟨C, R, T⟩

• Goal space G

• Procedures P

• Outcome space O

Formal properties of state transitions:

δ : S × M → S

---

## **Chapter 4\. Teleology and Admissibility**

Definition:

τ : (E × S) → 2^G

Theorem 4.1 — Teleological Necessity

If τ(E,S) \= ∅, no legitimate reasoning exists.

Proof provided.

Theorem 4.2 — Environmental Dependence of Goals

Corollaries on dead-state detection.

---

## **Chapter 5\. Procedural Integrity**

Definition:

PI(p) \= 1 ⇔ O ⊆ O\_g

Axioms A1–A7 fully formalized.

Theorem 5.1 — Impossibility of Partial Legitimacy

Theorem 5.2 — Retroactive Legitimation Failure

Theorem 5.3 — Separation of Persuasion and Correctness

Full proofs.

---

# **Part III — Structural Semantics**

## **Chapter 6\. Deterministic Structural Continuity**

6.1 Lexical Continuity

J\_i \= |T\_Q ∩ T\_A| / |T\_Q ∪ T\_A|

6.2 Latent Structure via SVD

X \= UΣVᵀ

Reduced embedding:

v\_i ∈ ℝ^k

6.3 Latent Similarity

LSA\_i \= cos(v\_{i−1}, v\_i)

Theorem 6.1 — Deterministic Embedding Stability

Proof of reproducibility under fixed model\_id.

---

# **Part IV — Geometry of Dialogue**

## **Chapter 7\. Semantic Kinematics**

Velocity:

V\_i \= 1 − cos(v\_{i−1}, v\_i)

Acceleration:

A\_i \= V\_i − V\_{i−1}

Pressure vector:

P\_i \= v\_{i−1} − v\_{i−2}

Response vector:

R\_i \= v\_i − v\_{i−1}

Alignment:

α\_i \= cos(P\_i, R\_i)

Repulsion:

Rep\_i \= max(0, −α\_i)

Formal proposition on detection of evasive displacement.

---

## **Chapter 8\. Chronometric Physics**

Latency L\_i

Overlap O\_i

Duration D\_i

Silence detection:

L\_i \> τ₂

Theorem 8.1 — Chronometric Transferability

Proof sketch: percentile-based anomaly scales invariant across domains under identical turn-taking protocol.

---

# **Part V — Layered Architecture**

## **Chapter 9\. Dominance and Non-Interference**

Layer hierarchy:

L1 Normative Algebra

L2 Structural Semantics

L3 Geometric Diagnostics

Dominance theorem:

Higher layers cannot override legality of lower layers.

Formal proof of non-interference.

---

## **Chapter 10\. Determinism and Auditability**

Definition:

PRS(D, Π, μ) deterministic under fixed configuration.

SVD sign invariance analysis.

Tolerance-based equivalence proof.

Reproducibility theorem.

---

# **Part VI — Experimental Section**

## **Chapter 11\. Dataset Construction**

11.1 Court transcripts (public domain)

11.2 Parliamentary hearings

11.3 Call center data

11.4 LLM interaction logs

Justification of procedural relevance.

---

## **Chapter 12\. Empirical Validation**

12.1 Structural continuity tests

12.2 Synonym bridge test

12.3 Repulsion under pressure

12.4 Silence vs topic shift distinction

Statistical analysis of:

• false positive rate

• cross-domain stability

• threshold robustness

---

## **Chapter 13\. Cross-Domain Transfer**

Demonstration:

Physics scale invariant

Polarity layer variant

Formal confirmation of DETT (Dialogue Energy Transfer Theorem).

---

# **Part VII — Security and Adversarial Analysis**

## **Chapter 14\. Threat Model**

Formal attack definitions.

Cut-set analysis.

Minimum-cost compromise sets.

---

## **Chapter 15\. Robustness Evaluation**

Simulated adversarial dialogues.

Energy manipulation attempts.

Procedural bypass attempts.

Results.

---

# **Part VIII — Institutional and Philosophical Implications**

## **Chapter 16\. Governance Implications**

Binary legitimacy vs probabilistic AI.

Compatibility with regulatory regimes.

Institutional adoption constraints.

---

## **Chapter 17\. Limits of the Framework**

What PRS does not do:

• No truth adjudication

• No intent inference

• No deception detection

Formal boundary definition.

---

# **Part IX — Extensions and Future Work**

## **Chapter 18\. Persistent Homology of Dialogue**

## **Chapter 19\. Probabilistic Teleology**

## **Chapter 20\. Multi-Goal Systems**

---

# **Conclusion**

Summary of formal contributions.

Re-statement of central thesis:

Legitimacy is a structural property of goal-admissible procedures embedded in environment-constrained state transitions.

The dissertation closes the gap between argumentation theory, computational semantics, and AI governance by providing a layered deterministic architecture for procedural auditing.

---

# **Appendices**

A. Full Formal Axiom System

B. Proofs (extended versions)

C. Algorithmic Specifications

D. YAML Profile Contract

E. Reproducibility Protocol

F. Code Architecture Overview

