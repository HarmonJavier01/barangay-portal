import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Settings,
  Bell,
  Shield,
  FileText,
  Calendar,
  LogOut,
  Edit,
  Key
} from "lucide-react";

// Mock user data
const userData = {
  name: "Juan dela Cruz",
  email: "juan.delacruz@email.com",
  phone: "09123456789",
  address: "123 Main Street, Purok 2, Barangay Paldit, Sison Pangasinan",
  registrationDate: "2025-01-15",
  accountType: "Resident",
  status: "Active"
};

// Mock activity data
const recentActivity = [
  {
    id: 1,
    type: "E-Service",
    description: "Barangay Clearance application approved",
    date: "2025-02-10",
    status: "Completed"
  },
  {
    id: 2,
    type: "Facility Booking",
    description: "Community Hall booking for March 15",
    date: "2025-02-08",
    status: "Approved"
  },
  {
    id: 3,
    type: "Report",
    description: "Street light issue reported",
    date: "2025-02-05",
    status: "In Progress"
  }
];

// Mock notifications
const notifications = [
  {
    id: 1,
    title: "Application Approved",
    message: "Your barangay clearance application has been approved",
    date: "2025-02-10",
    read: false
  },
  {
    id: 2,
    title: "Facility Booking Confirmed",
    message: "Your booking for Community Hall has been confirmed",
    date: "2025-02-08",
    read: false
  },
  {
    id: 3,
    title: "Announcement",
    message: "Community meeting scheduled for February 15",
    date: "2025-02-07",
    read: true
  }
];

export const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(userData);

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="text-primary-foreground">
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="text-xl opacity-90">{userData.accountType} Account</p>
              <Badge variant="secondary" className="mt-2">
                {userData.status}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button
                    variant={activeTab === "activity" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("activity")}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Activity
                  </Button>
                  <Button
                    variant={activeTab === "notifications" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button
                    variant={activeTab === "security" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("security")}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </nav>
                
                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <User className="mr-2 h-5 w-5" />
                        Profile Information
                      </CardTitle>
                      <CardDescription>
                        Manage your personal information and contact details
                      </CardDescription>
                    </div>
                    <Button
                      variant={isEditing ? "default" : "outline"}
                      onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                    >
                      {isEditing ? "Save Changes" : (
                        <>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Profile
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        disabled={!isEditing}
                        onChange={(e) => handleProfileChange("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        disabled={!isEditing}
                        onChange={(e) => handleProfileChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        disabled={!isEditing}
                        onChange={(e) => handleProfileChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="accountType">Account Type</Label>
                      <Input
                        id="accountType"
                        value={profileData.accountType}
                        disabled
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      disabled={!isEditing}
                      onChange={(e) => handleProfileChange("address", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Registration Date</Label>
                      <div className="flex items-center mt-1 text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {new Date(profileData.registrationDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div>
                      <Label>Account Status</Label>
                      <div className="flex items-center mt-1">
                        <Badge variant="default">{profileData.status}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "activity" && (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>
                    Your recent transactions and interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-semibold">{activity.description}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {new Date(activity.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-1">
                            {activity.type}
                          </Badge>
                          <div>
                            <Badge variant={activity.status === "Completed" ? "default" : 
                                           activity.status === "Approved" ? "default" : "warning"}>
                              {activity.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "notifications" && (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Notifications
                  </CardTitle>
                  <CardDescription>
                    Stay updated with important announcements and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 border rounded-lg ${!notification.read ? 'bg-primary/5 border-primary/20' : ''}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-semibold flex items-center">
                              {notification.title}
                              {!notification.read && (
                                <Badge variant="destructive" className="ml-2 text-xs">New</Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground mt-1">{notification.message}</p>
                            <div className="text-sm text-muted-foreground mt-2 flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {new Date(notification.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "security" && (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your account security and privacy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Password</h3>
                        <p className="text-sm text-muted-foreground">
                          Last changed 30 days ago
                        </p>
                      </div>
                      <Button variant="outline">
                        <Key className="mr-2 h-4 w-4" />
                        Change Password
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Two-Factor Authentication</h3>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline">
                        Enable 2FA
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Login History</h3>
                        <p className="text-sm text-muted-foreground">
                          View recent login activity
                        </p>
                      </div>
                      <Button variant="outline">
                        View History
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Account Settings
                  </CardTitle>
                  <CardDescription>
                    Customize your account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-4">Notification Preferences</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Email notifications</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>SMS notifications</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Application updates</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-4">Privacy Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Profile visibility</span>
                        <select className="border rounded px-2 py-1">
                          <option>Public</option>
                          <option>Private</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Contact information sharing</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <h3 className="font-semibold text-destructive mb-2">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Permanently delete your account and all associated data
                    </p>
                    <Button variant="destructive" size="sm">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};