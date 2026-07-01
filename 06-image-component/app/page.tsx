import Image from "next/image";

import nature from "@/public/nature.jpg";

export default function Home() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🚀 Next.js Image Component</h1>

      <hr />

      {/* 1. Basic Image */}
      <h2>1. Basic Image</h2>

      <Image src={nature} alt="Nature Image" width={400} height={250} />

      <hr />

      {/* 2. Fill Property */}
      <h2>2. Fill Property</h2>

      <div
        style={{
          width: "500px",
          height: "300px",
          position: "relative",
          border: "2px solid red",
        }}
      >
        <Image
          src={nature}
          alt="Mountain"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <hr />

      {/* 3. Quality = 20 */}
      <h2>3. Low Quality (20)</h2>

      <Image src={nature} alt="Nature" width={400} height={250} quality={20} />

      <hr />

      {/* 4. Quality = 100 */}
      <h2>4. High Quality (100)</h2>

      <Image src={nature} alt="Nature" width={400} height={250} quality={100} />

      <hr />

      {/* 5. Priority */}
      <h2>5. Priority Image</h2>

      <Image src={nature} alt="Nature" width={400} height={250} priority />

      <hr />

      {/* 6. Blur Effect */}
      <h2>6. Blur Placeholder</h2>

      <Image
        src={nature}
        alt="Nature"
        width={400}
        height={250}
        placeholder="blur"
      />
    </div>
  );
}
