import Image from "next/image";

const testimonials: Record<
  string,
  { name: string; image: string; description: string; info: string }
> = {
  senzo: {
    name: "Senzo",
    image: "/assets/logos/css.svg", // ✅ Fixed path (removed "../assests/")
    description:
      "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    info: "Colleague",
  },
  antonio: {
    name: "Antonio",
    image: "/assets/logos/css.svg", // ✅ Fixed path
    description:
      "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    info: "Colleague",
  },
  ian: {
    name: "Ian",
    image: "/assets/logos/css.svg", // ✅ Fixed path
    description:
      "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    info: "Colleague",
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
