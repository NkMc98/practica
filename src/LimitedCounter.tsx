import { useState, useEffect } from "react";

function LimitedCounter() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    if (count >= limit) {
      setCount(limit);
    }
  }, [count, limit]);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default LimitedCounter;