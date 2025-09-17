"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
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
  Users,
  BookOpen,
  Target,
  Award,
  AlertTriangle,
  Calendar,
  Download,
} from "lucide-react"

// Sample data for charts
const preparednessData = [
  { month: "Jan", score: 72, drills: 45, modules: 23 },
  { month: "Feb", score: 75, drills: 52, modules: 28 },
  { month: "Mar", score: 78, drills: 48, modules: 31 },
  { month: "Apr", score: 82, drills: 61, modules: 35 },
  { month: "May", score: 85, drills: 58, modules: 42 },
  { month: "Jun", score: 87, drills: 67, modules: 38 },
]

const regionData = [
  { region: "North India", institutions: 342, preparedness: 89, color: "var(--chart-1)" },
  { region: "South India", institutions: 298, preparedness: 92, color: "var(--chart-2)" },
  { region: "West India", institutions: 267, preparedness: 85, color: "var(--chart-3)" },
  { region: "East India", institutions: 234, preparedness: 81, color: "var(--chart-4)" },
  { region: "Northeast", institutions: 106, preparedness: 78, color: "var(--chart-5)" },
]

const disasterTypeData = [
  { type: "Earthquake", modules: 45, completions: 12847, engagement: 89 },
  { type: "Flood", modules: 38, completions: 9234, engagement: 92 },
  { type: "Fire", modules: 52, completions: 15632, engagement: 94 },
  { type: "Cyclone", modules: 29, completions: 6789, engagement: 87 },
  { type: "General", modules: 83, completions: 21456, engagement: 91 },
]

const ageGroupData = [
  { name: "K-5", value: 28, color: "var(--chart-1)" },
  { name: "6-8", value: 24, color: "var(--chart-2)" },
  { name: "9-12", value: 32, color: "var(--chart-3)" },
  { name: "College", value: 16, color: "var(--chart-4)" },
]

const institutionPerformance = [
  {
    name: "Guru Nanak Dev University",
    preparedness: 94,
    drills: 12,
    modules: 89,
    users: 1247,
    trend: "up",
  },
  {
    name: "Punjabi University, Patiala",
    preparedness: 91,
    drills: 8,
    modules: 76,
    users: 892,
    trend: "up",
  },
  {
    name: "Khalsa College, Amritsar",
    preparedness: 88,
    drills: 15,
    modules: 94,
    users: 2341,
    trend: "down",
  },
  {
    name: "Bhupindra International Public School",
    preparedness: 96,
    drills: 18,
    modules: 98,
    users: 3456,
    trend: "up",
  },
  {
    name: "Apollo Public School, Patiala",
    preparedness: 82,
    drills: 6,
    modules: 67,
    users: 567,
    trend: "up",
  },
]

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-balance">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Comprehensive insights into disaster preparedness performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 Days</SelectItem>
              <SelectItem value="30days">30 Days</SelectItem>
              <SelectItem value="90days">90 Days</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Preparedness</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+5.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Institutions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Module Completions</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64,958</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+18%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drills Conducted</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-chart-3" />
              <span className="text-chart-3">+23%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preparedness Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Preparedness Score Trend</CardTitle>
            <CardDescription>Monthly preparedness scores across all institutions</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={preparednessData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
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
                  dataKey="drills"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  name="Drills Completed"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Performance</CardTitle>
            <CardDescription>Preparedness scores by geographic region</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="preparedness" fill="var(--chart-1)" name="Preparedness Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Age Group Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Age Group Distribution</CardTitle>
            <CardDescription>Content engagement by age groups</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={ageGroupData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ageGroupData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Disaster Type Performance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Disaster Type Performance</CardTitle>
            <CardDescription>Module engagement by disaster category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {disasterTypeData.map((disaster, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{disaster.type}</h4>
                      <Badge variant="outline">{disaster.modules} modules</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{disaster.completions.toLocaleString()} completions</span>
                      <span>{disaster.engagement}% engagement</span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-chart-1 h-2 rounded-full" style={{ width: `${disaster.engagement}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Institutions */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Institutions</CardTitle>
          <CardDescription>Institutions ranked by preparedness score and engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {institutionPerformance.map((institution, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                    #{index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{institution.name}</h4>
                    <p className="text-sm text-muted-foreground">{institution.users.toLocaleString()} users</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-sm font-medium">{institution.preparedness}%</div>
                    <div className="text-xs text-muted-foreground">Preparedness</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{institution.drills}</div>
                    <div className="text-xs text-muted-foreground">Drills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">{institution.modules}%</div>
                    <div className="text-xs text-muted-foreground">Completion</div>
                  </div>
                  <div className="flex items-center">
                    {institution.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-chart-3" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts and Issues */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-chart-2" />
              Performance Alerts
            </CardTitle>
            <CardDescription>Institutions requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-chart-2/10 border border-chart-2/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Low Drill Participation</h4>
                    <p className="text-sm text-muted-foreground">15 institutions below 60% participation</p>
                  </div>
                  <Badge variant="secondary">Medium</Badge>
                </div>
              </div>
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-destructive">Preparedness Score Drop</h4>
                    <p className="text-sm text-muted-foreground">3 institutions dropped below 70%</p>
                  </div>
                  <Badge variant="destructive">High</Badge>
                </div>
              </div>
              <div className="p-3 bg-chart-3/10 border border-chart-3/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium" style={{ color: "var(--chart-3)" }}>
                      Content Engagement Low
                    </h4>
                    <p className="text-sm text-muted-foreground">8 modules with &lt;50% completion</p>
                  </div>
                  <Badge variant="outline">Low</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-chart-1" />
              Upcoming Milestones
            </CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-chart-1" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Quarterly Preparedness Review</p>
                  <p className="text-xs text-muted-foreground">Due in 5 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">National Drill Week</p>
                  <p className="text-xs text-muted-foreground">Starts in 12 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-chart-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Content Audit Deadline</p>
                  <p className="text-xs text-muted-foreground">Due in 18 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-chart-4" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Annual Performance Report</p>
                  <p className="text-xs text-muted-foreground">Due in 25 days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
