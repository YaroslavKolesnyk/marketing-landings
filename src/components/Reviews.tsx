export const Reviews = () => {
  const reviews = [
    { text: 'Чудовий сервіс! Рекомендую всім.', author: 'Іван Петренко' },
    { text: 'Дуже швидко та професійно.', author: 'Ольга Сидоренко' },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Відгуки клієнтів</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {reviews.map((rev, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-white p-8 rounded-xl shadow-md italic text-gray-700"
          >
            <p className="mb-4">&ldquo;{rev.text}&rdquo;</p>
            <p className="font-bold text-blue-600 not-italic">— {rev.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};