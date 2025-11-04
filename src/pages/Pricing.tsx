import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Find exercise partners",
        "Browse communities",
        "View events",
        "Basic search filters",
        "Up to 3 bookings/month",
        "Community chat access",
      ],
      limitations: [
        "Limited venue visibility",
        "No priority booking",
        "Standard support",
      ],
    },
    {
      name: "Premium",
      price: "19.99",
      popular: true,
      description: "For serious athletes",
      features: [
        "Everything in Free",
        "Unlimited bookings",
        "Priority booking access",
        "15% venue discount",
        "Advanced search filters",
        "Verified partner badge",
        "Create private communities",
        "Event early registration",
        "Ad-free experience",
        "Premium support 24/7",
        "Performance analytics",
        "Exclusive partner network",
      ],
      limitations: [],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-muted-foreground text-lg">
            Start free, upgrade anytime to unlock premium features
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-smooth ${
                plan.popular ? "border-2 border-primary shadow-green" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular ? "gradient-primary shadow-green" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Free" ? "Get Started" : "Upgrade to Premium"}
                </Button>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground mb-3">Features included:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">
                  Yes! You can cancel your Premium subscription anytime. You'll continue to have access until the end of your billing period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, debit cards, and digital payment methods including PayPal and Apple Pay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">How does the venue discount work?</h3>
                <p className="text-muted-foreground">
                  Premium members automatically receive 15% off all venue bookings. The discount is applied at checkout when you book through our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Can I switch plans?</h3>
                <p className="text-muted-foreground">
                  Absolutely! You can upgrade to Premium anytime. If you're on Premium and want to downgrade, changes will take effect at the end of your current billing cycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-accent/30 border-primary/20 shadow-md">
            <CardContent className="p-12">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you choose the right plan
              </p>
              <Button size="lg" variant="outline">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
