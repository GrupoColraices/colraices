"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { officialPaths } from "@/app/lib/officialUrls";

const SERVICES_HASH = "#servicios";
const SERVICES_ID = "servicios";

function scrollToServices() {
  document.getElementById(SERVICES_ID)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function LegalHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== officialPaths.legalHub) {
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;
    let fallbackTimeout = 0;

    const scheduleScroll = () => {
      if (window.location.hash !== SERVICES_HASH) {
        return;
      }

      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(fallbackTimeout);

      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(scrollToServices);
      });
      fallbackTimeout = window.setTimeout(scrollToServices, 250);
    };

    scheduleScroll();
    window.addEventListener("hashchange", scheduleScroll);

    return () => {
      window.removeEventListener("hashchange", scheduleScroll);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(fallbackTimeout);
    };
  }, [pathname]);

  return null;
}
