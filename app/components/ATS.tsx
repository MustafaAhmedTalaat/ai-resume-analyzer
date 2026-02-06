import React from 'react'

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // Determine background gradient based on score
  const gradientClass = score > 69
    ? 'from-green-100'
    : score > 49
      ? 'from-yellow-100'
      : 'from-red-100';

  // Determine icon based on score
  const iconSrc = score > 69
    ? '/icons/ats-good.svg'
    : score > 49
      ? '/icons/ats-warning.svg'
      : '/icons/ats-bad.svg';

  // Determine subtitle based on score
  const subtitle = score > 69
    ? 'Great Job!'
    : score > 49
      ? 'Good Start'
      : 'Needs Improvement';

  return (
    <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl w-full p-4 md:p-6 border border-slate-700/50`}>
      {/* Top section with icon and headline */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
        <div className="flex-shrink-0 p-3 bg-slate-700/50 rounded-2xl">
          <img src={iconSrc} alt="ATS Score Icon" className="w-6 md:w-8 h-6 md:h-8" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-white">ATS Score: <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">{score}/100</span></h2>
          <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
      </div>

      {/* Description section */}
      <div className="mb-6">
        <p className="text-sm md:text-base text-slate-300 mb-4 leading-relaxed">
          This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.
        </p>

        {/* Suggestions list */}
        <div className="space-y-2 md:space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-2 md:gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors">
              <div className="flex-shrink-0 pt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 md:w-5 h-4 md:h-5 ${suggestion.type === "good" ? "text-green-400" : "text-amber-400"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={suggestion.type === "good" ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" : "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"} clipRule="evenodd" />
                </svg>
              </div>
              <p className={`text-sm md:text-base ${suggestion.type === "good" ? "text-green-300" : "text-amber-300"}`}>
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing encouragement */}
      <div className="pt-4 border-t border-slate-700/50">
        <p className="text-xs md:text-sm text-slate-400 italic flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 10-2 0 1 1 0 002 0zm3 1a1 1 0 100-2 1 1 0 000 2zm3-1a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
          </svg>
          Keep refining your resume to improve your chances at ATS filters.
        </p>
      </div>
    </div>
  )
}

export default ATS
