import { cn } from "@/lib/utils";

export function PlaceholderImage({ alt, className }: { alt: string; className?: string }) {
  return <div role="img" aria-label={alt} className={cn("bg-cream-darker border border-divider flex items-center justify-center p-6", className)}><span className="eyebrow text-center">Image placeholder — replace</span></div>;
}
