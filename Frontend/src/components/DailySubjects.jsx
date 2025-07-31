const DailySubjects = () => {
    const [subjects, setSubjects] = useState([
      { date: "2025-07-31", subject: "Math - Algebra" }
    ]);
  
    return (
      <div>
        <h2>Daily Subjects</h2>
        <ul>
          {subjects.map((s, i) => (
            <li key={i}>{s.date} - {s.subject}</li>
          ))}
        </ul>
      </div>
    );
  };
  