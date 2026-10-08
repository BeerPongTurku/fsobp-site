import React from 'react';

import { useEffect, useState } from "react";

export default function DocPage() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/public/fsobp_rules.html")
      .then((res) => res.text())
      .then(setHtml);
  }, []);

  return (
    <div className="doc-container">
      <div className="doc-content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
export default Rules;
