import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      category: "Account",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click the 'Join Free' button in the navigation bar, fill in your details, and verify your email. It's that simple!",
        },
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page, enter your email, and we'll send you a reset link.",
        },
        {
          q: "Can I change my profile information?",
          a: "Yes! Go to Settings > Profile to update your personal information, sports interests, and skill levels.",
        },
      ],
    },
    {
      category: "Booking",
      questions: [
        {
          q: "How do I book a sports venue?",
          a: "Go to Rent Field, use filters to find your ideal venue, check available slots, and click 'Book Now'. Payment is processed securely through our platform.",
        },
        {
          q: "Can I cancel or reschedule a booking?",
          a: "Yes, you can cancel up to 24 hours before your booking for a full refund. Rescheduling depends on venue availability.",
        },
        {
          q: "What happens if the venue cancels?",
          a: "You'll receive a full refund immediately and notification via email and app. We'll also help you find an alternative venue.",
        },
      ],
    },
    {
      category: "Refunds",
      questions: [
        {
          q: "What is your refund policy?",
          a: "Cancellations made 24+ hours before booking: 100% refund. 12-24 hours: 50% refund. Less than 12 hours: no refund.",
        },
        {
          q: "How long do refunds take?",
          a: "Refunds are processed within 5-7 business days to your original payment method.",
        },
      ],
    },
    {
      category: "Safety",
      questions: [
        {
          q: "How do you ensure user safety?",
          a: "We verify all venues and require users to confirm their identity. We also have a rating system and community guidelines.",
        },
        {
          q: "What if I have a problem with another user?",
          a: "Report any issues through the app immediately. We have a zero-tolerance policy for harassment or inappropriate behavior.",
        },
        {
          q: "Are the venues insured?",
          a: "All partner venues are required to carry liability insurance. We recommend users have their own sports insurance as well.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions or reach out to our support team
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Available 24/7 for Premium members</p>
              <Button className="w-full gradient-primary">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Response within 24 hours</p>
              <Button className="w-full" variant="outline">Send Email</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Quick responses during business hours</p>
              <Button className="w-full" variant="outline">Open WhatsApp</Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">{section.category}</h3>
              <Accordion type="single" collapsible className="space-y-3">
                {section.questions.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${sectionIndex}-${itemIndex}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="font-medium text-left">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Still Need Help?</h2>
            <p className="text-muted-foreground text-center mb-6">
              Send us a message and we'll get back to you as soon as possible
            </p>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your issue or question..."
                  rows={5}
                />
              </div>
              <Button className="w-full gradient-primary shadow-green" type="submit">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Policy Links */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">Related Information:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-primary hover:underline">Cancellation Policy</a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-primary hover:underline">Community Guidelines</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
