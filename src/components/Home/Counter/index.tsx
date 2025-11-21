"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import "./counter.css";

interface CounterItem {
  label: string;
  value: number;
  suffix?: string;
  icon?: string;
}

interface CounterProps {
  items?: CounterItem[];
  className?: string;
  isColorMode?: boolean;
  duration?: number;
  threshold?: number;
}

const defaultCounterItems: CounterItem[] = [
  {
    label: "Projects Completed",
    value: 150,
    suffix: "+",
    icon: "work",
  },
  {
    label: "Happy Clients",
    value: 98,
    suffix: "%",
    icon: "sentiment_satisfied",
  },
  {
    label: "Years Experience",
    value: 5,
    suffix: "+",
    icon: "schedule",
  },
  {
    label: "Technologies",
    value: 25,
    suffix: "+",
    icon: "code",
  },
];

const Counter: React.FC<CounterProps> = ({
  items = defaultCounterItems,
  className = "",
  isColorMode = false,
  duration = 2000,
  threshold = 0.1,
}) => {
  const [counters, setCounters] = useState<number[]>(items.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const animateCounters = useCallback(() => {
    if (hasAnimated) return;

    setHasAnimated(true);

    // Clear any existing timers
    timersRef.current.forEach((timer) => clearInterval(timer));
    timersRef.current = [];

    items.forEach((item, index) => {
      let current = 0;
      const startTime = Date.now();
      const startValue = 0;
      const endValue = item.value;

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutExpo =
          progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        current = Math.floor(
          startValue + (endValue - startValue) * easeOutExpo,
        );

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });

        if (progress >= 1) {
          clearInterval(timer);
          // Remove timer from ref array
          timersRef.current = timersRef.current.filter((t) => t !== timer);
        }
      }, 16); // ~60fps

      timersRef.current.push(timer);
    });
  }, [items, duration, hasAnimated]);

  useEffect(() => {
    if (!sectionRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          animateCounters();
        }
      },
      {
        threshold,
        rootMargin: "50px",
      },
    );

    observerRef.current.observe(sectionRef.current);

    return () => {
      // Cleanup observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Cleanup timers
      timersRef.current.forEach((timer) => clearInterval(timer));
      timersRef.current = [];
    };
  }, [animateCounters, threshold, hasAnimated]);

  // Reset animation when items change
  useEffect(() => {
    setHasAnimated(false);
    setIsVisible(false);
    setCounters(items.map(() => 0));
  }, [items]);

  return (
    <section
      ref={sectionRef}
      className={`counter-section py-16 ${
        isColorMode
          ? "dark:bg-darklight bg-section"
          : "dark:bg-darkmode bg-white"
      } ${className}`}
      aria-label="Statistics and achievements"
    >
      <div className="container mx-auto px-6">
        <div className="counter-grid">
          {items.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className={`counter-card ${isVisible ? "counter-animate-in" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
              role="region"
              aria-labelledby={`counter-label-${index}`}
            >
              {item.icon && (
                <div className="counter-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
              )}

              <div className="mb-2">
                <span
                  className="counter-value"
                  aria-live="polite"
                  aria-label={`${counters[index]}${item.suffix || ""}`}
                >
                  {counters[index]}
                </span>
                {item.suffix && (
                  <span className="counter-suffix">{item.suffix}</span>
                )}
              </div>

              <p id={`counter-label-${index}`} className="counter-label">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
