export default function ProductHighlights() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose MyStore
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="font-bold text-xl mb-3 text-blue-600">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your products delivered quickly and safely, right to your doorstep.
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="font-bold text-xl mb-3 text-blue-600">Best Prices</h3>
          <p className="text-gray-600">
            We offer competitive pricing and regular discounts to make your shopping easy.
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="font-bold text-xl mb-3 text-blue-600">Quality Guaranteed</h3>
          <p className="text-gray-600">
            All products are verified for top-notch quality standards before delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
