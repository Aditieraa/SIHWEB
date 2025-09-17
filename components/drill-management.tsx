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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  CalendarIcon,
  Clock,
  Users,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Edit,
  Eye,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Activity,
  MapPin,
  Timer,
} from "lucide-react"
import { format } from "date-fns"

// Sample drill data
const scheduledDrills = [
  {
    id: "DRILL001",
    title: "Fire Evacuation Drill",
    type: "Fire",
    institution: "Delhi Public School",
    scheduledDate: "2024-01-15",
    scheduledTime: "10:30 AM",
    duration: "15 minutes",
    participants: 1247,
    status: "Scheduled",
    scenario: "Fire detected in Block A, 2nd floor. All students and staff must evacuate immediately.",
    objectives: ["Test evacuation routes", "Measure response time", "Assess emergency procedures"],
    createdBy: "Admin User",
    region: "Delhi",
  },
  {
    id: "DRILL002",
    title: "Earthquake Response Drill",
    type: "Earthquake",
    institution: "St. Mary's College",
    scheduledDate: "2024-01-12",
    scheduledTime: "2:00 PM",
    duration: "20 minutes",
    participants: 892,
    status: "In Progress",
    scenario: "Magnitude 6.2 earthquake detected. Drop, Cover, and Hold On protocol activated.",
    objectives: ["Practice Drop-Cover-Hold", "Test communication systems", "Evaluate assembly points"],
    createdBy: "Safety Officer",
    region: "Mumbai",
  },
  {
    id: "DRILL003",
    title: "Flood Emergency Drill",
    type: "Flood",
    institution: "Gujarat University",
    scheduledDate: "2024-01-10",
    scheduledTime: "11:00 AM",
    duration: "25 minutes",
    participants: 2341,
    status: "Completed",
    scenario: "Flash flood warning issued. Move to higher floors and await further instructions.",
    objectives: ["Test vertical evacuation", "Check emergency supplies", "Validate communication"],
    createdBy: "Emergency Coordinator",
    region: "Gujarat",
  },
  {
    id: "DRILL004",
    title: "Cyclone Preparedness Drill",
    type: "Cyclone",
    institution: "IIT Mumbai",
    scheduledDate: "2024-01-08",
    scheduledTime: "9:00 AM",
    duration: "30 minutes",
    participants: 3456,
    status: "Completed",
    scenario: "Category 3 cyclone approaching. Secure all loose objects and move to designated safe areas.",
    objectives: ["Secure facilities", "Test shelter procedures", "Verify emergency contacts"],
    createdBy: "Disaster Manager",
    region: "Maharashtra",
  },
]

const drillTemplates = [
  {
    id: "TEMP001",
    name: "Standard Fire Drill",
    type: "Fire",
    duration: "15 minutes",
    scenario: "Fire alarm activated. All occupants must evacuate immediately using nearest exit.",
    objectives: ["Test evacuation routes", "Measure response time", "Check assembly points"],
  },
  {
    id: "TEMP002",
    name: "Earthquake Drop Drill",
    type: "Earthquake",
    duration: "10 minutes",
    scenario: "Earthquake detected. Drop, Cover, and Hold On until shaking stops.",
    objectives: ["Practice Drop-Cover-Hold", "Test under-desk protection", "Evaluate response time"],
  },
  {
    id: "TEMP003",
    name: "Flood Evacuation Drill",
    type: "Flood",
    duration: "20 minutes",
    scenario: "Flood warning issued. Move to higher floors and await instructions.",
    objectives: ["Test vertical evacuation", "Check emergency supplies", "Validate communication"],
  },
]

const drillResults = [
  {
    id: "DRILL003",
    title: "Flood Emergency Drill",
    institution: "Gujarat University",
    completedDate: "2024-01-10",
    participants: 2341,
    responseTime: "3.2 minutes",
    completionRate: 94,
    score: 87,
    feedback: "Excellent response time. Minor issues with assembly point organization.",
    improvements: ["Better signage needed", "Additional staff training required"],
  },
  {
    id: "DRILL004",
    title: "Cyclone Preparedness Drill",
    institution: "IIT Mumbai",
    completedDate: "2024-01-08",
    participants: 3456,
    responseTime: "4.1 minutes",
    completionRate: 98,
    score: 92,
    feedback: "Outstanding performance. All objectives met successfully.",
    improvements: ["Continue current procedures", "Share best practices with other institutions"],
  },
]

export default function DrillManagement() {
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-balance">Drill Management</h2>
          <p className="text-muted-foreground">Schedule, monitor, and analyze emergency drills across institutions</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Schedule Drill
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Schedule New Drill</DialogTitle>
                <DialogDescription>Create and schedule a new emergency drill for institutions.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="drill-title">Drill Title</Label>
                  <Input placeholder="e.g., Fire Evacuation Drill" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="drill-type">Drill Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select disaster type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fire">Fire</SelectItem>
                      <SelectItem value="earthquake">Earthquake</SelectItem>
                      <SelectItem value="flood">Flood</SelectItem>
                      <SelectItem value="cyclone">Cyclone</SelectItem>
                      <SelectItem value="general">General Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Target Institution</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select institution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Institutions</SelectItem>
                      <SelectItem value="dps">Delhi Public School</SelectItem>
                      <SelectItem value="st-marys">St. Mary's College</SelectItem>
                      <SelectItem value="gujarat-uni">Gujarat University</SelectItem>
                      <SelectItem value="iit-mumbai">IIT Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template">Use Template</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select template (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Create from scratch</SelectItem>
                      {drillTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Scheduled Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Scheduled Time</Label>
                  <Input type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Expected Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="20">20 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants">Expected Participants</Label>
                  <Input type="number" placeholder="e.g., 1500" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="scenario">Drill Scenario</Label>
                  <Textarea placeholder="Describe the emergency scenario for this drill..." rows={3} />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="objectives">Drill Objectives</Label>
                  <Textarea placeholder="List the key objectives and goals for this drill..." rows={2} />
                </div>
                <div className="col-span-2 flex items-center space-x-2">
                  <Switch id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Send notifications to participants</Label>
                </div>
                <div className="col-span-2 flex items-center space-x-2">
                  <Switch id="mandatory" />
                  <Label htmlFor="mandatory">Mark as mandatory drill</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsScheduleDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>Schedule Drill</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Drill Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Drills</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+3</span> this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Drills</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Currently in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+2.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.7 min</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">-0.3 min</span> improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Drills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-chart-1" />
            Scheduled Drills
          </CardTitle>
          <CardDescription>Upcoming and ongoing emergency drills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledDrills.map((drill) => (
              <div key={drill.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium">{drill.title}</h4>
                      <Badge
                        variant={
                          drill.status === "Scheduled"
                            ? "outline"
                            : drill.status === "In Progress"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {drill.status}
                      </Badge>
                      <Badge variant="outline">{drill.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{drill.scenario}</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{drill.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{drill.scheduledDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{drill.scheduledTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{drill.participants.toLocaleString()} participants</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-muted-foreground mb-1">Objectives:</p>
                      <div className="flex flex-wrap gap-1">
                        {drill.objectives.map((objective, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {objective}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {drill.status === "Scheduled" && (
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Start
                      </Button>
                    )}
                    {drill.status === "In Progress" && (
                      <Button variant="outline" size="sm">
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </div>
                {drill.status === "In Progress" && (
                  <div className="mt-4 p-3 bg-chart-1/10 border border-chart-1/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Drill Progress</span>
                      <span className="text-sm text-muted-foreground">67% Complete</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drill Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-3" />
              Recent Drill Results
            </CardTitle>
            <CardDescription>Performance analysis of completed drills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {drillResults.map((result) => (
                <div key={result.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium">{result.title}</h4>
                      <p className="text-sm text-muted-foreground">{result.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{result.score}%</div>
                      <div className="text-xs text-muted-foreground">Overall Score</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                    <div className="text-center">
                      <div className="font-medium">{result.participants.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">{result.responseTime}</div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">{result.completionRate}%</div>
                      <div className="text-xs text-muted-foreground">Completion</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Progress value={result.completionRate} className="h-2" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{result.feedback}</p>

                  <div className="space-y-1">
                    <p className="text-xs font-medium">Improvements:</p>
                    {result.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <AlertCircle className="h-3 w-3" />
                        <span>{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Drill Templates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-chart-2" />
              Drill Templates
            </CardTitle>
            <CardDescription>Pre-configured drill scenarios for quick scheduling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {drillTemplates.map((template) => (
                <div key={template.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant="outline">{template.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{template.scenario}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{template.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          <span>{template.objectives.length} objectives</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="sm">
                        <Plus className="h-3 w-3 mr-1" />
                        Use
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Plus className="h-4 w-4 mr-2" />
              Create New Template
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
