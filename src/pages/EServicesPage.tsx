import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText,
  Download,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  Building,
  Heart,
  DollarSign,
  Calendar,
  Eye
} from "lucide-react";

// Mock data for service requests
const mockRequests = [
  {
    id: 1,
    type: "Barangay Clearance",
    applicant: "Juan dela Cruz",
    dateRequested: "2025-02-10",
    status: "Approved",
    purpose: "Employment",
    trackingNumber: "BC-2024-001"
  },
  {
    id: 2,
    type: "Certificate of Residency",
    applicant: "Maria Santos",
    dateRequested: "2025-02-09",
    status: "Processing",
    purpose: "Bank Account",
    trackingNumber: "CR-2025-002"
  },
  {
    id: 3,
    type: "Indigency Certificate",
    applicant: "Pedro Reyes",
    dateRequested: "2025-02-08",
    status: "Pending",
    purpose: "Medical Assistance",
    trackingNumber: "IC-2024-003"
  },
  {
    id: 4,
    type: "Business Permit",
    applicant: "Ana Garcia",
    dateRequested: "2025-02-07",
    status: "Approved",
    purpose: "Sari-sari Store",
    trackingNumber: "BP-2025-004"
  }
];

const serviceTypes = [
  {
    title: "Barangay Clearance",
    description: "Certificate of good moral character and residence",
    icon: User,
    fee: "₱50.00",
    processingTime: "3-5 days",
    requirements: ["Valid ID", "Cedula", "Proof of Residency"]
  },
  {
    title: "Certificate of Residency",
    description: "Proof of residency in the barangay",
    icon: Building,
    fee: "₱30.00",
    processingTime: "2-3 days",
    requirements: ["Valid ID", "Proof of Address"]
  },
  {
    title: "Indigency Certificate",
    description: "Certificate for low-income families",
    icon: Heart,
    fee: "Free",
    processingTime: "5-7 days",
    requirements: ["Valid ID", "Household Income Declaration"]
  },
  {
    title: "Business Permit",
    description: "Permit for small business operations",
    icon: DollarSign,
    fee: "₱200.00",
    processingTime: "7-10 days",
    requirements: ["Business Registration", "Valid ID", "Location Clearance"]
  }
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
    case "Pending": return AlertCircle;
    case "Rejected": return XCircle;
    default: return Clock;
  }
};

export const EServicesPage = () => {
  const [activeTab, setActiveTab] = useState("apply");

  const ServiceCard = ({ service }) => {
    const Icon = service.icon;
    return (
      <Card className="shadow-card hover:shadow-primary transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Fee:</span>
              <div className="font-semibold text-primary">{service.fee}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Processing:</span>
              <div className="font-semibold">{service.processingTime}</div>
            </div>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Requirements:</span>
            <ul className="text-sm mt-1">
              {service.requirements.map((req, index) => (
                <li key={index} className="text-muted-foreground">• {req}</li>
              ))}
            </ul>
          </div>
          <Button className="w-full">
            <FileText className="mr-2 h-4 w-4" />
            Apply Now
          </Button>
        </CardContent>
      </Card>
    );
  };

  const RequestCard = ({ request }) => {
    const StatusIcon = getStatusIcon(request.status);
    
    return (
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg">{request.type}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <User className="mr-1 h-3 w-3" />
                {request.applicant}
              </CardDescription>
            </div>
            <Badge variant={getStatusColor(request.status)} className="flex items-center">
              <StatusIcon className="mr-1 h-3 w-3" />
              {request.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tracking No:</span>
              <span className="font-mono font-semibold">{request.trackingNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date Requested:</span>
              <span>{new Date(request.dateRequested).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Purpose:</span>
              <span>{request.purpose}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Eye className="mr-1 h-4 w-4" />
              View Details
            </Button>
            {request.status === "Approved" && (
              <Button size="sm" className="flex-1">
                <Download className="mr-1 h-4 w-4" />
                Download
              </Button>
            )}
          </div>
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
            E-Services Portal
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Apply for barangay certificates and permits online. Track your requests and download approved documents.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">156</div>
              <div className="text-sm text-muted-foreground">Total Applications</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">89</div>
              <div className="text-sm text-muted-foreground">Approved</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-warning mb-2">45</div>
              <div className="text-sm text-muted-foreground">Processing</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">22</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="apply">Apply for Services</TabsTrigger>
            <TabsTrigger value="track">Track Requests</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
          </TabsList>

          <TabsContent value="apply">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Available Services</h2>
              <p className="text-muted-foreground">
                Choose the service you need and complete the online application form.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceTypes.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="track">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Track Your Requests</h2>
              <p className="text-muted-foreground">
                Monitor the status of your service applications and download approved documents.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockRequests.map((request) => (
                <RequestCard key={request.id} request={request} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requirements">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  General Requirements
                </CardTitle>
                <CardDescription>
                  Basic requirements for all barangay services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Valid Government ID</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <div>• Driver's License</div>
                    <div>• SSS ID</div>
                    <div>• UMID</div>
                    <div>• Postal ID</div>
                    <div>• Voter's ID</div>
                    <div>• Passport</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Proof of Residency</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Utility Bill (within 3 months)</div>
                    <div>• Lease Contract</div>
                    <div>• Barangay Certificate</div>
                    <div>• Other proof of address</div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Processing Guidelines</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Applications are processed during office hours (8:00 AM - 5:00 PM)</li>
                    <li>• Incomplete requirements will delay processing</li>
                    <li>• All documents must be clear and legible</li>
                    <li>• Processing fees are non-refundable</li>
                    <li>• Rush processing available for additional fee</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};