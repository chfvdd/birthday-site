import { people } from "@/data/people";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PersonPage({ params }: Props) {
  const { id } = await params;

  const person = people.find((p) => p.id === id);

  if (!person) {
    notFound();
  }

  return (
    <main className="personPage">
      <h1 className="personTitle">
        {person.id} / {person.name}
        <span className="titleHeart"> ♡</span>
      </h1>

      {person.type === "audio" ? (
        <audio controls className="personVideo">
          <source src={person.file} type="audio/mpeg" />
          Ваш браузер не поддерживает аудио.
        </audio>
      ) : (
        <video controls className="personVideo">
          <source src={person.video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      )}

      <p className="madeWithLove">
        Сделано с любовью ♡
      </p>
    </main>
  );
}