import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <p>EKONOMI</p>
        <Image
          src="/accounting-template-unsplash.jpg"
          width={900}
          height={600}
          alt="person holding accounting documents"
        />
      </div>
    </div>
  );
}
