import React from "react";

export default function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;
  return (
    <div>
      <h1>Soon</h1>
      <p>Invoice Id: {params.id}</p>
    </div>
  );
}
