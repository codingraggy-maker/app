import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Bold section header */}
        <div className="mb-20">
          <h2 className="text-8xl md:text-9xl font-bold text-black leading-none mb-6">Let's Talk</h2>
          <div className="w-24 h-1 bg-black mb-6"></div>
          <p className="text-2xl text-gray-600 font-light">Have a project in mind? Let's build something great together.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-sm font-mono uppercase tracking-widest text-black">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-black focus:ring-0 focus:border-black h-14 text-lg"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-mono uppercase tracking-widest text-black">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-black focus:ring-0 focus:border-black h-14 text-lg"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="message" className="text-sm font-mono uppercase tracking-widest text-black">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              className="border-2 border-black focus:ring-0 focus:border-black resize-none text-lg"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="bg-black text-white hover:bg-gray-800 transition-all text-base px-12 py-6 font-mono uppercase tracking-wider"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-3 h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;