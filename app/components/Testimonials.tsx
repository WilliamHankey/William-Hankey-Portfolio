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
    <section id="testimonials" className="grid grid-cols-3 gap-24 p-24">
      {Object.entries(testimonials).map(([key, value]) => (
        <div
          key={key} // ✅ Added unique key here
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row flex-wrap justify-center"
        >
          <Image
            src={value.image}
            alt={value.name}
            width={20}
            height={20}
            className="object-contain"
          />
          <div className="p-4 w-full text-center">
            <div className="flex space-x-3 mt-3">
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
            <h2 className="text-xl font-semibold">{value.name}</h2>
            <p className="text-gray-600 text-sm">{value.info}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
