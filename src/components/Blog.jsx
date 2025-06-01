import React, { useState } from 'react';
import { blogData } from '../data/blogData.jsx';

function Blog() {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'news', 'insights', 'success stories', 'announcements'];
  
  const filteredPosts = filter === 'all' 
    ? blogData 
    : blogData.filter(post => post.category.toLowerCase() === filter);
  
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog & News</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest news, insights, and stories about our work and impact.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors duration-300 ${
                filter === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full capitalize">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                  </div>
                  <a 
                    href={`/blog/${post.id}`} 
                    className="text-blue-900 hover:text-yellow-500 font-medium transition-colors duration-300 flex items-center"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter sign-up */}
        <div className="mt-16 bg-blue-900 text-white rounded-xl p-8 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-6">Get the latest news, updates, and stories delivered directly to your inbox.</p>
            <form className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;