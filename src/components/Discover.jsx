import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    type: "Technology",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721642.png",
  },
  {
    id: 2,
    title: "Startup Pitch Fest",
    type: "Business",
    image: "https://cdn-icons-png.flaticon.com/512/189/189000.png",
  },
  {
    id: 3,
    title: "AI & ML Summit",
    type: "Artificial Intelligence",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    id: 4,
    title: "Design Thinking Workshop",
    type: "Creative",
    image: "https://cdn-icons-png.flaticon.com/512/1377/1377550.png",
  },
  {
    id: 5,
    title: "Gourmet Food Fest 2025",
    type: "Food & Culinary",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    id: 6,
    title: "Live Music Carnival",
    type: "Music & Entertainment",
    image: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
  }
];

const DiscoverEvents = () => {
  return (
    <section className="py-10 bg-yellow-200 px-4 mt-2">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">🎉 Discover All Events</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <img src={event.image} alt={event.title} className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{event.type}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DiscoverEvents;
