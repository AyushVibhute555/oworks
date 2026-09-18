import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

const projectTypes = [
  { id: "brand-identity", label: "Brand Identity", baseMin: 30000, baseMax: 50000 },
  { id: "design-system", label: "Visual Design System", baseMin: 25000, baseMax: 45000 },
  { id: "art-direction", label: "Art Direction", baseMin: 15000, baseMax: 30000 },
  { id: "brand-guidelines", label: "Brand Guidelines", baseMin: 10000, baseMax: 25000 },
];

const businessStages = [
  { id: "startup", label: "Startup / New", multiplier: 0.8 },
  { id: "growing", label: "Growing", multiplier: 1.0 },
  { id: "established", label: "Established", multiplier: 1.2 },
  { id: "enterprise", label: "Enterprise", multiplier: 1.5 },
];

const timelines = [
  { id: "flexible", label: "Flexible (12+ weeks)", multiplier: 1.0 },
  { id: "standard", label: "Standard (8-12 weeks)", multiplier: 1.1 },
  { id: "accelerated", label: "Accelerated (6-8 weeks)", multiplier: 1.25 },
  { id: "rush", label: "Rush (under 6 weeks)", multiplier: 1.5 },
];

const deliverableScopes = [
  { id: "core", label: "Core Essentials", multiplier: 0.8 },
  { id: "comprehensive", label: "Comprehensive", multiplier: 1.0 },
  { id: "full-system", label: "Full System", multiplier: 1.3 },
];

interface SelectionButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function SelectionButton({ selected, onClick, children }: SelectionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full text-left px-5 py-4 border transition-all duration-300",
        "hover:border-ink hover:bg-cream-dark",
        selected
          ? "border-ink bg-cream-dark"
          : "border-divider bg-transparent"
      )}
    >
      <span className="flex items-center justify-between">
        <span className={cn("text-sm", selected ? "text-ink" : "text-ink-light")}>
          {children}
        </span>
        {selected && <Check size={16} className="text-ink" />}
      </span>
    </button>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const start = displayValue;
    const end = value;
    const duration = 400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;
      
      setDisplayValue(Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
}

export function InvestmentEstimator() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [selectedScope, setSelectedScope] = useState<string | null>(null);

  const calculateEstimate = () => {
    if (!selectedType || !selectedStage || !selectedTimeline || !selectedScope) {
      return null;
    }

    const projectType = projectTypes.find((t) => t.id === selectedType);
    const stage = businessStages.find((s) => s.id === selectedStage);
    const timeline = timelines.find((t) => t.id === selectedTimeline);
    const scope = deliverableScopes.find((s) => s.id === selectedScope);

    if (!projectType || !stage || !timeline || !scope) return null;

    const minEstimate = Math.round(
      projectType.baseMin * stage.multiplier * timeline.multiplier * scope.multiplier
    );
    const maxEstimate = Math.round(
      projectType.baseMax * stage.multiplier * timeline.multiplier * scope.multiplier
    );

    return { min: minEstimate, max: maxEstimate };
  };

  const estimate = calculateEstimate();
  const completedSteps = [selectedType, selectedStage, selectedTimeline, selectedScope].filter(Boolean).length;

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-editorial px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="eyebrow mb-4">Investment Estimator</p>
              <h2 className="text-ink mb-4">Get a personalized estimate.</h2>
              <p className="text-ink-light max-w-xl mx-auto">
                Answer a few questions to receive a tailored investment range for your project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Project Type */}
            <ScrollReveal delay={100}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">1</span>
                  Project Type
                </p>
                <div className="space-y-2">
                  {projectTypes.map((type) => (
                    <SelectionButton
                      key={type.id}
                      selected={selectedType === type.id}
                      onClick={() => setSelectedType(type.id)}
                    >
                      {type.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Business Stage */}
            <ScrollReveal delay={200}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">2</span>
                  Business Stage
                </p>
                <div className="space-y-2">
                  {businessStages.map((stage) => (
                    <SelectionButton
                      key={stage.id}
                      selected={selectedStage === stage.id}
                      onClick={() => setSelectedStage(stage.id)}
                    >
                      {stage.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={300}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">3</span>
                  Timeline
                </p>
                <div className="space-y-2">
                  {timelines.map((timeline) => (
                    <SelectionButton
                      key={timeline.id}
                      selected={selectedTimeline === timeline.id}
                      onClick={() => setSelectedTimeline(timeline.id)}
                    >
                      {timeline.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Deliverables Scope */}
            <ScrollReveal delay={400}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">4</span>
                  Deliverables
                </p>
                <div className="space-y-2">
                  {deliverableScopes.map((scope) => (
                    <SelectionButton
                      key={scope.id}
                      selected={selectedScope === scope.id}
                      onClick={() => setSelectedScope(scope.id)}
                    >
                      {scope.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Estimate Result */}
          <ScrollReveal delay={500}>
            <div className="mt-12 md:mt-16 pt-12 border-t border-divider">
              <div className="text-center">
                {estimate ? (
                  <div className="animate-fade-in">
                    <p className="eyebrow mb-4">Estimated Investment</p>
                    <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-6">
                      $<AnimatedNumber value={estimate.min} /> — $<AnimatedNumber value={estimate.max} />
                    </p>
                    <p className="text-ink-muted text-sm mb-8 max-w-md mx-auto">
                      This is a preliminary estimate based on your selections. Final pricing is 
                      determined after our initial consultation.
                    </p>
                    <button
                      onClick={scrollToForm}
                      className="arrow-link text-ink inline-flex items-center gap-2"
                    >
                      Start Your Project
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                ) : (
                  <div className="text-ink-muted">
                    <p className="eyebrow mb-4">Your Estimate</p>
                    <p className="font-serif text-3xl md:text-4xl text-ink-light mb-4">
                      {completedSteps}/4 selections made
                    </p>
                    <p className="text-sm">Complete all selections to see your personalized estimate.</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
