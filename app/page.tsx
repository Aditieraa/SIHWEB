"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import ContentManagement from "@/components/content-management"
import AnalyticsDashboard from "@/components/analytics-dashboard"
import UserManagement from "@/components/user-management"
import StudentProgressAnalysis from "@/components/student-progress-analysis"
import EmergencyResponse from "@/components/emergency-response"
import DrillManagement from "@/components/drill-management"
import {
  Shield,
  Users,
  BookOpen,
  AlertTriangle,
  BarChart3,
  Settings,
  Bell,
  Calendar,
  Target,
  TrendingUp,
  Activity,
  FileText,
  UserCheck,
} from "lucide-react"

export default function SafeSparkAdmin() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-card-foreground">SafeSpark Admin</h1>
              <p className="text-sm text-muted-foreground">Disaster Education and Response Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-sidebar min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </Button>
            <Button
              variant={activeTab === "content" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("content")}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Content Management
            </Button>
            <Button
              variant={activeTab === "users" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("users")}
            >
              <Users className="h-4 w-4 mr-2" />
              User Management
            </Button>
            <Button
              variant={activeTab === "drills" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("drills")}
            >
              <Target className="h-4 w-4 mr-2" />
              Drill Management
            </Button>
            <Button
              variant={activeTab === "emergency" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("emergency")}
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Emergency Response
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("analytics")}
            >
              <Activity className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button
              variant={activeTab === "student-progress" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("student-progress")}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Student Progress
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-balance">Dashboard Overview</h2>
                <p className="text-muted-foreground">Monitor disaster preparedness across all institutions</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Institutions</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-chart-3">+12%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89,432</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-chart-3">+8%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Drills Completed</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,847</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-chart-3">+23%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Preparedness Score</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87.3%</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-chart-3">+5.2%</span> from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates across the platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-chart-3" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New earthquake module published</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-chart-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Fire drill scheduled for 15 schools</p>
                        <p className="text-xs text-muted-foreground">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-chart-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Emergency alert sent to Mumbai region</p>
                        <p className="text-xs text-muted-foreground">6 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common administrative tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Send Emergency Alert
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule New Drill
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Create Content Module
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <UserCheck className="h-4 w-4 mr-2" />
                      Review User Reports
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Content Management Tab */}
            <TabsContent value="content" className="space-y-6">
              <ContentManagement />
            </TabsContent>

            {/* User Management Tab */}
            <TabsContent value="users" className="space-y-6">
              <UserManagement />
            </TabsContent>

            {/* Drill Management Tab */}
            <TabsContent value="drills" className="space-y-6">
              <DrillManagement />
            </TabsContent>

            {/* Analytics Dashboard Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <AnalyticsDashboard />
            </TabsContent>

            {/* Student Progress Analysis Tab */}
            <TabsContent value="student-progress" className="space-y-6">
              <StudentProgressAnalysis />
            </TabsContent>

            {/* Emergency Response Tab */}
            <TabsContent value="emergency" className="space-y-6">
              <EmergencyResponse />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
