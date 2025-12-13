import React, { useState, useRef, useEffect } from 'react';
import { Star, Phone, Mail, MapPin, Menu, X, Heart, MessageCircle, Search, ChevronDown, Package, Sparkles, Clock, CheckCircle, ArrowRight, Zap, Award, Users } from 'lucide-react';
import emailjs from '@emailjs/browser';
import products from './products';

const EMAIL_CONFIG = {
  serviceId: 'service_7g8ttma',
  templateId: 'template_wv2qp3k',
  publicKey: 'EA6Y820QCQ1ZhR1Vx'
};

const sendEmail = async (formData) => {
  try {
    // 1️⃣ Send Thank You mail to USER
    await emailjs.send(
      'service_7g8ttma',
      'template_wv2qp3k',
      {
        to_email: formData.email,
        user_name: formData.name,
        user_phone: formData.phone,
        decoration_type: formData.decoration,
      },
      'EA6Y820QCQ1ZhR1Vx'
    );

    // 2️⃣ Send details mail to YOU (Admin)
    await emailjs.send(
      'service_7g8ttma',
      'template_npy5olb',
      {
        to_email: 'tapasvkaushal@gmail.com',
        user_name: formData.name,
        user_phone: formData.phone,
        decoration_type: formData.decoration,
        user_email: formData.email
      },
      'EA6Y820QCQ1ZhR1Vx'
    );

    console.log('Both emails sent!');
  } catch (err) {
    console.error('Error sending emails:', err);
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDecorDropdown, setShowDecorDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const savedScrollPosition = useRef(0);
  const [fromViewMore, setFromViewMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
  const filteredProducts = sortedProducts.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (productId) => {
    setFavorites(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveScrollAndOpenCategory = (category) => {
    savedScrollPosition.current = window.scrollY;
    setSelectedCategory(category);
    scrollToTop();
  };

  const closeCategoryAndRestore = () => {
    setSelectedCategory('');
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition.current, behavior: 'smooth' });
    }, 0);
  };

  const handleViewMore = (category) => {
    savedScrollPosition.current = window.scrollY;
    setFromViewMore(true);
    setCurrentPage('decorations');
    setSearchQuery(category);
    scrollToTop();
  };

  const handleBackFromDecorations = () => {
    setFromViewMore(false);
    setCurrentPage('home');
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition.current, behavior: 'smooth' });
    }, 0);
  };

  const Navbar = () => (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => { setCurrentPage('home'); setSelectedCategory(''); scrollToTop(); }}>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Dazzle2Bliss
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => { setCurrentPage('home'); setSelectedCategory(''); scrollToTop(); }} className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-all font-medium rounded-lg hover:bg-pink-50">Home</button>
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-all font-medium flex items-center rounded-lg hover:bg-pink-50">
                Decorations <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-2">
                  <button onClick={() => { setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery(''); scrollToTop(); }} className="block w-full text-left px-4 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all rounded-xl font-semibold mb-2 transform hover:scale-105">All Decorations</button>
                  {[
                    { name: 'Birthday', value: 'birthday', icon: '🎂' },
                    { name: 'Baby Shower', value: 'baby-shower', icon: '👶' },
                    { name: 'Anniversary', value: 'anniversary', icon: '💑' },
                    { name: 'Theme Decor', value: 'theme', icon: '🎨' }
                  ].map(item => (
                    <button key={item.value} onClick={() => { setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery(item.value); scrollToTop(); }} className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all rounded-lg">
                      <span className="mr-3 text-xl">{item.icon}</span>
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => { setCurrentPage('about'); scrollToTop(); }} className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-all font-medium rounded-lg hover:bg-pink-50">About</button>
            <button onClick={() => { setCurrentPage('contact'); scrollToTop(); }} className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-all font-medium rounded-lg hover:bg-pink-50">Contact</button>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-full border border-pink-200">
              <Phone className="w-5 h-5 text-pink-600" />
              <span className="text-gray-900 font-semibold">8510011234</span>
            </div>
          </div>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-xl hover:bg-pink-50 transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn" onClick={() => { setMobileMenuOpen(false); setShowDecorDropdown(false); }}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl animate-slideInRight" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 space-y-2 overflow-y-auto h-full">
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Dazzle2Bliss</h3>
                  <p className="text-sm text-gray-500">Event Decorations</p>
                </div>
              </div>
              <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setCurrentPage('home'); setSelectedCategory(''); scrollToTop(); }} className="flex items-center w-full py-3 px-4 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all font-medium">
                <span className="mr-3 text-xl">🏠</span> Home
              </button>
              <div>
                <button onClick={(e) => { e.stopPropagation(); setShowDecorDropdown(!showDecorDropdown); }} className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all font-medium">
                  <span><span className="mr-3 text-xl">🎨</span> Decorations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDecorDropdown ? 'rotate-180' : ''}`} />
                </button>
                <div className={`ml-8 space-y-1 overflow-hidden transition-all duration-300 ${showDecorDropdown ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery(''); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg">All</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('birthday'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">🎂 Birthday</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('baby-shower'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">👶 Baby Shower</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('anniversary'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">💑 Anniversary</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('theme'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">🎨 Theme Decor</button>
                </div>
              </div>
              <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setCurrentPage('about'); scrollToTop(); }} className="flex items-center w-full py-3 px-4 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all font-medium">
                <span className="mr-3 text-xl">ℹ️</span> About
              </button>
              <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setCurrentPage('contact'); scrollToTop(); }} className="flex items-center w-full py-3 px-4 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all font-medium">
                <span className="mr-3 text-xl">📞</span> Contact
              </button>
              <div className="pt-6 mt-6 border-t border-gray-200">
                <a href="tel:8510011234" className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />8510011234
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => {
      const [formData, setFormData] = useState({ celebration: '', name: '', phone: '', email: '' });
      const [showToast, setShowToast] = useState(false);
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.celebration || !formData.name || !formData.phone) {
          alert('Please fill all fields');
          return;
        }
        try {
          await sendEmail(formData);
          setShowToast(true);
          setFormData({ celebration: '', name: '', phone: '', email: '' });
          setTimeout(() => setShowToast(false), 3000);
        } catch (error) {
          alert('Failed to send. Please try again.');
        }
      };

    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-pink-200 px-4 py-2 rounded-full shadow-lg">
                <Phone className="w-4 h-4 text-pink-600 animate-pulse" />
                <span className="text-sm font-semibold text-gray-900">📞 Call Now: 8510011234</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                Make Every <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Celebration</span> Magical
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert decoration services for birthdays, baby showers, anniversaries, and special moments. Customized designs that bring your vision to life.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button onClick={() => { setCurrentPage('contact'); scrollToTop(); }} className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => { setCurrentPage('decorations'); scrollToTop(); }} className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-pink-200 hover:border-pink-400 hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  View Gallery
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-pink-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-600">Events</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">4.8★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-pink-100 animate-fadeIn animation-delay-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Get ₹500 OFF</h3>
                  <p className="text-sm text-gray-600">Limited time offer</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Celebration Type *</label>
                  <select value={formData.celebration} onChange={(e) => setFormData(prev => ({ ...prev, celebration: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all bg-white" required>
                    <option value="">Select celebration type</option>
                    <option value="birthday">🎂 Birthday</option>
                    <option value="baby-shower">👶 Baby Shower</option>
                    <option value="anniversary">💑 Anniversary</option>
                    <option value="welcome-baby">🍼 Welcome Baby</option>
                    <option value="romantic">💝 Romantic Setup</option>
                    <option value="other">🎨 Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all" required />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  CLAIM OFFER NOW
                </button>
              </form>
            </div>
          </div>
        </div>
        {showToast && <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-slideIn"><p className="font-semibold">✓ Form submitted successfully!</p><p className="text-sm">We'll contact you soon with your ₹500 discount.</p></div>}
      </div>
    );
  };

  const CategoryButtons = () => {
    const categories = [
      { name: 'Birthday', value: 'birthday', icon: '🎂', color: 'from-pink-500 via-rose-500 to-pink-600', bgColor: 'from-pink-50 to-rose-50' },
      { name: 'Baby Shower', value: 'baby-shower', icon: '👶', color: 'from-blue-500 via-cyan-500 to-blue-600', bgColor: 'from-blue-50 to-cyan-50' },
      { name: 'Welcome Baby', value: 'welcome-baby', icon: '🍼', color: 'from-purple-500 via-pink-500 to-purple-600', bgColor: 'from-purple-50 to-pink-50' },
      { name: 'Anniversary', value: 'anniversary', icon: '💑', color: 'from-red-500 via-pink-500 to-red-600', bgColor: 'from-red-50 to-pink-50' }
    ];
    
    return (
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect decoration for your special occasion</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <button key={cat.value} onClick={() => saveScrollAndOpenCategory(cat.value)} className={`group relative bg-gradient-to-br ${cat.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-200`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                  <div className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors">{cat.name}</div>
                  <div className="text-sm text-gray-600 group-hover:text-white/90 transition-colors mt-1">View Collection</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ProductCard = ({ product }) => {
    const isFavorite = favorites.includes(product.id);
    
    return (
      <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
        <div className="relative overflow-hidden">
          {product.discount && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
              {product.discount}% OFF
            </div>
          )}
          <button onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-transform">
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
          <img src={product.image} alt={product.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" onClick={() => { setSelectedProduct(product); setCurrentPage('product'); scrollToTop(); }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6" onClick={() => { setSelectedProduct(product); setCurrentPage('product'); scrollToTop(); }}>
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 font-medium">({product.ratingCount})</span>
          </div>
          
          <h3 className="font-bold text-gray-900 mb-2 text-lg line-clamp-2 group-hover:text-pink-600 transition-colors">{product.name}</h3>
          
          {product.subCategory && (
            <p className="text-sm text-pink-600 font-medium mb-3">{product.subCategory}</p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
              )}
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ProductSection = ({ title, category, limit = 6, showViewMore = false }) => {
    const filtered = category ? sortedProducts.filter(p => p.category === category).slice(0, limit) : sortedProducts.slice(0, limit);
    
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{title}</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          
          {showViewMore && (
            <div className="flex justify-center mt-12">
              <button onClick={() => handleViewMore(category)} className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center space-x-2">
                <span>View All Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const SearchBar = () => {
    const [localSearch, setLocalSearch] = useState(searchQuery);
    
    return (
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <input type="text" placeholder="Search for decorations, themes, occasions..." value={localSearch} onChange={(e) => setLocalSearch(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && setSearchQuery(localSearch)} onBlur={() => setSearchQuery(localSearch)} className="w-full pl-14 pr-14 py-5 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-all text-gray-700 text-lg shadow-lg bg-white" />
          {localSearch && (
            <button onClick={() => { setLocalSearch(''); setSearchQuery(''); }} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-4 text-center text-gray-600 font-medium">
            Found <span className="text-pink-600 font-bold">{filteredProducts.length}</span> decoration{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    );
  };

  const ProductDetails = () => {
    const [userRating, setUserRating] = useState(0);
    const relatedProducts = products.filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id).slice(0, 4);
    
    const handleWhatsApp = () => {
      const message = `Hi! I'm interested in ${selectedProduct.name} (₹${selectedProduct.price})`;
      window.open(`https://wa.me/918510011234?text=${encodeURIComponent(message)}`, '_blank');
    };
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => { setCurrentPage('home'); scrollToTop(); }} className="mb-8 text-pink-600 hover:text-pink-700 font-semibold flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Back to Home</span>
          </button>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">
              <div className="space-y-6">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full rounded-2xl shadow-xl" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{selectedProduct.name}</h1>
                  {selectedProduct.subCategory && (
                    <p className="text-xl text-pink-600 font-semibold mb-4">{selectedProduct.subCategory}</p>
                  )}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 ${i < Math.floor(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-3 text-gray-600 font-medium">({selectedProduct.ratingCount} reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
                  <span className="text-5xl font-extrabold text-pink-600">₹{selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (
                    <>
                      <span className="text-3xl text-gray-400 line-through">₹{selectedProduct.originalPrice}</span>
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Save {selectedProduct.discount}%
                      </span>
                    </>
                  )}
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">{selectedProduct.description}</p>
                
                <button onClick={handleWhatsApp} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3">
                  <MessageCircle className="w-6 h-6" />
                  <span>Chat on WhatsApp</span>
                </button>
                
                <div className="border-t-2 border-gray-200 pt-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Rate this product:</h3>
                  <div className="flex space-x-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => setUserRating(star)} className="hover:scale-125 transition-transform">
                        <Star className={`w-10 h-10 ${star <= userRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-200 px-8 md:px-12 py-12 bg-gradient-to-br from-gray-50 to-white">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 flex items-center">
                <Sparkles className="w-10 h-10 mr-4 text-pink-500" />
                Product Details
              </h2>
              
              <div className="space-y-8">
                <p className="text-gray-700 text-lg leading-relaxed">{selectedProduct.fullDescription}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl border-2 border-pink-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle className="w-7 h-7 mr-3 text-pink-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {selectedProduct.features && selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-pink-500 mr-3 mt-1 text-xl">✓</span>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Package className="w-6 h-6 mr-3 text-blue-600" />
                        What's Included
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{selectedProduct.includes}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Clock className="w-6 h-6 mr-3 text-green-600" />
                        Setup Time
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{selectedProduct.setupTime}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 p-8 rounded-2xl border-2 border-pink-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Decoration?</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our professional team ensures every detail is perfect, from initial consultation to final setup. We use only premium quality materials and work closely with you to bring your vision to life. With years of experience and hundreds of satisfied clients, we guarantee a stress-free experience and stunning results that will make your celebration truly memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map(product => <ProductCard key={product.id} product={product} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const CategoryProducts = () => {
    const categoryProducts = sortedProducts.filter(p => p.category === selectedCategory);
    const categoryNames = {
      'birthday': 'Birthday Decorations',
      'baby-shower': 'Baby Shower Decorations',
      'welcome-baby': 'Welcome Baby Decorations',
      'anniversary': 'Anniversary Decorations'
    };
    
    return (
      <div className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">{categoryNames[selectedCategory]}</h2>
            <button onClick={closeCategoryAndRestore} className="text-pink-600 hover:text-pink-700 font-bold flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <X className="w-5 h-5" />
              <span>Close</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    );
  };

  const ContactForm = () => {
    const [localFormData, setLocalFormData] = useState({ celebration: '', name: '', phone: '', email: '' });

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!localFormData.celebration || !localFormData.name || !localFormData.phone || !localFormData.email) {
        alert('Please fill all fields');
        return;
      }

      try {
        await sendEmail({
          decoration: localFormData.celebration,
          name: localFormData.name,
          phone: localFormData.phone,
          email: localFormData.email,
        });
        setShowToast(true);
        setLocalFormData({ celebration: '', name: '', phone: '', email: '' });
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        alert('Failed to send. Please try again.');
        console.error(error);
      }
    };
    
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Celebration Type *</label>
            <select value={localFormData.celebration} onChange={(e) => setLocalFormData(prev => ({ ...prev, celebration: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all" required>
              <option value="">Select type</option>
              <option value="birthday">Birthday</option>
              <option value="baby-shower">Baby Shower</option>
              <option value="anniversary">Anniversary</option>
              <option value="welcome-baby">Welcome Baby</option>
              <option value="romantic">Romantic Setup</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Name *</label>
            <input type="text" value={localFormData.name} onChange={(e) => setLocalFormData(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all" required />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Phone *</label>
            <input type="tel" value={localFormData.phone} onChange={(e) => setLocalFormData(prev => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all" required />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Email *</label>
            <input type="email" value={localFormData.email} onChange={(e) => setLocalFormData(prev => ({ ...prev, email: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all" required />
          </div>
          <button type="submit" className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Submit Inquiry
          </button>
        </form>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Dazzle2Bliss</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">Transform your occasions into memorable celebrations with our premium decoration services.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              <button onClick={() => { setCurrentPage('home'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">Home</button>
              <button onClick={() => { setCurrentPage('decorations'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">Decorations</button>
              <button onClick={() => { setCurrentPage('about'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">About</button>
              <button onClick={() => { setCurrentPage('contact'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">Contact</button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <div className="space-y-3 text-gray-400">
              <p>Birthday Decorations</p>
              <p>Baby Shower</p>
              <p>Anniversary Setups</p>
              <p>Theme Decorations</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span>8510011234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>tapasvkaushal@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Dazzle2Bliss. All rights reserved. Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideIn { animation: slideIn 0.4s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.3s ease-out; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {isLoading && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-pink-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-5 rounded-2xl shadow-2xl z-50 animate-slideIn">
          <p className="font-bold text-lg flex items-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            Success!
          </p>
          <p className="text-sm mt-1">We'll contact you soon with your discount.</p>
        </div>
      )}

      <Navbar />
      
      {currentPage === 'home' && !selectedCategory && (
        <>
          <HeroSection />
          <ProductSection title="🌟 Top Selling Decorations" limit={6} />
          <CategoryButtons />
          <ProductSection title="🎉 Party Decoration" category="baby-shower" limit={3} showViewMore={true} />
          <ProductSection title="🎨 Theme Decoration" category="theme" limit={3} showViewMore={true} />
        </>
      )}
      
      {currentPage === 'home' && selectedCategory && <CategoryProducts />}
      
      {currentPage === 'product' && selectedProduct && <ProductDetails />}
      
      {currentPage === 'decorations' && (
        <div className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {fromViewMore && (
              <button onClick={handleBackFromDecorations} className="mb-8 text-pink-600 hover:text-pink-700 font-bold flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <ArrowRight className="w-5 h-5 rotate-180" />
                <span>Back</span>
              </button>
            )}
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">All Decorations</h1>
            <p className="text-xl text-gray-600 text-center mb-12">Discover our complete collection</p>
            <SearchBar />
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-xl mb-4">No decorations found matching "{searchQuery}"</p>
                <button onClick={() => setSearchQuery('')} className="text-pink-600 hover:text-pink-700 font-semibold text-lg">Clear search</button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {currentPage === 'about' && (
        <div className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">About Dazzle2Bliss</h1>
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 space-y-8 border border-gray-100">
              <p className="text-xl text-gray-700 leading-relaxed">
                Welcome to Dazzle2Bliss, your premier destination for creating unforgettable celebration experiences in Delhi NCR. We specialize in transforming ordinary spaces into extraordinary memories through our bespoke decoration services.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                With years of experience and a passion for perfection, we've helped countless families celebrate life's most precious moments - from welcoming new babies to milestone birthdays, romantic proposals to grand anniversaries.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                  <div className="text-5xl font-extrabold text-pink-600 mb-3">500+</div>
                  <div className="text-gray-600 font-semibold">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                  <div className="text-5xl font-extrabold text-purple-600 mb-3">1000+</div>
                  <div className="text-gray-600 font-semibold">Events Decorated</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl">
                  <div className="text-5xl font-extrabold text-pink-600 mb-3">4.8⭐</div>
                  <div className="text-gray-600 font-semibold">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentPage === 'contact' && (
        <div className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">Contact Us</h1>
            <p className="text-xl text-gray-600 text-center mb-12">Let's make your celebration unforgettable</p>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 p-10 md:p-12">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We'd love to hear from you! Reach out to us for any inquiries or to book your next celebration.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-5">
                      <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-2xl">
                        <Phone className="w-7 h-7 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                        <p className="text-gray-600 text-lg">8510011234</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5">
                      <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl">
                        <Mail className="w-7 h-7 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                        <p className="text-gray-600 text-lg">tapasvkaushal@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-5">
                      <div className="bg-gradient-to-br from-pink-100 to-red-200 p-4 rounded-2xl">
                        <MapPin className="w-7 h-7 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Location</h3>
                        <p className="text-gray-600 text-lg">Serving across Delhi NCR</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}


export default App;