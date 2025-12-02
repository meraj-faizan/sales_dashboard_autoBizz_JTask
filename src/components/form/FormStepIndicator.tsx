"use client";

import { cn } from "@/lib/utils";

export interface StepItem {
  id: number;
  title: string;
  description?: string;
}

interface StepIndicatorProps {
  formName: string;
  steps: StepItem[];
  currentStep: number;
}

export function FormStepIndicator({
  formName,
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-72 lg:bg-white">
        <h2 className="text-2xl font-semibold text-muted mb-4">{formName}</h2>

        <div className="space-y-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={cn(
                "p-4 rounded-xl text-lg font-[400] text-light-muted",
                currentStep === step.id &&
                  "bg-primary/10 text-primary font-bold"
              )}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Horizontal */}
      <div className="lg:hidden">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center gap-1 flex-shrink-0"
            >
              <div
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium text-muted",
                  currentStep === step.id
                    ? "bg-primary text-white"
                    : currentStep > step.id
                    ? "bg-primary/10 text-primary"
                    : ""
                )}
              >
                {step.title}
              </div>

              {index < steps.length - 1 && (
                <div className="text-muted-foreground text-xs">•</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
