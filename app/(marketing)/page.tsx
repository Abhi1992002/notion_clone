import { Button } from "@/components/ui/button";
import { Heading } from "./_components/Heading";
import Heroes from "./_components/Heroes";
import { Footer } from "./_components/Footer";
export default function LandingPage() {
  return (
    <div className="min-h-full dark:bg-[#1f1f1f] flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
