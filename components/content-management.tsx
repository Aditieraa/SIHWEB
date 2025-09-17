"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BookOpen,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Upload,
  Globe,
  Users,
  Award,
  Video,
  FileText,
  HelpCircle,
} from "lucide-react"

const contentModules = [
  {
    id: 1,
    title: "Earthquake Safety Fundamentals",
    type: "Video",
    category: "Earthquake",
    region: "All India",
    ageGroup: "9-12",
    language: "Hindi, English",
    status: "Published",
    views: 12847,
    completionRate: 89,
    lastUpdated: "2024-01-15",
    author: "Dr. Priya Sharma",
  },
  {
    id: 2,
    title: "Flood Response Protocol",
    type: "Interactive",
    category: "Flood",
    region: "Punjab, Bihar, Maharashtra",
    ageGroup: "6-8",
    language: "Punjabi, Hindi, Marathi",
    status: "Draft",
    views: 0,
    completionRate: 0,
    lastUpdated: "2024-01-20",
    author: "Rajesh Kumar",
  },
  {
    id: 3,
    title: "Fire Evacuation Quiz",
    type: "Quiz",
    category: "Fire",
    region: "All India",
    ageGroup: "K-5",
    language: "Hindi, English, Tamil",
    status: "Published",
    views: 8934,
    completionRate: 94,
    lastUpdated: "2024-01-10",
    author: "Anita Patel",
  },
  {
    id: 4,
    title: "Cyclone Preparedness Guide",
    type: "Infographic",
    category: "Cyclone",
    region: "Coastal States",
    ageGroup: "College",
    language: "English, Telugu, Tamil",
    status: "Review",
    views: 2341,
    completionRate: 76,
    lastUpdated: "2024-01-18",
    author: "Dr. Suresh Menon",
  },
]

export default function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const filteredModules = contentModules.filter((module) => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || module.status.toLowerCase() === filterStatus
    const matchesType = filterType === "all" || module.type.toLowerCase() === filterType
    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "published":
        return "default"
      case "draft":
        return "secondary"
      case "review":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "video":
        return <Video className="h-4 w-4" />
      case "quiz":
        return <HelpCircle className="h-4 w-4" />
      case "interactive":
        return <Users className="h-4 w-4" />
      case "infographic":
        return <FileText className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-balance">Content Management</h2>
        <p className="text-muted-foreground">Create and manage disaster preparedness educational content</p>
      </div>

      {/* Content Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Modules</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+12</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">76% of total content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+18%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+3%</span> improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Management Tools */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Educational Modules</CardTitle>
              <CardDescription>Manage disaster preparedness content library</CardDescription>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Module
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Educational Module</DialogTitle>
                  <DialogDescription>Add a new disaster preparedness learning module</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Module Title</Label>
                      <Input id="title" placeholder="e.g., Earthquake Safety Basics" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Content Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="interactive">Interactive</SelectItem>
                          <SelectItem value="quiz">Quiz</SelectItem>
                          <SelectItem value="infographic">Infographic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Disaster Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="earthquake">Earthquake</SelectItem>
                          <SelectItem value="flood">Flood</SelectItem>
                          <SelectItem value="fire">Fire</SelectItem>
                          <SelectItem value="cyclone">Cyclone</SelectItem>
                          <SelectItem value="general">General Safety</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ageGroup">Age Group</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k-5">K-5 (Ages 5-10)</SelectItem>
                          <SelectItem value="6-8">6-8 (Ages 11-13)</SelectItem>
                          <SelectItem value="9-12">9-12 (Ages 14-18)</SelectItem>
                          <SelectItem value="college">College (18+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Target Region</Label>
                    <Input id="region" placeholder="e.g., All India, Coastal States, etc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Brief description of the module content..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Content</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsCreateDialogOpen(false)}>Create Module</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="review">Review</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="interactive">Interactive</SelectItem>
                <SelectItem value="quiz">Quiz</SelectItem>
                <SelectItem value="infographic">Infographic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Content Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Module</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Completion</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredModules.map((module) => (
                  <TableRow key={module.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{module.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {module.category} • {module.ageGroup} • {module.author}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(module.type)}
                        <span>{module.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{module.region}</div>
                      <div className="text-xs text-muted-foreground">{module.language}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(module.status)}>{module.status}</Badge>
                    </TableCell>
                    <TableCell>{module.views.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div className="bg-chart-3 h-2 rounded-full" style={{ width: `${module.completionRate}%` }} />
                        </div>
                        <span className="text-sm">{module.completionRate}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
