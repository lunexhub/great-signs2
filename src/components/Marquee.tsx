interface MarqueeProps {
  items: string[];
}

const Marquee = ({ items }: MarqueeProps) => {
  // Create a single set of items with separators
  const itemElements = items.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-12 text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground/70 shrink-0"
    >
      <span>{item}</span>
      <span className="text-primary/40">•</span>
    </div>
  ));

  return (
    <div className="overflow-hidden py-6 bg-muted/30 border-y border-border relative">
      <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {/* First set */}
        {itemElements}
        {/* Second set for seamless loop */}
        {itemElements}
      </div>
    </div>
  );
};

export default Marquee;

