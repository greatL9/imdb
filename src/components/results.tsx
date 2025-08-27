interface Result {
  id: string | number;
  original_title: string;
}

export default function Results({ results }: { results: Result[] }) {
  return (
    <div>
      {results &&
        results.map((result) => (
          <div key={result.id}>{result.original_title}</div>
        ))}
    </div>
  );
}
