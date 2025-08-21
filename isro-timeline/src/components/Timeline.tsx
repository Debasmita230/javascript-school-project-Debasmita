type Event = {
  year: number;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    year: 1969,
    title: "Formation of ISRO",
    description:
      "ISRO was officially established with the vision to harness space technology for national development.",
  },
  {
    year: 1975,
    title: "Aryabhata — First Indian Satellite",
    description:
      "India’s first satellite Aryabhata was launched, marking a historic milestone.",
  },
  {
    year: 1980,
    title: "Rohini Satellite Launch",
    description:
      "India successfully launched the Rohini Satellite RS-1 using the SLV-3 rocket.",
  },
  {
    year: 1994,
    title: "PSLV Successful Launch",
    description:
      "The Polar Satellite Launch Vehicle (PSLV) had its first successful mission, boosting India’s launch capabilities.",
  },
  {
    year: 2001,
    title: "GSLV Debut",
    description:
      "The Geosynchronous Satellite Launch Vehicle (GSLV) was successfully launched for the first time.",
  },
  {
    year: 2008,
    title: "Chandrayaan-1",
    description:
      "India’s first mission to the Moon discovered water molecules on the lunar surface.",
  },
  {
    year: 2013,
    title: "Mangalyaan (Mars Orbiter Mission)",
    description:
      "India became the first Asian nation to reach Mars orbit and the first in the world to do so on its first attempt.",
  },
  {
    year: 2019,
    title: "Chandrayaan-2",
    description:
      "India’s second lunar mission, aimed at exploring the Moon’s south pole region.",
  },
];
export default function Timeline() {
  return (
    <section className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-year">{event.year}</div>
          <div className="timeline-content" data-aos="fade-up">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </section>


  );
}
