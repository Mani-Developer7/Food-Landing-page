
import './Contact.css';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactBar = () => {
  return (
    <section className="bg-white md:px-12 lg:px-24 flex justify-center h-48 mb-7 mt-20">
      <div className="max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-40 mt-10" >
          {/* Left: Title + Description */}
          <div className='mb-16'>
            <h2 className="text-lg font-bold text-gray-900">
              Contact Us From Here
            </h2>
            <p className="text-sm text-gray-600 leading-5">
              You can contact us from here, you can write to us, call us or
              visit our service center, we will gladly assist you.
            </p>
          </div>

          {/* Right: Contact Info + Button */}
          <div className="flex flex-col gap-3 text-sm text-gray-700 md:items-start">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gray-500" />
              <span>Telephone: 123 - 456 - 789</span>
            </div>
            <div className="flex  gap-2">
              <Mail size={14} className="text-gray-500" />
              <span>Email: delivery@email.com</span>
            </div>
            <div className="flex  gap-2">
              <MapPin size={14} className="text-gray-500" />
              <span>Location: Planet Earth</span>
            </div>

            {/* CTA Button */}
          </div>
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium text-sm px-5 py-2 rounded-full transition-colors shadow-sm mt-2">
              Contact Us
            </button>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;