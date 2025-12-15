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

    // Mock form submission
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
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Have a project in mind? Let's work together.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-mono uppercase tracking-wider text-black">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-black focus:ring-black"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-mono uppercase tracking-wider text-black">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-black focus:ring-black"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-mono uppercase tracking-wider text-black">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="border-gray-300 focus:border-black focus:ring-black resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;