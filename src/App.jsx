import React, { useState, useRef } from 'react';
import { Star, Phone, Mail, MapPin, Menu, X, Heart, MessageCircle, Search, ChevronDown, Package, Sparkles, Clock, CheckCircle } from 'lucide-react';
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDecorDropdown, setShowDecorDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const savedScrollPosition = useRef(0);
  const [fromViewMore, setFromViewMore] = useState(false);

  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
  const filteredProducts = sortedProducts.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRating = (productId, newRating) => {
    console.log('Product rated:', productId, newRating);
  };

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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedCategory(''); scrollToTop(); }}>Dazzle2Bliss</h1>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => { setCurrentPage('home'); setSelectedCategory(''); scrollToTop(); }} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Home</button>
            <div className="relative group">
              <button className="text-gray-700 hover:text-pink-500 transition-colors font-medium flex items-center">Decorations <ChevronDown className="w-4 h-4 ml-1" /></button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button onClick={() => { setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery(''); scrollToTop(); }} className="block w-full text-left px-4 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-colors rounded-t-lg font-semibold">All Decorations</button>
                <button onClick={() => { setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('birthday'); scrollToTop(); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors">Birthday</button>
                <button onClick={() => { setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('baby-shower'); scrollToTop(); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors">Baby Shower</button>
                <button onClick={() => { setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('anniversary'); scrollToTop(); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors">Anniversary</button>
                <button onClick={() => { setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('theme'); scrollToTop(); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors rounded-b-lg">Theme Decor</button>
              </div>
            </div>
            <button onClick={() => { setCurrentPage('about'); scrollToTop(); }} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">About</button>
            <button onClick={() => { setCurrentPage('contact'); scrollToTop(); }} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Contact</button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Phone className="w-5 h-5 text-pink-500" />
            <span className="text-gray-700 font-medium">8510011234</span>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black bg-opacity-50 z-40" onClick={() => { setMobileMenuOpen(false); setShowDecorDropdown(false); }}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 space-y-2">
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">D</div>
                <div><h3 className="font-bold text-gray-900">Dazzle2Bliss</h3><p className="text-sm text-gray-500">Event Decorations</p></div>
              </div>
              <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setCurrentPage('home'); setSelectedCategory(''); scrollToTop(); }} className="flex items-center w-full py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all"><span className="mr-3">🏠</span> Home</button>
              <div>
                <button onClick={(e) => { e.stopPropagation(); setShowDecorDropdown(!showDecorDropdown); }} className="flex items-center justify-between w-full py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all"><span><span className="mr-3">🎨</span> Decorations</span><ChevronDown className={`w-4 h-4 transition-transform ${showDecorDropdown ? 'rotate-180' : ''}`} /></button>
                <div className={`ml-8 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${showDecorDropdown ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery(''); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm font-semibold text-pink-600 bg-pink-50 rounded">All</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('birthday'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">Birthday</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('baby-shower'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">Baby Shower</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('anniversary'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">Anniversary</button>
                  <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setFromViewMore(false); setCurrentPage('decorations'); setSearchQuery('theme'); scrollToTop(); }} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-pink-600">Theme Decor</button>
                </div>
              </div>
              <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setCurrentPage('about'); scrollToTop(); }} className="flex items-center w-full py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all"><span className="mr-3">ℹ️</span> About</button>
              <button onClick={() => { setShowDecorDropdown(false); setMobileMenuOpen(false); setCurrentPage('contact'); scrollToTop(); }} className="flex items-center w-full py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all"><span className="mr-3">📞</span> Contact</button>
              <div className="pt-6 mt-6 border-t">
                <a href="tel:8510011234" className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"><Phone className="w-5 h-5 mr-2" />8510011234</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => {
    const [localFormData, setLocalFormData] = useState({ celebration: '', name: '', phone: '', email: '' });
    const [showToast, setShowToast] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!localFormData.celebration || !localFormData.name || !localFormData.phone) {
        alert('Please fill all fields');
        return;
      }
      try {
        await sendEmail(localFormData);
        setShowToast(true);
        setLocalFormData({ celebration: '', name: '', phone: '', email: '' });
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        alert('Failed to send. Please try again.');
      }
    };
    return (
      <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">📞 8510011234</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Birthday, Welcome Baby, Baby Shower and Romantic Decor Specialists</h1>
              <p className="text-lg text-gray-600">We provide customise decor as per your space. Package can be selected as per the decor requirements.</p>
              <button onClick={() => { setCurrentPage('contact'); scrollToTop(); }} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">Contact Us</button>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit the form to get ₹500 OFF</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-2">What are you celebrating? *</label><select value={localFormData.celebration} onChange={(e) => setLocalFormData(prev => ({ ...prev, celebration: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors" required><option value="">Select celebration type</option><option value="birthday">Birthday</option><option value="baby-shower">Baby Shower</option><option value="anniversary">Anniversary</option><option value="welcome-baby">Welcome Baby</option><option value="romantic">Romantic Setup</option><option value="other">Other</option></select></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Your name *</label><input type="text" value={localFormData.name} onChange={(e) => setLocalFormData(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors" required /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label><input type="tel" value={localFormData.phone} onChange={(e) => setLocalFormData(prev => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors" required /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Email *</label><input type="email" value={localFormData.email} onChange={(e) => setLocalFormData(prev => ({ ...prev, email: e.target.value }))} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors" required /></div>
                <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">SUBMIT</button>
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
      { name: 'Birthday', value: 'birthday', icon: '🎂', color: 'from-pink-500 to-rose-500' },
      { name: 'Baby Shower', value: 'baby-shower', icon: '👶', color: 'from-blue-500 to-cyan-500' },
      { name: 'Welcome Baby', value: 'welcome-baby', icon: '🍼', color: 'from-purple-500 to-pink-500' },
      { name: 'Anniversary', value: 'anniversary', icon: '💑', color: 'from-red-500 to-pink-500' }
    ];
    return (
      <div className="py-12 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <button key={cat.value} onClick={() => saveScrollAndOpenCategory(cat.value)} className={`bg-gradient-to-r ${cat.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}><div className="text-4xl mb-3">{cat.icon}</div><div className="font-bold text-lg">{cat.name}</div></button>
            ))}
          </div>
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
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{categoryNames[selectedCategory]}</h2>
            <button onClick={closeCategoryAndRestore} className="text-pink-600 hover:text-pink-700 font-medium flex items-center"><X className="w-5 h-5 mr-1" /> Close</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    );
  };

  const SearchBar = () => {
    const [localSearch, setLocalSearch] = useState(searchQuery);
    return (
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input type="text" placeholder="Search decorations..." value={localSearch} onChange={(e) => setLocalSearch(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && setSearchQuery(localSearch)} onBlur={() => setSearchQuery(localSearch)} className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-gray-700" />
          {localSearch && <button onClick={() => { setLocalSearch(''); setSearchQuery(''); }} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>}
        </div>
        {searchQuery && <p className="mt-3 text-sm text-gray-600">Found {filteredProducts.length} decoration{filteredProducts.length !== 1 ? 's' : ''}</p>}
      </div>
    );
  };

  const ProductCard = ({ product }) => {
    const isFavorite = favorites.includes(product.id);
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
        <div className="relative">
          {product.discount && <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">-{product.discount}%</div>}
          <button onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }} className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"><Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} /></button>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" onClick={() => { setSelectedProduct(product); setCurrentPage('product'); scrollToTop(); }} />
        </div>
        <div className="p-5" onClick={() => { setSelectedProduct(product); setCurrentPage('product'); scrollToTop(); }}>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />)}
            <span className="ml-2 text-sm text-gray-600">({product.ratingCount})</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          {product.subCategory && <p className="text-xs text-pink-600 mb-2">{product.subCategory}</p>}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
            {product.originalPrice && <span className="text-gray-400 line-through">₹{product.originalPrice}</span>}
          </div>
        </div>
      </div>
    );
  };

  const ProductSection = ({ title, category, limit = 6, showViewMore = false }) => {
    const filtered = category ? sortedProducts.filter(p => p.category === category).slice(0, limit) : sortedProducts.slice(0, limit);
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          {showViewMore && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => handleViewMore(category)} 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                View More
              </button>
            </div>
          )}
        </div>
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
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => { setCurrentPage('home'); scrollToTop(); }} className="mb-6 text-pink-600 hover:text-pink-700 font-medium flex items-center">← Back to Home</button>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
              <div><img src={selectedProduct.image} alt={selectedProduct.name} className="w-full rounded-xl shadow-lg" /></div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h1>
                  {selectedProduct.subCategory && <p className="text-lg text-pink-600 mb-4">{selectedProduct.subCategory}</p>}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />)}
                    <span className="ml-3 text-gray-600">({selectedProduct.ratingCount} reviews)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-pink-600">₹{selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (<><span className="text-2xl text-gray-400 line-through">₹{selectedProduct.originalPrice}</span><span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-{selectedProduct.discount}% OFF</span></>)}
                </div>
                <p className="text-gray-600 text-lg">{selectedProduct.description}</p>
                <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"><MessageCircle className="w-5 h-5" /><span>Chat on WhatsApp</span></button>
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-3">Rate this product:</h3>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => { setUserRating(star); handleRating(selectedProduct.id, star); }} className="hover:scale-110 transition-transform"><Star className={`w-8 h-8 ${star <= userRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} /></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 px-6 md:px-10 py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Sparkles className="w-8 h-8 mr-3 text-pink-500" />Product Description</h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">{selectedProduct.fullDescription}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><CheckCircle className="w-6 h-6 mr-2 text-pink-600" />Key Features</h3>
                    <ul className="space-y-3">
                      {selectedProduct.features && selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700"><span className="text-pink-500 mr-2 mt-1">✓</span><span>{feature}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><Package className="w-6 h-6 mr-2 text-blue-600" />What's Included</h3>
                      <p className="text-gray-700">{selectedProduct.includes}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><Clock className="w-6 h-6 mr-2 text-green-600" />Setup Time</h3>
                      <p className="text-gray-700">{selectedProduct.setupTime}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose This Decoration?</h3>
                  <p className="text-gray-700 leading-relaxed">Our professional team ensures every detail is perfect, from initial consultation to final setup. We use only premium quality materials and work closely with you to bring your vision to life. With years of experience and hundreds of satisfied clients, we guarantee a stress-free experience and stunning results that will make your celebration truly memorable.</p>
                </div>
              </div>
            </div>
          </div>
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => <ProductCard key={product.id} product={product} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div><h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Dazzle2Bliss</h3><p className="text-gray-400">Transform your occasions into memorable celebrations with our premium decoration services.</p></div>
          <div><h4 className="font-semibold mb-4">Quick Links</h4><div className="space-y-2"><button onClick={() => { setCurrentPage('home'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">Home</button><button onClick={() => { setCurrentPage('decorations'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">Decorations</button><button onClick={() => { setCurrentPage('about'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">About</button><button onClick={() => { setCurrentPage('contact'); scrollToTop(); }} className="block text-gray-400 hover:text-pink-400 transition-colors">Contact</button></div></div>
          <div><h4 className="font-semibold mb-4">Services</h4><div className="space-y-2 text-gray-400"><p>Birthday Decorations</p><p>Baby Shower</p><p>Anniversary Setups</p><p>Theme Decorations</p></div></div>
          <div><h4 className="font-semibold mb-4">Contact Us</h4><div className="space-y-3 text-gray-400"><div className="flex items-center space-x-2"><Phone className="w-4 h-4" /><span>8510011234</span></div><div className="flex items-center space-x-2"><Mail className="w-4 h-4" /><span>tapasvkaushal@gmail.com</span></div><div className="flex items-center space-x-2"><MapPin className="w-4 h-4" /><span>Delhi NCR, India</span></div></div></div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>© 2025 Dazzle2Bliss. All rights reserved.</p></div>
      </div>
    </footer>
  );

  const ContactForm = () => {
    const [localFormData, setLocalFormData] = useState({ celebration: '', name: '', phone: '', email: '' });
    const [showToast, setShowToast] = useState(false);

    const celebrationToDecoration = {
      birthday: "Birthday Decoration",
      "baby-shower": "Baby Shower Decoration",
      anniversary: "Anniversary Decoration",
      "welcome-baby": "Welcome Baby Decoration",
      romantic: "Romantic Setup Decoration",
      other: "Other Decoration",
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!localFormData.celebration || !localFormData.name || !localFormData.phone || !localFormData.email) {
        alert('Please fill all fields');
        return;
      }

      const decorationType = celebrationToDecoration[localFormData.celebration] || "Other Decoration";

      const emailData = {
        decoration_type: decorationType,
        user_name: localFormData.name,
        user_phone: localFormData.phone,
        user_email: localFormData.email,
      };

      try {
        await sendEmail(emailData);
        setShowToast(true);
        setLocalFormData({ celebration: '', name: '', phone: '', email: '' });
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        alert('Failed to send. Please try again.');
        console.error(error);
      }
    };

    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">What are you celebrating?</label>
            <select
              value={localFormData.celebration}
              onChange={(e) => setLocalFormData(prev => ({ ...prev, celebration: e.target.value }))}
              className="w-full px-4 py-3 border rounded-lg focus:border-pink-500 focus:outline-none"
              required
            >
              <option value="">Select celebration type</option>
              <option value="birthday">Birthday</option>
              <option value="baby-shower">Baby Shower</option>
              <option value="anniversary">Anniversary</option>
              <option value="welcome-baby">Welcome Baby</option>
              <option value="romantic">Romantic Setup</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              value={localFormData.name}
              onChange={(e) => setLocalFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 border rounded-lg focus:border-pink-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              value={localFormData.phone}
              onChange={(e) => setLocalFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 border rounded-lg focus:border-pink-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={localFormData.email}
              onChange={(e) => setLocalFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 border rounded-lg focus:border-pink-500 focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all">
            Submit
          </button>
        </form>
        {showToast && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-slideIn">
            <p className="font-semibold">✓ Form submitted successfully!</p>
            <p className="text-sm">We'll contact you soon.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes slideIn{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slideInRight{from{transform:translateX(100%)}to{transform:translateX(0)}}.animate-fadeIn{animation:fadeIn .3s ease-in}.animate-slideIn{animation:slideIn .3s ease-out}.animate-slideInRight{animation:slideInRight .3s ease-out}.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}`}</style>
      <Navbar />
      {currentPage === 'home' && !selectedCategory && (
        <>
          <HeroSection />
          <ProductSection title="Top Selling" limit={6} />
          <CategoryButtons />
          <ProductSection title="Party Decoration" category="baby-shower" limit={3} showViewMore={true} />
          <ProductSection title="Theme Decoration" category="theme" limit={3} showViewMore={true} />
        </>
      )}
      {currentPage === 'home' && selectedCategory && <CategoryProducts />}
      {currentPage === 'product' && selectedProduct && <ProductDetails />}
      {currentPage === 'decorations' && (
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {fromViewMore && (
              <button onClick={handleBackFromDecorations} className="mb-6 text-pink-600 hover:text-pink-700 font-medium flex items-center">
                ← Back
              </button>
            )}
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">All Decorations</h1>
            <SearchBar />
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No decorations found matching "{searchQuery}"</p>
                <button onClick={() => setSearchQuery('')} className="mt-4 text-pink-600 hover:text-pink-700 font-medium">Clear search</button>
              </div>
            )}
          </div>
        </div>
      )}
      {currentPage === 'about' && (
        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Dazzle2Bliss</h1>
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">Welcome to Dazzle2Bliss, your premier destination for creating unforgettable celebration experiences in Delhi NCR. We specialize in transforming ordinary spaces into extraordinary memories through our bespoke decoration services.</p>
              <p className="text-lg text-gray-700 leading-relaxed">With years of experience and a passion for perfection, we've helped countless families celebrate life's most precious moments - from welcoming new babies to milestone birthdays, romantic proposals to grand anniversaries.</p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center"><div className="text-4xl font-bold text-pink-600 mb-2">500+</div><div className="text-gray-600">Happy Clients</div></div>
                <div className="text-center"><div className="text-4xl font-bold text-purple-600 mb-2">1000+</div><div className="text-gray-600">Events Decorated</div></div>
                <div className="text-center"><div className="text-4xl font-bold text-pink-600 mb-2">4.8⭐</div><div className="text-gray-600">Average Rating</div></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentPage === 'contact' && (
        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600">We'd love to hear from you! Reach out to us for any inquiries or to book your next celebration.</p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4"><div className="bg-pink-100 p-3 rounded-lg"><Phone className="w-6 h-6 text-pink-600" /></div><div><h3 className="font-semibold text-gray-900">Phone</h3><p className="text-gray-600">8510011234</p></div></div>
                    <div className="flex items-start space-x-4"><div className="bg-purple-100 p-3 rounded-lg"><Mail className="w-6 h-6 text-purple-600" /></div><div><h3 className="font-semibold text-gray-900">Email</h3><p className="text-gray-600">tapasvkaushal@gmail.com</p></div></div>
                    <div className="flex items-start space-x-4"><div className="bg-pink-100 p-3 rounded-lg"><MapPin className="w-6 h-6 text-pink-600" /></div><div><h3 className="font-semibold text-gray-900">Location</h3><p className="text-gray-600">Serving across Delhi NCR</p></div></div>
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