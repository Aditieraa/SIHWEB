"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  AlertTriangle,
  Zap,
  Phone,
  MapPin,
  Clock,
  Users,
  Send,
  Plus,
  Edit,
  Trash2,
  Eye,
  Radio,
  Siren,
  Shield,
  Activity,
  CheckCircle,
  XCircle,
} from "lucide-react"

// Sample emergency data
const activeAlerts = [
  {
    id: "ALERT001",
    type: "Cyclone",
    severity: "High",
    region: "Coastal Karnataka, Kerala",
    affectedInstitutions: 45,
    affectedUsers: 12847,
    status: "Active",
    timeIssued: "2 hours ago",
    description: "Severe cyclonic storm approaching coastal areas. Immediate evacuation recommended.",
    color: "destructive",
  },
  {
    id: "ALERT002",
    type: "Flood",
    severity: "Medium",
    region: "Assam, West Bengal",
    affectedInstitutions: 23,
    affectedUsers: 6789,
    status: "Active",
    timeIssued: "4 hours ago",
    description: "Heavy rainfall causing flooding in low-lying areas. Monitor water levels.",
    color: "chart-2",
  },
  {
    id: "ALERT003",
    type: "Earthquake",
    severity: "Low",
    region: "Himachal Pradesh",
    affectedInstitutions: 8,
    affectedUsers: 2341,
    status: "Monitoring",
    timeIssued: "6 hours ago",
    description: "Minor tremors detected. Precautionary measures advised.",
    color: "chart-3",
  },
]

const emergencyContacts = [
  { id: 1, service: "National Emergency", number: "112", region: "All India", type: "Primary", status: "Active" },
  { id: 2, service: "Fire Department", number: "101", region: "All India", type: "Primary", status: "Active" },
  { id: 3, service: "Police", number: "100", region: "All India", type: "Primary", status: "Active" },
  { id: 4, service: "NDMA Helpline", number: "1078", region: "All India", type: "Disaster", status: "Active" },
  { id: 5, service: "Ambulance", number: "108", region: "All India", type: "Medical", status: "Active" },
  { id: 6, service: "Women Helpline", number: "1091", region: "All India", type: "Support", status: "Active" },
  { id: 7, service: "Child Helpline", number: "1098", region: "All India", type: "Support", status: "Active" },
  { id: 8, service: "Tourist Helpline", number: "1363", region: "All India", type: "Support", status: "Active" },
]

const incidentReports = [
  {
    id: "INC001",
    title: "Fire spotted in Block B",
    reporter: "Priya Sharma",
    institution: "Delhi Public School",
    severity: "High",
    status: "Verified",
    timeReported: "1 hour ago",
    location: "Block B, 2nd Floor",
    description: "Smoke detected in chemistry lab. Fire department notified.",
  },
  {
    id: "INC002",
    title: "Gas leak in cafeteria",
    reporter: "Rajesh Kumar",
    institution: "St. Mary's College",
    severity: "Medium",
    status: "Under Review",
    timeReported: "3 hours ago",
    location: "Main Cafeteria",
    description: "Strong gas smell reported by kitchen staff.",
  },
  {
    id: "INC003",
    title: "Structural damage after tremor",
    reporter: "Anita Gupta",
    institution: "Gujarat University",
    severity: "Medium",
    status: "Resolved",
    timeReported: "1 day ago",
    location: "Library Building",
    description: "Minor cracks observed in wall after earthquake.",
  },
]

export default function EmergencyResponse() {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-balance">Emergency Response</h2>
          <p className="text-muted-foreground">Monitor and manage emergency situations across all institutions</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <Zap className="h-4 w-4 mr-2" />
                Send Emergency Alert
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Send Emergency Alert</DialogTitle>
                <DialogDescription>Broadcast an emergency alert to selected institutions and users.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="alert-type">Alert Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select disaster type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="earthquake">Earthquake</SelectItem>
                      <SelectItem value="flood">Flood</SelectItem>
                      <SelectItem value="fire">Fire</SelectItem>
                      <SelectItem value="cyclone">Cyclone</SelectItem>
                      <SelectItem value="general">General Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region">Target Region</Label>
                  <Input placeholder="e.g., Mumbai, Maharashtra" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Alert Message</Label>
                  <Textarea placeholder="Enter emergency alert message..." rows={3} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="sms" />
                  <Label htmlFor="sms">Send SMS notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="push" defaultChecked />
                  <Label htmlFor="push">Send push notifications</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAlertDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive">
                  <Send className="h-4 w-4 mr-2" />
                  Send Alert
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Emergency Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">2 High</span> • <span className="text-chart-2">1 Medium</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Affected Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21,977</div>
            <p className="text-xs text-muted-foreground">
              Across <span className="font-medium">76 institutions</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3 min</div>
            <p className="text-xs text-muted-foreground">Average alert delivery time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">Operational</div>
            <p className="text-xs text-muted-foreground">All systems functioning</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Siren className="h-5 w-5 text-destructive" />
            Active Emergency Alerts
          </CardTitle>
          <CardDescription>Current emergency situations requiring attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 border rounded-lg ${
                  alert.color === "destructive"
                    ? "bg-destructive/10 border-destructive/20"
                    : alert.color === "chart-2"
                      ? "bg-chart-2/10 border-chart-2/20"
                      : "bg-chart-3/10 border-chart-3/20"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4
                        className={`font-medium ${
                          alert.color === "destructive"
                            ? "text-destructive"
                            : alert.color === "chart-2"
                              ? "text-chart-2"
                              : "text-chart-3"
                        }`}
                      >
                        {alert.type} Alert - {alert.region}
                      </h4>
                      <Badge variant={alert.color === "destructive" ? "destructive" : "secondary"}>
                        {alert.severity}
                      </Badge>
                      <Badge variant="outline">{alert.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{alert.affectedInstitutions} institutions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{alert.affectedUsers.toLocaleString()} users</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{alert.timeIssued}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Update
                    </Button>
                    <Button variant="outline" size="sm">
                      <Radio className="h-4 w-4 mr-2" />
                      Broadcast
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Contacts Directory */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-chart-1" />
              Emergency Contacts Directory
            </CardTitle>
            <CardDescription>Manage emergency contact information</CardDescription>
            <div className="flex items-center gap-2">
              <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Emergency Contact</DialogTitle>
                    <DialogDescription>Add a new emergency contact to the directory.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="service-name">Service Name</Label>
                      <Input placeholder="e.g., Fire Department" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-number">Phone Number</Label>
                      <Input placeholder="e.g., 101" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <Input placeholder="e.g., All India, Mumbai" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-type">Contact Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">Primary</SelectItem>
                          <SelectItem value="disaster">Disaster</SelectItem>
                          <SelectItem value="medical">Medical</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsContactDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button>Add Contact</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        contact.status === "Active" ? "bg-chart-3" : "bg-muted-foreground"
                      }`}
                    />
                    <div>
                      <h4 className="font-medium">{contact.service}</h4>
                      <p className="text-sm text-muted-foreground">{contact.region}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{contact.type}</Badge>
                    <div className="text-right">
                      <p className="font-mono font-medium">{contact.number}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Incident Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-chart-2" />
              Incident Reports
            </CardTitle>
            <CardDescription>User-reported incidents and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {incidentReports.map((incident) => (
                <div key={incident.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium">{incident.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Reported by {incident.reporter} • {incident.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          incident.severity === "High"
                            ? "destructive"
                            : incident.severity === "Medium"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {incident.severity}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {incident.status === "Verified" ? (
                          <CheckCircle className="h-4 w-4 text-chart-3" />
                        ) : incident.status === "Resolved" ? (
                          <CheckCircle className="h-4 w-4 text-chart-1" />
                        ) : (
                          <XCircle className="h-4 w-4 text-chart-2" />
                        )}
                        <span className="text-xs">{incident.status}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{incident.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{incident.timeReported}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
