import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, GraduationCap } from "lucide-react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const publications = [
  {
    title:
      "Yet Another Continuous-Time Fundamental Lemma: A Modulating Functions Approach with Applications to Electrical Motors",
    journal: "",
    year: "TBC",
    abstract:
      "We sample using modulating functions one sufficiently informative input-output trajectory of a linear time-invariant system. We show that such data can be used to represent every polynomial series representation of every input-output trajectory of the system.",
    tags: ["Modulating Functions", "Data-Driven Control", "PMSM"],
    link: "#",
  },
  {
    title: "Finite-frame data-driven simulation and norm-optimal output tracking for quarter-plane causal 2D systems",
    journal: "International Journal of Control",
    year: "TBC",
    abstract:
      "We are given: sufficiently informative input-output data from a quarter-plane causal $2D$ system; boundary conditions; and an input-sequence over a finite extent set of $\\mathbb{Z} \\times \\mathbb{Z}$. We compute from such data a local solution to the (unknown) system of partial difference equations governing the system (data-driven simulation). Given a quadratic cost and a reference trajectory, we compute from the data an input-output trajectory locally satisfying the system equations, that minimizes the quadratic cost (optimal output-tracking problem).",
    tags: ["2D Systems", "Data-Driven Simulation", "Data-Driven Control"],
    link: "#",
  },
  {
    title: "Gramian-Based Data-Driven ILC for Continuous-Time Systems",
    journal: "9th IFAC Symposium on System Structure and Control SSSC 2025",
    year: "2025",
    abstract:
      "We present a data-driven Iterative Learning Control (ILC) scheme for continuous-time systems using a 'Gramian' approach. We present some numerical experiments using Chebyshev Polynomial Orthogonal Bases (CPOB) in both model-driven and data-driven ILC for continuous-time systems. We show that in the model-driven ILC case, the utilisation of a CPOB framework results in improved performance over discrete-time methods for applications requiring high precision. In the data-driven case, the advantages of a CPOB approach are less evident and we discuss some of the open problems being investigated.",
    tags: ["Iterative Learning Control", "Data-Driven Control"],
    link: "https://www.sciencedirect.com/science/article/pii/S2405896325013552",
  },
  {
    title: "Data-Driven Model Predictive Control for Continuous-Time Systems",
    journal: "2024 IEEE 63rd Conference on Decision and Control (CDC)",
    year: "2024",
    abstract:
      "We present some preliminary ideas on a data-driven Model Predictive Control framework for continuous-time systems. We use Chebyshev polynomial orthogonal bases to represent system trajectories and subsequently develop a data-driven continuous-time version of the classical Model Predictive Control algorithm. We investigate the effects of the parameters in our framework with two numerical examples and draw comparison to model-driven MPC schemes.",
    tags: ["Model Predictive Control", "Data-Driven Control"],
    link: "https://ieeexplore.ieee.org/abstract/document/10886618",
  },
];

// Helper to render text with inline LaTeX ($...$)
const renderAbstract = (text: string) => {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, index) => {
    if (part.startsWith("$") && part.endsWith("$")) {
      const latex = part.slice(1, -1);
      return <InlineMath key={index} math={latex} />;
    }
    return <span key={index}>{part}</span>;
  });
};

// Publication card with expandable abstract
const PublicationCard = ({ pub }: { pub: typeof publications[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group p-6 md:p-8 rounded-lg bg-background border border-border hover:border-primary/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar size={12} />
              {pub.year}
            </span>
            <span className="text-border">·</span>
            <span className="text-xs text-primary">{pub.journal}</span>
          </div>

          <h3 className="font-display font-medium text-lg md:text-xl mb-3 group-hover:text-primary transition-colors duration-200">
            {pub.title}
          </h3>

          <div className="text-muted-foreground text-sm leading-relaxed mb-4">
            {expanded ? (
              <>
                <p>{renderAbstract(pub.abstract)}</p>
                <button
                  onClick={() => setExpanded(false)}
                  className="text-primary hover:underline mt-1 text-xs font-medium"
                >
                  show less
                </button>
              </>
            ) : (
              <>
                <p className="line-clamp-3">{renderAbstract(pub.abstract)}</p>
                <button
                  onClick={() => setExpanded(true)}
                  className="text-primary hover:underline mt-1 text-xs font-medium"
                >
                  read more...
                </button>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {pub.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex md:flex-col gap-3">
          {pub.link && pub.link !== "#" ? (
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open DOI link for ${pub.title}`}
              >
                <ExternalLink size={14} />
                DOI
              </a>
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              disabled
              aria-disabled="true"
            >
              <ExternalLink size={14} />
              DOI (TBC)
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium mb-4 tracking-widest uppercase text-xs">Publications</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
            <span className="text-gradient">Published</span> and upcoming work
          </h2>
        </div>

        {/* Publications list */}
        <div className="grid gap-5 max-w-4xl mx-auto">
          {publications.map((pub) => (
            <PublicationCard key={pub.title} pub={pub} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://scholar.google.com/citations?user=0Jq6nvIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="gap-2">
              <GraduationCap size={18} />
              View All Publications
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
