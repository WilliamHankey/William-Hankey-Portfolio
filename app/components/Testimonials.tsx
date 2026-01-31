import Image from "next/image";

const testimonials: Record<
  string,
  { name: string; image: string; description: string; info: string }
> = {
  senzo: {
    name: "Senzo",
    image: "/assets/logos/senzo.jpg", // ✅ Fixed path (removed "../assests/")
    description:
      "“I highly recommend William Hankey. We worked together on a full-stack C# and Angular project where his frontend contributions stood out. William transformed our basic Angular UI into a stunning, user-friendly experience, consistently going above and beyond. He took initiative, identified UX improvements, and delivered creative, high-quality solutions. William brought a strong sense of ownership and collaboration, making the project feel like a true partnership. His attention to detail, proactive mindset, and frontend expertise make him a valuable asset to any team.”",
    info: "Junior Developer",
  },
  antonio: {
    name: "Leezah",
     image: "/assets/logos/leezah.jpg", // ✅ Fixed path
    description:
      "“Working with William Hankey for a year on a major project has been a privilege. He’s one of the most skilled and dedicated Angular developers I’ve met. His deep frontend knowledge, clean code practices, and problem-solving mindset played a key role in building a high-quality, scalable application. William is also a natural mentor and team player, always eager to collaborate and share insights. His proactive approach and passion for staying ahead in Angular make him a valuable asset to any team. I highly recommend him.”",
    info: "Senior Consultant",
  },
  ian: {
    name: "Ian",
    image: "/assets/logos/ian.jpg", // ✅ Fixed path
    description:
      "“I highly recommend William Hankey as a full-stack developer. In just a few months of working closely with him, his expertise and adaptability became evident. William excels in all things visual, with meticulous attention to detail in front-end development and design. At the same time, he demonstrates strong proficiency in data and domain knowledge, making him a well-rounded full-stack engineer. I can personally attest to his readiness in the Angular-C# stack.”",
    info: "Intermediate Developer",
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 flex flex-col justify-center items-center py-12 lg:py-24 px-4 lg:px-16">
      <div className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm w-fit mb-4">
        Testimonials
      </div>
      <p className="text-center mb-8">Nice things people have to say about me.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24 w-full max-w-7xl">
        {Object.entries(testimonials).map(([key, value]) => (
          <div
            key={key}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div className="flex items-center mb-4">
              <Image
                src={value.image}
                alt={value.name}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{value.name}</h2>
                <p className="text-gray-600 text-sm">{value.info}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">"{value.description}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
