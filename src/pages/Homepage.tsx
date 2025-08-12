import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  FileText,
  Phone,
  Users,
  AlertTriangle,
  Building,
  MapPin,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/sison_banner_pic001.jpg";

const announcements = [
  {
    id: 1,
    title: "Community Meeting - February 15, 2025",
    content: "Monthly barangay assembly to discuss community projects and updates.",
    date: "2025-02-10",
    priority: "high"
  },
  {
    id: 2,
    title: "Vaccination Drive Schedule",
    content: "Free vaccination for children and senior citizens every Wednesday.",
    date: "2025-02-08",
    priority: "medium"
  },
  {
    id: 3,
    title: "Street Light Maintenance",
    content: "Regular maintenance of street lights in all subdivisions.",
    date: "2025-02-05",
    priority: "low"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Barangay Fiesta 2025",
    date: "2025-03-15",
    time: "8:00 AM",
    location: "Barangay Covered Court"
  },
  {
    id: 2,
    title: "Clean-up Drive",
    date: "2025-02-20",
    time: "6:00 AM",
    location: "Main Street"
  },
  {
    id: 3,
    title: "Senior Citizens Meeting",
    date: "2025-02-18",
    time: "2:00 PM",
    location: "Barangay Hall"
  }
];

const quickServices = [
  {
    title: "E-Clearances",
    description: "Request barangay clearance, certificates, and permits online",
    icon: FileText,
    href: "/services",
    color: "bg-primary"
  },
  {
    title: "Emergency Hotlines",
    description: "Quick access to emergency contacts and hotlines",
    icon: Phone,
    href: "/hotlines",
    color: "bg-destructive"
  },
  {
    title: "Facility Booking",
    description: "Reserve barangay facilities for events and gatherings",
    icon: Building,
    href: "/facilities",
    color: "bg-success"
  },
  {
    title: "Report Incident",
    description: "Report incidents, complaints, and issues in the community",
    icon: AlertTriangle,
    href: "/reports",
    color: "bg-warning"
  }
];

export const Homepage = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-hero flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Barangay
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Serving our community with transparency, efficiency, and care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">
                <FileText className="mr-2 h-5 w-5" />
                Apply for Services
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/hotlines">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Contacts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to={service.href}>
                  <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Announcements */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6 text-primary" />
              Recent Announcements
            </h2>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="shadow-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{announcement.title}</CardTitle>
                      <Badge variant={getPriorityColor(announcement.priority)}>
                        {announcement.priority}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center text-sm">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(announcement.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="mr-2 h-6 w-6 text-primary" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Barangay Profile */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">About Our Barangay</h2>
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-6">
                    To provide efficient, transparent, and responsive governance that promotes 
                    the welfare and development of our community while ensuring peace, order, 
                    and safety for all residents.
                  </p>
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A progressive, united, and sustainable barangay where every resident 
                    enjoys quality life, equal opportunities, and active participation 
                    in community development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">2,450</div>
                      <div className="text-sm text-muted-foreground">Total Residents</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">680</div>
                      <div className="text-sm text-muted-foreground">Households</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Puroks</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">8.5</div>
                      <div className="text-sm text-muted-foreground">Area (km²)</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};