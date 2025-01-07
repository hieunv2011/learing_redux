import React, { useEffect, useMemo, useRef, useState } from "react";
export default function AppClass() {
  const ref = useRef(null);
  console.log({ ref });
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={ref} />
      <button> Get Users Data</button>
    </div>
  );
}
