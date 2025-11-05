export const Advantages = () => {
  const advantages = [
    { title: 'Швидкість', desc: 'Миттєве завантаження' },
    { title: 'Надійність', desc: '99.9% uptime' },
    { title: 'Інновації', desc: 'Сучасні технології' },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наші переваги</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((adv, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{adv.title}</h3>
            <p className="text-gray-600">{adv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};