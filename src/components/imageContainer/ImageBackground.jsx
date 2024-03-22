import Image from "next/image";

export default function ImageBackground({ src }) {
  return (
    <div style={{ position: "relative", height: "80vh" }}>
      <Image
        alt={src}
        src={src}
        fill
        priority
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: "cover", // cover, contain, none
        }}
      />
    </div>
  );
}
