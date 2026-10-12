import Image from "next/image";
import Link from "next/link";
import { people } from "@/data/people";

export default function Home() {
  return (
    <main>

      <section className="hero">

        <div className="hero__left">

          <span className="hero__small">
            Этот день — для тебя ♡
          </span>

          <h1>
            С ДНЁМ
            <br />
            РОЖДЕНИЯ!
          </h1>

          <p className="heroDescription">
            Этот день — для тебя.
          </p>

        </div>

        <div className="hero__right">

          <div className="polaroidStack">

            <div className="backCard backCard1"></div>
            <div className="backCard backCard2"></div>

            <div className="polaroid">

              <Image
                src="/hero/photo999.jpg"
                alt="Birthday"
                width={380}
                height={500}
                className="heroImage"
                priority
              />

              <span className="polaroidText">
                Для тебя ♡
              </span>

            </div>

          </div>

        </div>

        {/* Рваная бумага */}
        
      </section>

      <section className="special">
        <h2>
          ТЫ ОСОБЕННАЯ <span>♡</span>
        </h2>
      </section>

      <section className="names" id="names">
        <span className="names__small">выбери, кого открыть ♡</span>

        <h2 className="names__title">Тебя поздравляют</h2>

        <ul className="names__grid">
          {people.map((person) => (
            <li key={person.id}>
              <Link href={`/${person.id}`} className="nameCard">
                <span className="nameCard__num">{person.id}</span>
                <span className="nameCard__name">{person.name}</span>
                <span className="nameCard__action">
                  {person.type === "audio" ? "♪ слушать" : "▶ смотреть"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}