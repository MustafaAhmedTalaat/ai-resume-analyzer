import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

const ScoreBadge = ({ score }: { score: number }) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 items-center px-2 py-0.5 rounded-[96px]",
        score > 69
          ? "bg-badge-green"
          : score > 39
            ? "bg-badge-yellow"
            : "bg-badge-red"
      )}
    >
      <img
        src={score > 69 ? "/icons/check.svg" : "/icons/warning.svg"}
        alt="score"
        className="size-4"
      />
      <p
        className={cn(
          "text-sm font-medium",
          score > 69
            ? "text-badge-green-text"
            : score > 39
              ? "text-badge-yellow-text"
              : "text-badge-red-text"
        )}
      >
        {score}/100
      </p>
    </div>
  );
};

const CategoryHeader = ({
  title,
  categoryScore,
}: {
  title: string;
  categoryScore: number;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center py-2">
      <p className="text-base md:text-xl font-semibold text-slate-200">{title}</p>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

const CategoryContent = ({
  tips,
}: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-center w-full">
      <div className="bg-slate-700/40 w-full rounded-xl md:rounded-2xl px-3 md:px-5 py-3 md:py-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 border border-slate-600/30">
        {tips.map((tip, index) => (
          <div className="flex flex-row gap-2 items-start md:items-center" key={index}>
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 md:w-5 h-4 md:h-5 ${tip.type === "good" ? "text-green-400" : "text-amber-400"}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d={tip.type === "good" ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" : "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"} clipRule="evenodd" />
              </svg>
            </div>
            <p className={`text-xs md:text-sm font-medium ${tip.type === "good" ? "text-slate-200" : "text-slate-200"}`}>{tip.tip}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 md:gap-4 w-full">
        {tips.map((tip, index) => (
          <div
            key={index + tip.tip}
            className={cn(
              "flex flex-col gap-2 rounded-xl md:rounded-2xl p-3 md:p-4 border transition-all duration-300 hover:shadow-lg",
              tip.type === "good"
                ? "bg-green-900/20 border-green-700/40 text-green-100"
                : "bg-amber-900/20 border-amber-700/40 text-amber-100"
            )}
          >
            <div className="flex flex-row gap-2 items-start md:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 md:w-5 h-4 md:h-5 flex-shrink-0 ${tip.type === "good" ? "text-green-400" : "text-amber-400"}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d={tip.type === "good" ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" : "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"} clipRule="evenodd" />
              </svg>
              <p className="text-sm md:text-base font-semibold">{tip.tip}</p>
            </div>
            <p className="text-xs md:text-sm opacity-90">{tip.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        <AccordionItem id="tone-style">
          <AccordionHeader itemId="tone-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-style">
            <CategoryContent tips={feedback.toneAndStyle.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="content">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="structure">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure.tips} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="skills">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills.tips} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
