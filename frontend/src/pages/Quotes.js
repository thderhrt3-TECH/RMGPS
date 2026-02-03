import React from 'react';

const Quotes = () => {
  const communityQuotes = [
    {
      text: "Rocky Mountain Global Peace & Sports Complex will be a legacy for the State of Utah.",
      author: "Franz Kolb, Governor's Office of Economic Development"
    },
    {
      text: "We believe this project will bring tremendous benefits for children and youth in our community and state, and across the world.",
      author: "Joshua Jewkes, Wasatch Community Foundation"
    },
    {
      text: "This inspirational project will bring children and families from around the globe to our beautiful state & communities along the Wasatch Back.",
      author: "DMG Schlopy Family, Coldwell Banker Realty"
    },
    {
      text: "Synergy is everything. As a former professional basketball player—it is not about one person, but about the collective.",
      author: "Lance Allred, First Deaf Player in NBA History, International inspirational speaker & best-selling author"
    },
    {
      text: "I am honored to serve on the Board of Directors for this amazing Project. Rocky Mountain GPS will break down barriers across the Globe for the betterment of children worldwide.",
      author: "Faith Fields, Equestrian, Teacher, Philosopher"
    },
    {
      text: "The Wasatch County staff feels that this project aligns with the priorities of our organization, and we are looking forward to working with Rocky Mountain GPS.",
      author: "Dustin Grabau, Wasatch County Manager"
    },
    {
      text: "From an economic development perspective, the complex will create jobs, attract tourism, and provide lasting economic benefits to the region. I believe this project will positively impact the lives of children locally and globally who will benefit from its facilities.",
      author: "Lori Haslem, Outreach Manager, Center for Rural Development"
    },
    {
      text: "The project reflects values central to our mission, including land preservation, trail development, and permanent infrastructure that serves youth and families across the Wasatch Back.",
      author: "Randon W. Wilson, Midway Heritage Foundation"
    },
    {
      text: "This project will drive economic development because it is a major investment into our community, it will create new jobs and support existing businesses, and it will help new visitors into Heber Valley.",
      author: "Dallin Koecher, Heber Valley Chamber of Commerce and Economic Development"
    }
  ];

  const inspirationQuotes = [
    { text: "Sport has the power to change the world.", author: "Nelson Mandela" },
    { text: "Music is a way to lift people up even if it's just for a few hours.", author: "Post Malone" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "We learned about dignity and decency - that how hard you work matters more than how much you make... that helping others means more than just getting ahead yourself.", author: "Michelle Obama" },
    { text: "Empowering children is the key to a brighter tomorrow.", author: "Michael Jackson, singer, songwriter, grammy winner, philanthropist" },
    { text: "Music is my therapy: it saves me daily.", author: "Jelly Roll" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You can't put a limit on anything. The more you dream, the farther you get.", author: "Misty Copeland" },
    { text: "It's not a faith in technology. It's faith in people.", author: "Steve Jobs" },
    { text: "Success is not about being the best. It's about always getting better.", author: "Dr Marissa Mayer" }
  ];

  const societyQuotes = [
    { text: "If a free society cannot help the many who are poor, it cannot save those few who are rich.", author: "John F. Kennedy" },
    { text: "The true measure of any society can be found in how it treats its most vulnerable members.", author: "Mahatma Gandhi" }
  ];

  return (
    <div className="quotes-page bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20" data-testid="quotes-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-red-600">Quotes & Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Words of support and inspiration from our community, partners, and leaders
          </p>
        </div>
      </section>

      {/* Community & Leadership Support */}
      <section className="py-20 bg-black" data-testid="community-quotes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Community Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {communityQuotes.map((quote, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-red-600">
                <blockquote className="text-gray-300 italic mb-4 text-lg leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <cite className="text-white font-semibold block text-right">
                  — {quote.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quotes */}
      <section className="py-20 bg-gray-900" data-testid="inspiration-quotes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Inspiration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspirationQuotes.map((quote, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg border border-gray-700 hover:border-red-600 transition-colors">
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <cite className="text-red-600 font-semibold block text-right text-sm">
                  — {quote.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Societal Impact */}
      <section className="py-20 bg-black" data-testid="society-quotes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Our Mission for Society</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {societyQuotes.map((quote, index) => (
              <div key={index} className="bg-gray-900 p-10 rounded-lg shadow-xl border-l-4 border-red-600">
                <blockquote className="text-gray-300 italic mb-6 text-xl leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <cite className="text-white font-semibold block text-right text-lg">
                  — {quote.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quotes;
