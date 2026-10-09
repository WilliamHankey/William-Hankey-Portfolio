"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Quote } from "@/lib/content/types";

export function QuoteCard({ quote, dark = false }: { quote?: Quote; dark?: boolean }) {
  const id = useId();
  const text = useRef<HTMLQuoteElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    const node = text.current;
    if (!node) return;
    const measure = () => {
      const lineHeight = parseFloat(getComputedStyle(node).lineHeight);
      setOverflows(Number.isFinite(lineHeight) && node.scrollHeight > lineHeight * 4 + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    document.fonts.addEventListener("loadingdone", measure);
    return () => {
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", measure);
    };
  }, [quote?.quote]);

  if (!quote?.quote) return null;
  const initials = quote.name.trim().split(/\s+/).filter(Boolean).map((word) => word[0]).slice(0, 2).join("").toUpperCase();

  return (
    <figure className={`v-testimonial m-0 flex flex-col gap-3 p-5 ${dark ? "v-panel-dark" : "v-panel"}`}>
      <blockquote
        ref={text}
        id={id}
        className={`v-lede v-testimonial-quote m-0${expanded ? "" : " v-testimonial-clamped"}`}
        style={dark ? { color: "#fff" } : undefined}
      >
        “{quote.quote}”
      </blockquote>
      {overflows ? (
        <button
          type="button"
          className="v-testimonial-toggle self-start"
          aria-expanded={expanded}
          aria-controls={id}
          aria-label={`${expanded ? "Show less" : "Show more"} of ${quote.name}'s testimonial`}
          onClick={() => setExpanded((value) => !value)}
          style={dark ? { color: "#fff" } : undefined}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      ) : null}
      <figcaption className="v-metric-note mt-auto flex items-center gap-3" style={dark ? { color: "rgba(255,255,255,0.75)" } : undefined}>
        {quote.photo && !photoFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={quote.photo} alt="" width={48} height={48} loading="lazy" className="v-testimonial-avatar" onError={() => setPhotoFailed(true)} />
        ) : (
          <span className="v-testimonial-avatar v-testimonial-initials" aria-hidden="true">{initials || "?"}</span>
        )}
        <span className="flex flex-col gap-0.5">
          <span className="font-semibold">{quote.name}</span>
          {quote.role ? <span>{quote.role}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}
