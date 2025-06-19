const Testimonial = () => {
  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Event Attendee",
      quote: "Eventra made it super easy to register for events. Smooth and fast!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Mehta",
      role: "Organizer",
      quote: "The admin dashboard helped me manage everything without hassle.",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      name: "Emily Smith",
      role: "Designer",
      quote: "Loved the user interface and seamless experience!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    }
  ];

  return (
    <section className="bg-yellow-100 py-12 mt-3">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What People Are Saying</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-2">"{t.quote}"</p>
            <h4 className="font-semibold text-center text-gray-800">{t.name}</h4>
            <p className="text-center text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
