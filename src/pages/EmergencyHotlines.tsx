import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone,
  AlertTriangle,
  Shield,
  User,
  Users,
  Flame,
  Building,
  Car,
  Heart,
  MapPin
} from "lucide-react";

const emergencyContacts = [
  {
    id: 1,
    category: "Emergency Services",
    contacts: [
      {
        name: "National Emergency Hotline",
        number: "911",
        description: "24/7 Emergency Response",
        icon: AlertTriangle,
        priority: "critical",
        available: "24/7"
      },
      {
        name: "NDRRMC Emergency Operations Center",
        number: "(02) 8911-1406",
        description: "National Disaster Risk Reduction",
        icon: Shield,
        priority: "high",
        available: "24/7"
      }
    ]
  },
  {
    id: 2,
    category: "Law Enforcement",
    contacts: [
      {
        name: "Philippine National Police (PNP)",
        number: "117",
        description: "Police Emergency Response",
        icon: Shield,
        priority: "critical",
        available: "24/7"
      },
      {
        name: "Local Police Station",
        number: "(046) 234-5678",
        description: "Barangay Police Station",
        icon: Shield,
        priority: "high",
        available: "24/7"
      }
    ]
  },
  {
    id: 3,
    category: "Fire Protection",
    contacts: [
      {
        name: "Bureau of Fire Protection (BFP)",
        number: "116",
        description: "Fire Emergency Response",
        icon: Flame,
        priority: "critical",
        available: "24/7"
      },
      {
        name: "Local Fire Station",
        number: "(046) 345-6789",
        description: "Municipal Fire Station",
        icon: Flame,
        priority: "high",
        available: "24/7"
      }
    ]
  },
  {
    id: 4,
    category: "Medical Emergency",
    contacts: [
      {
        name: "Red Cross Emergency Services",
        number: "143",
        description: "Medical Emergency Response",
        icon: Heart,
        priority: "critical",
        available: "24/7"
      },
      {
        name: "Municipal Health Office",
        number: "(046) 456-7890",
        description: "Local Health Services",
        icon: Heart,
        priority: "high",
        available: "8:00 AM - 5:00 PM"
      }
    ]
  },
  {
    id: 5,
    category: "Local Government",
    contacts: [
      {
        name: "Mayor's Office",
        number: "(046) 567-8901",
        description: "Municipal Mayor's Office",
        icon: Building,
        priority: "medium",
        available: "8:00 AM - 5:00 PM"
      },
      {
        name: "Barangay Captain",
        number: "(046) 678-9012",
        description: "Barangay Captain Hotline",
        icon: User,
        priority: "medium",
        available: "8:00 AM - 8:00 PM"
      }
    ]
  },
  {
    id: 6,
    category: "Barangay Officials",
    contacts: [
      {
        name: "Kagawad - Public Safety",
        number: "(046) 789-0123",
        description: "Public Safety Committee",
        icon: Users,
        priority: "medium",
        available: "8:00 AM - 5:00 PM"
      },
      {
        name: "Kagawad - Health & Sanitation",
        number: "(046) 890-1234",
        description: "Health Committee",
        icon: Users,
        priority: "medium",
        available: "8:00 AM - 5:00 PM"
      },
      {
        name: "Kagawad - Infrastructure",
        number: "(046) 901-2345",
        description: "Infrastructure Committee",
        icon: Users,
        priority: "medium",
        available: "8:00 AM - 5:00 PM"
      },
      {
        name: "Barangay Secretary",
        number: "(046) 012-3456",
        description: "Administrative Services",
        icon: User,
        priority: "low",
        available: "8:00 AM - 5:00 PM"
      }
    ]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical": return "destructive";
    case "high": return "warning";
    case "medium": return "secondary";
    case "low": return "outline";
    default: return "outline";
  }
};

const formatPhoneNumber = (number: string) => {
  // Format phone number for tel: link
  return number.replace(/[^\d+]/g, '');
};

export const EmergencyHotlines = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Emergency Hotlines & Contacts
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Quick access to emergency services and barangay officials. 
            Save these numbers for immediate assistance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Critical Emergency Notice */}
        <Card className="mb-8 border-destructive bg-destructive/5 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
              <h2 className="text-2xl font-bold text-destructive">
                Life-Threatening Emergency?
              </h2>
            </div>
            <p className="text-lg mb-4">
              For immediate life-threatening emergencies, dial <strong>911</strong> first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="destructive"
                className="bg-destructive hover:bg-destructive/90"
                onClick={() => window.open('tel:911')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 911 Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:117')}
              >
                <Shield className="mr-2 h-5 w-5" />
                Call PNP (117)
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:116')}
              >
                <Flame className="mr-2 h-5 w-5" />
                Call BFP (116)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Categories */}
        <div className="space-y-8">
          {emergencyContacts.map((category) => (
            <section key={category.id}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="mr-2 h-6 w-6 text-primary" />
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                              <Icon className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{contact.name}</CardTitle>
                            </div>
                          </div>
                          <Badge variant={getPriorityColor(contact.priority)}>
                            {contact.priority}
                          </Badge>
                        </div>
                        <CardDescription>{contact.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-2xl text-primary">
                              {contact.number}
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center">
                              <Phone className="mr-1 h-3 w-3" />
                              Available: {contact.available}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1" 
                            variant="default"
                            onClick={() => window.open(`tel:${formatPhoneNumber(contact.number)}`)}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Call
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => window.open(`sms:${formatPhoneNumber(contact.number)}`)}
                          >
                            SMS
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Information */}
        <section className="mt-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Important Reminders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">When to Call 911:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Medical emergencies</li>
                    <li>• Fire incidents</li>
                    <li>• Crimes in progress</li>
                    <li>• Natural disasters</li>
                    <li>• Life-threatening situations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">When to Call Barangay:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Noise complaints</li>
                    <li>• Minor disputes</li>
                    <li>• Public service requests</li>
                    <li>• Community concerns</li>
                    <li>• Non-emergency issues</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Always provide clear information about your location, 
                  the nature of the emergency, and any immediate dangers when calling for help. 
                  Stay calm and follow the dispatcher's instructions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};