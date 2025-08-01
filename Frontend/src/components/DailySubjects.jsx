import React, { useState } from 'react';

const DailySubjects = () => {
  const [subjects, setSubjects] = useState([
    { date: "2025-07-31", subject: "Math - Algebra" },
    { date: "2025-07-31", subject: "Science - Physics" },
    { date: "2025-07-31", subject: "English - Literature" },
    { date: "2025-07-31", subject: "History - World War II" }
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
            Daily Subjects
          </h2>
          <p className="text-blue-100 text-center mt-2 text-sm sm:text-base">
            Today's class schedule and subjects
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {subjects.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 text-6xl mb-4">📚</div>
              <p className="text-gray-500 text-lg">No subjects scheduled for today</p>
            </div>
          ) : (
            <div className="space-y-3">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-4 sm:p-5 hover:shadow-md transition-all duration-200 hover:border-blue-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                          {subject.subject}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(subject.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Active
                      </span>
                      <span className="text-xs text-gray-400">
                        {Math.floor(Math.random() * 60) + 1} min
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Subject Button */}
          <div className="mt-6 text-center">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Subject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySubjects;
  