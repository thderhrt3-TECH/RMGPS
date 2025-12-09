import React from 'react';

const News = () => {
  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 py-20" data-testid="news-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed about the latest developments, events, and stories from our community
          </p>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-20 bg-white" data-testid="news-articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">December 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complex Construction Update</h3>
                <p className="text-gray-600 mb-4">
                  Progress continues on our state-of-the-art facility. See the latest developments in our construction timeline.
                </p>
                <a href="#" className="text-black font-semibold hover:underline">Read More →</a>
              </div>
            </article>

            {/* News Article 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">November 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Program Launch</h3>
                <p className="text-gray-600 mb-4">
                  We're excited to announce the launch of our first youth sports programs starting in January 2026.
                </p>
                <a href="#" className="text-black font-semibold hover:underline">Read More →</a>
              </div>
            </article>

            {/* News Article 3 */}
            <article className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">October 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Partnership</h3>
                <p className="text-gray-600 mb-4">
                  Local businesses join forces with RMGPS Complex to support youth development in Heber Valley.
                </p>
                <a href="#" className="text-black font-semibold hover:underline">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;