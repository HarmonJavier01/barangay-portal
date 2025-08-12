import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building,
  Calendar as CalendarIcon,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MapPin,
  Phone,
  User
} from "lucide-react";

// Mock data for facilities
const facilities = [
  {
    id: 1,
    name: "Covered Court",
    description: "Multi-purpose covered court for sports and events",
    capacity: 500,
    hourlyRate: "₱500/hour",
    available: true,
    amenities: ["Sound System", "Lighting", "Restrooms", "Parking"]
  },
  {
    id: 2,
    name: "Community Hall",
    description: "Air-conditioned hall for meetings and celebrations",
    capacity: 200,
    hourlyRate: "₱800/hour",
    available: true,
    amenities: ["Air Conditioning", "Sound System", "Tables & Chairs", "Kitchen"]
  },
  {
    id: 3,
    name: "Multipurpose Pavilion",
    description: "Open pavilion for outdoor events",
    capacity: 300,
    hourlyRate: "₱300/hour",
    available: false,
    amenities: ["Open Air", "Electrical Outlets", "Water Access"]
  }
];

// Mock booking data
const mockBookings = [
  {
    id: 1,
    facility: "Covered Court",
    event: "Basketball Tournament",
    applicant: "Juan dela Cruz",
    date: "2025-02-20",
    time: "8:00 AM - 6:00 PM",
    status: "Approved",
    purpose: "Sports Event"
  },
  {
    id: 2,
    facility: "Community Hall",
    event: "Wedding Reception",
    applicant: "Maria Santos",
    date: "2025-02-25",
    time: "6:00 PM - 12:00 AM",
    status: "Pending",
    purpose: "Private Event"
  },
  {
    id: 3,
    facility: "Multipurpose Pavilion",
    event: "Birthday Party",
    applicant: "Pedro Reyes",
    date: "2025-02-18",
    time: "2:00 PM - 8:00 PM",
    status: "Processing",
    purpose: "Private Event"
  }
];

const equipmentInventory = [
  { name: "Plastic Chairs", available: 150, total: 200, rate: "₱5/piece" },
  { name: "Round Tables", available: 20, total: 30, rate: "₱50/piece" },
  { name: "Rectangular Tables", available: 15, total: 25, rate: "₱75/piece" },
  { name: "Tents (10x10)", available: 8, total: 12, rate: "₱200/piece" },
  { name: "Sound System", available: 2, total: 3, rate: "₱500/set" },
  { name: "Generator", available: 1, total: 2, rate: "₱300/piece" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved": return "default";
    case "Processing": return "warning";
    case "Pending": return "secondary";
    case "Rejected": return "destructive";
    default: return "secondary";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Approved": return CheckCircle;
    case "Processing": return Clock;
    case "Pending": return AlertTriangle;
    case "Rejected": return XCircle;
    default: return Clock;
  }
};

export const FacilityBookingPage = () => {
  const [activeTab, setActiveTab] = useState("facilities");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const FacilityCard = ({ facility }) => (
    <Card className={`shadow-card hover:shadow-primary transition-all duration-300 ${!facility.available ? 'opacity-60' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
              <Building className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg">{facility.name}</CardTitle>
              <CardDescription>{facility.description}</CardDescription>
            </div>
          </div>
          <Badge variant={facility.available ? "default" : "destructive"}>
            {facility.available ? "Available" : "Unavailable"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Capacity:</span>
            <div className="font-semibold flex items-center">
              <Users className="mr-1 h-4 w-4" />
              {facility.capacity} people
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">Rate:</span>
            <div className="font-semibold text-primary">{facility.hourlyRate}</div>
          </div>
        </div>
        <div>
          <span className="text-sm text-muted-foreground">Amenities:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {facility.amenities.map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
          </div>
        </div>
        <Button 
          className="w-full" 
          disabled={!facility.available}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {facility.available ? "Book Now" : "Unavailable"}
        </Button>
      </CardContent>
    </Card>
  );

  const BookingCard = ({ booking }) => {
    const StatusIcon = getStatusIcon(booking.status);
    
    return (
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg">{booking.event}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Building className="mr-1 h-3 w-3" />
                {booking.facility}
              </CardDescription>
            </div>
            <Badge variant={getStatusColor(booking.status)} className="flex items-center">
              <StatusIcon className="mr-1 h-3 w-3" />
              {booking.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center">
                <User className="mr-1 h-3 w-3" />
                Applicant:
              </span>
              <span className="font-semibold">{booking.applicant}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center">
                <CalendarIcon className="mr-1 h-3 w-3" />
                Date:
              </span>
              <span>{new Date(booking.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Time:
              </span>
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Purpose:</span>
              <span>{booking.purpose}</span>
            </div>
          </div>
          <Button size="sm" variant="outline" className="w-full">
            View Details
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Facility Booking System
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Reserve barangay facilities and equipment for your events and gatherings
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Total Facilities</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">15</div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-warning mb-2">5</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Approval Rate</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="facilities">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Available Facilities</h2>
              <p className="text-muted-foreground">
                Browse and book barangay facilities for your events.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="equipment">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Equipment Inventory</h2>
              <p className="text-muted-foreground">
                Check availability and rent equipment for your events.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipmentInventory.map((item, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>Rental Rate: {item.rate}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Available:</span>
                        <span className="font-semibold text-success">{item.available}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total:</span>
                        <span className="font-semibold">{item.total}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-success h-2 rounded-full" 
                          style={{ width: `${(item.available / item.total) * 100}%` }}
                        ></div>
                      </div>
                      <Button size="sm" className="w-full">
                        Request Equipment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookings">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">My Bookings</h2>
              <p className="text-muted-foreground">
                Track your facility booking requests and their status.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                  <CardDescription>
                    Choose a date to check facility availability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>
                    Bookings for {selectedDate?.toLocaleDateString()}
                  </CardTitle>
                  <CardDescription>
                    Scheduled events and availability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Sample schedule */}
                    <div className="border-l-4 border-primary pl-4">
                      <div className="font-semibold">8:00 AM - 12:00 PM</div>
                      <div className="text-sm text-muted-foreground">
                        Covered Court - Basketball Practice
                      </div>
                    </div>
                    <div className="border-l-4 border-muted pl-4 opacity-50">
                      <div className="font-semibold">2:00 PM - 6:00 PM</div>
                      <div className="text-sm text-muted-foreground">
                        Community Hall - Available
                      </div>
                    </div>
                    <div className="border-l-4 border-warning pl-4">
                      <div className="font-semibold">7:00 PM - 11:00 PM</div>
                      <div className="text-sm text-muted-foreground">
                        Pavilion - Birthday Celebration
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};