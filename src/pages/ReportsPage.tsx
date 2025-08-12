import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertTriangle,
  Camera,
  MapPin,
  Clock,
  User,
  Phone,
  FileText,
  Lightbulb,
  Car,
  Zap,
  Shield,
  Upload,
  Plus
} from "lucide-react";

// Mock data for reports
const mockReports = [
  {
    id: 1,
    type: "Street Light",
    title: "Broken Street Light on Main Street",
    reporter: "Juan dela Cruz",
    location: "Main Street, Purok 1",
    dateReported: "2025-02-10",
    status: "In Progress",
    priority: "Medium",
    description: "Street light post #15 is not working"
  },
  {
    id: 2,
    type: "Incident",
    title: "Noise Complaint",
    reporter: "Maria Santos",
    location: "Oak Avenue, Purok 2",
    dateReported: "2025-02-09",
    status: "Resolved",
    priority: "Low",
    description: "Loud music past 10 PM"
  },
  {
    id: 3,
    type: "Accident",
    title: "Minor Vehicle Accident",
    reporter: "Pedro Reyes",
    location: "Pine Road, Purok 3",
    dateReported: "2025-02-08",
    status: "Under Investigation",
    priority: "High",
    description: "Motorcycle collision with no injuries"
  }
];

const reportTypes = [
  {
    type: "incident",
    title: "General Incident",
    description: "Report disputes, complaints, or general concerns",
    icon: AlertTriangle,
    color: "bg-warning"
  },
  {
    type: "streetlight",
    title: "Street Light Issue",
    description: "Report broken or malfunctioning street lights",
    icon: Lightbulb,
    color: "bg-primary"
  },
  {
    type: "accident",
    title: "Accident Report",
    description: "Report vehicle accidents or injuries",
    icon: Car,
    color: "bg-destructive"
  },
  {
    type: "emergency",
    title: "Emergency Response",
    description: "Track emergency response activities",
    icon: Shield,
    color: "bg-success"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Resolved": return "default";
    case "In Progress": return "warning";
    case "Under Investigation": return "secondary";
    case "Pending": return "secondary";
    default: return "secondary";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "destructive";
    case "Medium": return "warning";
    case "Low": return "secondary";
    default: return "secondary";
  }
};

export const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState("report");
  const [selectedReportType, setSelectedReportType] = useState("");
  const [reportForm, setReportForm] = useState({
    title: "",
    location: "",
    description: "",
    contactNumber: "",
    priority: ""
  });

  const handleFormChange = (field: string, value: string) => {
    setReportForm(prev => ({ ...prev, [field]: value }));
  };

  const ReportTypeCard = ({ reportType }) => {
    const Icon = reportType.icon;
    const isSelected = selectedReportType === reportType.type;
    
    return (
      <Card 
        className={`shadow-card hover:shadow-primary transition-all duration-300 cursor-pointer ${
          isSelected ? 'ring-2 ring-primary bg-primary/5' : ''
        }`}
        onClick={() => setSelectedReportType(reportType.type)}
      >
        <CardContent className="p-6 text-center">
          <div className={`w-16 h-16 ${reportType.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold mb-2">{reportType.title}</h3>
          <p className="text-sm text-muted-foreground">{reportType.description}</p>
        </CardContent>
      </Card>
    );
  };

  const ReportCard = ({ report }) => (
    <Card className="shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline">{report.type}</Badge>
              <Badge variant={getPriorityColor(report.priority)}>
                {report.priority}
              </Badge>
            </div>
            <CardTitle className="text-lg">{report.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <User className="mr-1 h-3 w-3" />
              {report.reporter}
            </CardDescription>
          </div>
          <Badge variant={getStatusColor(report.status)}>
            {report.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm space-y-1">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{report.location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{new Date(report.dateReported).toLocaleDateString()}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{report.description}</p>
        <Button size="sm" variant="outline" className="w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Incident & Report System
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Report incidents, complaints, and community issues. Track response and resolution status.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">45</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">28</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-warning mb-2">12</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="report">Submit Report</TabsTrigger>
            <TabsTrigger value="track">Track Reports</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Response</TabsTrigger>
          </TabsList>

          <TabsContent value="report">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Submit New Report</h2>
                
                {/* Report Type Selection */}
                <div className="mb-6">
                  <Label className="text-base font-semibold mb-4 block">
                    Select Report Type
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reportTypes.map((type) => (
                      <ReportTypeCard key={type.type} reportType={type} />
                    ))}
                  </div>
                </div>

                {selectedReportType && (
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle>Report Details</CardTitle>
                      <CardDescription>
                        Provide detailed information about the incident
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">Report Title</Label>
                        <Input
                          id="title"
                          placeholder="Brief description of the issue"
                          value={reportForm.title}
                          onChange={(e) => handleFormChange("title", e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="Specific address or landmark"
                          value={reportForm.location}
                          onChange={(e) => handleFormChange("location", e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="priority">Priority Level</Label>
                        <Select onValueChange={(value) => handleFormChange("priority", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="description">Detailed Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Provide detailed information about the incident..."
                          value={reportForm.description}
                          onChange={(e) => handleFormChange("description", e.target.value)}
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact">Contact Number</Label>
                        <Input
                          id="contact"
                          placeholder="Your contact number"
                          value={reportForm.contactNumber}
                          onChange={(e) => handleFormChange("contactNumber", e.target.value)}
                        />
                      </div>

                      <div>
                        <Label className="block mb-2">Attach Photos (Optional)</Label>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                          <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Upload photos to support your report
                          </p>
                          <Button variant="outline" size="sm">
                            <Upload className="mr-2 h-4 w-4" />
                            Choose Files
                          </Button>
                        </div>
                      </div>

                      <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Submit Report
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Recent Reports</h2>
                <div className="space-y-4">
                  {mockReports.slice(0, 3).map((report) => (
                    <ReportCard key={report.id} report={report} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="track">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Track Your Reports</h2>
              <p className="text-muted-foreground">
                Monitor the status and progress of your submitted reports.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockReports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emergency">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-destructive">
                  <Shield className="mr-2 h-5 w-5" />
                  Emergency Response Tracking
                </CardTitle>
                <CardDescription>
                  Track emergency response activities and assigned personnel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Emergency Response Center</h3>
                  <p className="text-muted-foreground mb-6">
                    Emergency response tracking and coordination system
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="destructive">
                      <Phone className="mr-2 h-4 w-4" />
                      Report Emergency
                    </Button>
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      View Response Log
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};