"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Download,
  Award,
  BookOpen,
  Clock,
  Star,
  AlertCircle,
} from "lucide-react"

// Sample student progress data
const studentProgressData = [
  {
    id: "STU001",
    name: "Ninad Raut",
    class: "9-A",
    institution: "Guru Nanak Dev University",
    preparednessScore: 92,
    modulesCompleted: 18,
    totalModules: 20,
    drillsParticipated: 8,
    totalDrills: 10,
    averageQuizScore: 87,
    timeSpent: 145, // minutes
    lastActive: "2 hours ago",
    trend: "up",
    badges: ["Fire Safety Expert", "Earthquake Prepared"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "STU002",
    name: "Soham Rane",
    class: "10-B",
    institution: "Punjabi University, Patiala",
    preparednessScore: 88,
    modulesCompleted: 16,
    totalModules: 20,
    drillsParticipated: 9,
    totalDrills: 10,
    averageQuizScore: 91,
    timeSpent: 132,
    lastActive: "1 day ago",
    trend: "up",
    badges: ["Flood Response Champion", "Quiz Master"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "STU003",
    name: "Aditi Talekar",
    class: "8-C",
    institution: "Khalsa College, Amritsar",
    preparednessScore: 76,
    modulesCompleted: 12,
    totalModules: 18,
    drillsParticipated: 5,
    totalDrills: 8,
    averageQuizScore: 73,
    timeSpent: 89,
    lastActive: "3 days ago",
    trend: "down",
    badges: ["Getting Started"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "STU004",
    name: "Arya More",
    class: "11-A",
    institution: "Bhupindra International Public School",
    preparednessScore: 95,
    modulesCompleted: 22,
    totalModules: 22,
    drillsParticipated: 12,
    totalDrills: 12,
    averageQuizScore: 96,
    timeSpent: 198,
    lastActive: "30 minutes ago",
    trend: "up",
    badges: ["Disaster Expert", "Perfect Attendance", "Top Performer"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const progressTrendData = [
  { week: "Week 1", score: 65, modules: 3, drills: 1 },
  { week: "Week 2", score: 72, modules: 6, drills: 2 },
  { week: "Week 3", score: 78, modules: 9, drills: 4 },
  { week: "Week 4", score: 84, modules: 12, drills: 6 },
  { week: "Week 5", score: 88, modules: 15, drills: 7 },
  { week: "Week 6", score: 92, modules: 18, drills: 8 },
]

const skillAssessmentData = [
  { skill: "Fire Safety", score: 92, fullMark: 100 },
  { skill: "Earthquake Response", score: 88, fullMark: 100 },
  { skill: "Flood Preparedness", score: 85, fullMark: 100 },
  { skill: "First Aid", score: 78, fullMark: 100 },
  { skill: "Emergency Communication", score: 94, fullMark: 100 },
  { skill: "Evacuation Procedures", score: 90, fullMark: 100 },
]

const classPerformanceData = [
  { class: "9-A", avgScore: 87, students: 32, completion: 89 },
  { class: "9-B", avgScore: 82, students: 28, completion: 76 },
  { class: "10-A", avgScore: 91, students: 30, completion: 94 },
  { class: "10-B", avgScore: 85, students: 29, completion: 82 },
  { class: "11-A", avgScore: 93, students: 25, completion: 96 },
  { class: "11-B", avgScore: 88, students: 27, completion: 88 },
]

export default function StudentProgressAnalysis() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-balance">Student Progress Analysis</h2>
          <p className="text-muted-foreground">Detailed insights into individual student learning and performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search students by name, ID, or institution..." className="pl-10" />
              </div>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all-classes">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-classes">All Classes</SelectItem>
                  <SelectItem value="9-a">Class 9-A</SelectItem>
                  <SelectItem value="10-b">Class 10-B</SelectItem>
                  <SelectItem value="11-a">Class 11-A</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-institutions">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-institutions">All Institutions</SelectItem>
                  <SelectItem value="dps">Delhi Public School</SelectItem>
                  <SelectItem value="st-marys">St. Mary's College</SelectItem>
                  <SelectItem value="iit">IIT Mumbai</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.8%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+3.2%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Learners</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+156</span> new this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142 min</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+18 min</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quiz Average</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86.5%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+2.1%</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Individual Progress Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Individual Progress Trend</CardTitle>
            <CardDescription>Weekly progress tracking for selected student</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  name="Preparedness Score"
                />
                <Line
                  type="monotone"
                  dataKey="modules"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  name="Modules Completed"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Skill Assessment Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Assessment</CardTitle>
            <CardDescription>Competency levels across different disaster categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillAssessmentData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" 
                 tick={{ fontSize: 9.5 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Skill Level"
                  dataKey="score"
                  stroke="var(--chart-1)"
                  fill="var(--chart-1)"
                  fillOpacity={0.3}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Class Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Class Performance Comparison</CardTitle>
          <CardDescription>Average scores and completion rates by class</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={classPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgScore" fill="var(--chart-1)" name="Average Score" />
              <Bar dataKey="completion" fill="var(--chart-2)" name="Completion Rate" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Student Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Individual Student Performance</CardTitle>
          <CardDescription>Detailed progress tracking for all students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studentProgressData.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{student.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {student.class} • {student.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {student.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold">{student.preparednessScore}%</div>
                    <div className="text-xs text-muted-foreground">Preparedness</div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium">
                      {student.modulesCompleted}/{student.totalModules}
                    </div>
                    <div className="text-xs text-muted-foreground">Modules</div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium">
                      {student.drillsParticipated}/{student.totalDrills}
                    </div>
                    <div className="text-xs text-muted-foreground">Drills</div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium">{student.averageQuizScore}%</div>
                    <div className="text-xs text-muted-foreground">Quiz Avg</div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium">{student.timeSpent}m</div>
                    <div className="text-xs text-muted-foreground">Study Time</div>
                  </div>

                  <div className="flex items-center gap-2">
                    {student.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-chart-3" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-chart-2" />
              Students Needing Attention
            </CardTitle>
            <CardDescription>Students with declining performance or low engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-chart-2/10 border border-chart-2/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Low Module Completion</h4>
                    <p className="text-sm text-muted-foreground">23 students below 70% completion</p>
                  </div>
                  <Badge variant="secondary">Review</Badge>
                </div>
              </div>
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-destructive">Declining Scores</h4>
                    <p className="text-sm text-muted-foreground">8 students with dropping quiz scores</p>
                  </div>
                  <Badge variant="destructive">Urgent</Badge>
                </div>
              </div>
              <div className="p-3 bg-chart-3/10 border border-chart-3/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium" style={{ color: "var(--chart-3)" }}>
                      Missed Drills
                    </h4>
                    <p className="text-sm text-muted-foreground">15 students missed recent drills</p>
                  </div>
                  <Badge variant="outline">Follow-up</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-chart-1" />
              Top Performers
            </CardTitle>
            <CardDescription>Students excelling in disaster preparedness</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-chart-1/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-chart-1">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Ninad Raut - 95% Preparedness</p>
                  <p className="text-xs text-muted-foreground">Perfect attendance, all modules completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-chart-2/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-chart-2">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Soham Rane - 92% Preparedness</p>
                  <p className="text-xs text-muted-foreground">Excellent quiz performance, active participant</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-chart-3/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-chart-3">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Aditi Talekar - 88% Preparedness</p>
                  <p className="text-xs text-muted-foreground">High engagement, strong quiz scores</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
