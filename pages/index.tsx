import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const router = useRouter();

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onSearch = async () => {
    router.push(`/result?keyword=${search}&limit=${limit}`);
  };

  return (
    <div>
      <input value={search} onChange={handleSearch} />
      <button onClick={onSearch}>Search</button>
      <div>
        <select value={limit} onChange={(e: any) => setLimit(e.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}
