
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

// EmailJS service details
const SERVICE_ID = "service_tf96pix";
const TEMPLATE_ID = "template_7ur3kt9";
const USER_ID = "ofPu-xx0FdzQX9Ko7";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Send email using EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: <Phone size={32} className="text-jamaat-darkGreen" />,
      title: "Phone",
      details: "+27 83 786 5778 (Yusuf Bhabha - Chairman)",
      link: "tel:+27837865778"
    },
    {
      icon: <Mail size={32} className="text-jamaat-darkGreen" />,
      title: "Email",
      details: "kinrossmuslimjamaat@gmail.com",
      link: "mailto:kinrossmuslimjamaat@gmail.com"
    },
    {
      icon: <MapPin size={32} className="text-jamaat-darkGreen" />,
      title: "Address",
      details: "Magnolia St, Evander, 2270, South Africa",
      link: "https://maps.app.goo.gl/XK6vLZA8ZMNu1CWF9"
    },
  ];

  return (
    <>
      <section className="relative bg-jamaat-darkGreen text-white pt-32 pb-16 md:py-32 overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/80">
              Get in touch with Kinross Muslim Jamaat
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, idx) => (
              <Card key={idx} className="border-jamaat-darkGreen/20 bg-white">
                <CardContent className="pt-6 text-center">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:text-jamaat-darkGreen transition-colors"
                  >
                    <div className="mx-auto mb-4 flex justify-center">
                      <div className="p-2 rounded-full bg-jamaat-silver">{item.icon}</div>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 break-words">{item.details}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-jamaat-darkGreen/20 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-800">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Subject of your message"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message here..."
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Button 
                          type="submit" 
                          className="w-full bg-jamaat-darkGreen hover:bg-jamaat-darkGreen/90 text-white" 
                          disabled={isLoading}
                        >
                          {isLoading ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden border border-jamaat-darkGreen/20 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.903601535944!2d29.05597387443566!3d-26.41424607815703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eed49c4fdfd80c3%3A0x3f4ad71f8f61c2aa!2sMagnolia%20St%2C%20Evander%2C%202280!5e0!3m2!1sen!2sza!4v1714824692212!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
