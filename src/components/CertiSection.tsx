import { certi } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import MotionWrapper from "./MotionWrapper";

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
          📜 Certificates
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {certi.map((cer, index) => (
            <TimelineItem
              key={cer.institution}
              title={`🎓 ${cer.degree}`}
              subtitle={`🏛️ ${cer.institution}`}
              date={`📅 ${cer.period}`}
              isLast={index === certi.length - 1}
              index={index}
            >
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}