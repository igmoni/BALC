import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Briefcase, 
  Code, 
  Palette, 
  PenTool, 
  Camera, 
  Music,
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  CheckCircle,
  Users,
  Globe,
  Clock,
  Shield,
  TrendingUp,
  Award
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [yearlyPricing, setYearlyPricing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({ freelancers: 0, projects: 0, clients: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('intermediate');

  // Scroll to top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Stats counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        freelancers: prev.freelancers < 50000 ? prev.freelancers + 1000 : prev.freelancers,
        projects: prev.projects < 100000 ? prev.projects + 2000 : prev.projects,
        clients: prev.clients < 25000 ? prev.clients + 500 : prev.clients
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const categories = [
    { icon: <Code className="w-6 h-6" />, name: 'Development', count: '2,534 Jobs' },
    { icon: <Palette className="w-6 h-6" />, name: 'Design', count: '1,826 Jobs' },
    { icon: <PenTool className="w-6 h-6" />, name: 'Writing', count: '1,294 Jobs' },
    { icon: <Camera className="w-6 h-6" />, name: 'Photography', count: '952 Jobs' },
    { icon: <Music className="w-6 h-6" />, name: 'Music', count: '847 Jobs' },
    { icon: <Briefcase className="w-6 h-6" />, name: 'Business', count: '1,643 Jobs' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
      content: 'This platform transformed my freelance career. I\'ve connected with amazing clients and doubled my income in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      company: 'Freelance Pro',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
      content: 'The quality of clients and projects here is outstanding. The platform\'s tools make project management a breeze.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Content Strategist',
      company: 'ContentLab',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
      content: 'I love how easy it is to find quality projects that match my expertise. The payment protection gives me peace of mind.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payments',
      description: 'Protected payments for every project with our escrow system'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Verified Clients',
      description: 'Work with verified businesses and established startups'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Opportunities',
      description: 'Access projects from clients around the world'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Schedule',
      description: 'Choose projects that fit your availability'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: yearlyPricing ? 99 : 9,
      features: ['5 job posts', 'Basic support', 'Profile listing', 'Project tracking']
    },
    {
      name: 'Professional',
      price: yearlyPricing ? 199 : 19,
      features: ['15 job posts', '24/7 support', 'Featured profile', 'Advanced analytics', 'Priority matching'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: yearlyPricing ? 299 : 29,
      features: ['Unlimited posts', 'Priority support', 'Custom features', 'API access', 'Dedicated account manager']
    }
  ];

  const calculateEarnings = () => {
    const baseRates = {
      beginner: 25,
      intermediate: 50,
      expert: 100
    };
    const rate = baseRates[selectedSkillLevel];
    return {
      hourly: rate,
      monthly: rate * 160, // 40 hours per week * 4 weeks
      yearly: rate * 160 * 12
    };
  };

  const earnings = calculateEarnings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Find Your Perfect Freelance Match
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with top talent from around the world
          </p>
          <div className="max-w-2xl mx-auto relative mb-12">
            <input
              type="text"
              placeholder="Search for skills or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105">
              Find Work
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-all border-2 border-indigo-600">
              Hire Talent
            </button>
          </div>
        </div>
      </section>

      {/* Featured Clients Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Microsoft_logo.svg" alt="Microsoft" className="h-8" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                {stats.freelancers.toLocaleString()}+
              </h3>
              <p className="text-gray-600">Freelancers</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                {stats.projects.toLocaleString()}+
              </h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                {stats.clients.toLocaleString()}+
              </h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We're on a mission to empower freelancers and businesses worldwide by creating meaningful connections that drive success and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-gray-500 text-sm">{category.count}</p>
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700">
                    View Jobs →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Calculate Your Potential Earnings</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select your skill level:
              </label>
              <div className="flex gap-4">
                {['beginner', 'intermediate', 'expert'].map((level) => (
                  <button
                    key={level}
                    className={`px-6 py-2 rounded-full capitalize ${
                      selectedSkillLevel === level
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedSkillLevel(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-2">Hourly Rate</p>
                <p className="text-3xl font-bold text-indigo-600">${earnings.hourly}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-2">Monthly Potential</p>
                <p className="text-3xl font-bold text-indigo-600">${earnings.monthly}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-2">Yearly Potential</p>
                <p className="text-3xl font-bold text-indigo-600">${earnings.yearly}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    currentTestimonial === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                alt="Success Story 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">From Freelancer to Agency Owner</h3>
                <p className="text-gray-600 mb-4">
                  "Started as a solo developer, now running a team of 15 professionals serving clients worldwide."
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">Read More →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800"
                alt="Success Story 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Building a Global Brand</h3>
                <p className="text-gray-600 mb-4">
                  "Leveraged the platform to build a six-figure design business with clients in 20+ countries."
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">Read More →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800"
                alt="Success Story 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Career Transformation</h3>
                <p className="text-gray-600 mb-4">
                  "Transitioned from corporate job to successful freelance consultant in just 6 months."
                </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-gray-100 p-1 rounded-full">
              <button
                className={`px-6 py-2 rounded-full ${!yearlyPricing ? 'bg-white shadow-md' : ''}`}
                onClick={() => setYearlyPricing(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full ${yearlyPricing ? 'bg-white shadow-md' : ''}`}
                onClick={() => setYearlyPricing(true)}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg ${
                  plan.popular ? 'shadow-xl ring-2 ring-indigo-600' : 'shadow-md'
                } hover:shadow-xl transition-all`}
              >
                {plan.popular && (
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm absolute -mt-12">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-500">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Freelance Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of successful freelancers today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
              Create Account
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                />
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center">
              <p>&copy; 2024 Freelance Marketplace. All rights reserved.</p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className={`fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
