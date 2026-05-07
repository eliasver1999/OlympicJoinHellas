import React from "react";

export const useActiveSection = (
  sectionIds: string[],
  containerId: string = "scroll-container"
): string => {
  const [active, setActive] = React.useState<string>(sectionIds[0] ?? "");

  React.useEffect(() => {
    const root = document.getElementById(containerId);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      {
        root,
        threshold: [0.3, 0.5, 0.7],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds, containerId]);

  return active;
};
