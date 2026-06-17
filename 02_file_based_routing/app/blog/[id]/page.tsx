import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const resolves = await params;
  return (
    <div>
      <h1>{resolves.id}</h1>
    </div>
  );
}
