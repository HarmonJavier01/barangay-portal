import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users,
  Search,
  Plus,
  Edit,
  Eye,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Home,
  UserCheck
} from "lucide-react";

// Mock data for residents
const mockResidents = [
  {
    id: 1,
    name: "Juan dela Cruz",
    age: 35,
    address: "123 Main St, Purok 1",
    phone: "09123456789",
    email: "juan@email.com",
    registrationDate: "2024-01-15",
    status: "Active",
    householdHead: true,
    familyMembers: 4
  },
  {
    id: 2,
    name: "Maria Santos",
    age: 28,
    address: "456 Oak Ave, Purok 2",
    phone: "09234567890",
    email: "maria@email.com",
    registrationDate: "2024-01-20",
    status: "Active",
    householdHead: true,
    familyMembers: 3
  },
  {
    id: 3,
    name: "Pedro Reyes",
    age: 42,
    address: "789 Pine Rd, Purok 3",
    phone: "09345678901",
    email: "pedro@email.com",
    registrationDate: "2024-02-01",
    status: "Active",
    householdHead: true,
    familyMembers: 5
  }
];

export const ResidentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("list");

  const filteredResidents = mockResidents.filter(resident =>
    resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resident.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ResidentCard = ({ resident }) => (
    <Card className="shadow-card hover:shadow-primary transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg">{resident.name}</CardTitle>
              <CardDescription className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                Age: {resident.age}
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <Badge variant={resident.status === "Active" ? "default" : "secondary"}>
              {resident.status}
            </Badge>
            {resident.householdHead && (
              <Badge variant="outline">Household Head</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {resident.address}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Phone className="mr-2 h-4 w-4" />
            {resident.phone}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Mail className="mr-2 h-4 w-4" />
            {resident.email}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Home className="mr-2 h-4 w-4" />
            Family Members: {resident.familyMembers}
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1">
            <Eye className="mr-1 h-4 w-4" />
            View
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <Edit className="mr-1 h-4 w-4" />
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Resident Management
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive resident database and household information management
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,450</div>
              <div className="text-sm text-muted-foreground">Total Residents</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">680</div>
              <div className="text-sm text-muted-foreground">Households</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Registration Rate</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-warning mb-2">15</div>
              <div className="text-sm text-muted-foreground">Puroks</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <TabsList>
              <TabsTrigger value="list">Resident List</TabsTrigger>
              <TabsTrigger value="register">Register New</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search residents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Resident
              </Button>
            </div>
          </div>

          <TabsContent value="list">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResidents.map((resident) => (
                <ResidentCard key={resident.id} resident={resident} />
              ))}
            </div>
            {filteredResidents.length === 0 && (
              <Card className="shadow-card">
                <CardContent className="p-12 text-center">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No residents found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or add a new resident.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="register">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="mr-2 h-5 w-5" />
                  Register New Resident
                </CardTitle>
                <CardDescription>
                  Add a new resident to the barangay database
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Registration Form</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete registration form coming soon...
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Start Registration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>0-18 years</span>
                      <span className="font-semibold">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>19-35 years</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>36-60 years</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>60+ years</span>
                      <span className="font-semibold">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Household Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>1-2 members</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3-4 members</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>5-6 members</span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>7+ members</span>
                      <span className="font-semibold">10%</span>
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