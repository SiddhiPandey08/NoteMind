"use client";
// landingPage.tsx
import React from "react";
import {
  FileText,
  FolderTree,
  Search,
  Database,
  LayoutGrid,
  CheckSquare,
  Sparkles,
  Link2,
  AtSign,
  LayoutTemplate,
  Users,
  MousePointer2,
  Share2,
  Globe,
  History,
  FileDown,
  ArrowRight,
  ExternalLink,
  MessageCircleQuestion,
  Check,
  Minus,
} from "lucide-react";
import "./landingPage.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// SVG Figurine placeholders (Replace src with your downloaded Storyset/Icons8 SVGs)
const StorysetFigurine = ({ type }: { type: string }) => {
  const illustrations: Record<string, string> = {
    hero: "https://illustrations.pouch.cool/storyset/workspace.svg",
    editor: "https://illustrations.pouch.cool/storyset/writing.svg",
    data: "https://illustrations.pouch.cool/storyset/analytics.svg",
    ai: "https://illustrations.pouch.cool/storyset/robot.svg",
    collab: "https://illustrations.pouch.cool/storyset/teamwork.svg",
  };

  return (
    <div className="figurine-wrapper">
      <img
        src={illustrations[type] || illustrations.hero}
        alt={`${type} illustration`}
        className="storyset-img"
        onError={(e) => {
          // Fallback graphic if image path fails to load
          (e.target as HTMLElement).style.display = "none";
        }}
      />
    </div>
  );
};

type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  cta: string;
  accent: "pink" | "blue" | "orange";
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Personal",
    price: "$0",
    period: "forever",
    blurb: "For getting your notes out of your head and into one place.",
    cta: "Start Free",
    accent: "blue",
    features: [
      "Unlimited pages & nested hierarchy",
      "Tags, folders & global search",
      "1 database with 3 saved views",
      "Rolling 3-version page history",
      "Markdown & PDF export",
    ],
  },
  {
    name: "Pro",
    price: "$8",
    period: "per month",
    blurb: "For people who live in their notes and want AI on tap.",
    cta: "Start Pro Trial",
    accent: "pink",
    featured: true,
    features: [
      "Everything in Personal",
      "Unlimited databases & views",
      "Unlimited slash AI actions",
      "Custom templates & snippets",
      "Publish pages as public read-only links",
    ],
  },
  {
    name: "Team",
    price: "$15",
    period: "per user / month",
    blurb: "For teams building a shared brain together.",
    cta: "Start Team Trial",
    accent: "orange",
    features: [
      "Everything in Pro",
      "Real-time multiplayer editing",
      "Live presence & custom cursors",
      "Owner / Collaborator sharing",
      "Priority support",
    ],
  },
];

const tabOptions = [
  { value: "all", label: "All Systems" },
  { value: "core", label: "Core & Hierarchy" },
  { value: "data", label: "Data & Views" },
  { value: "editing", label: "Slash & AI" },
  { value: "collab", label: "Sync & Safety" },
];

export const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>("all");

  return (
    <div className="fullscreen-landing">
      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <FileText size={20} />
          </div>
          <span className="brand-name">EVERNOTES</span>
        </div>

        <div className="nav-pills">
          <a href="#features" className="nav-item active">
            Features
          </a>
          <a href="#editor" className="nav-item">
            Editor
          </a>
          <a href="#databases" className="nav-item">
            Databases
          </a>
          <a href="#collab" className="nav-item">
            Collaboration
          </a>
          <a href="#pricing" className="nav-item">
            Pricing
          </a>
        </div>

        <Button className="nav-cta">
          Get Started <ArrowRight size={16} />
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your Knowledge, <br />
          </h1>
          <h1 className="highlight-yellow">Structured & Connected.</h1>

          <p>
            Block-based rich text, infinite page hierarchies, custom database
            views, and real-time multiplayer editing—all built into one
            workspace.
          </p>
          <div className="hero-buttons">
            <Button size="lg" className="btn-primary">
              Start Building Free <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary">
              View Specs <ExternalLink size={18} />
            </Button>
          </div>
        </div>

        <div className="hero-illustration">
          <StorysetFigurine type="hero" />
        </div>
      </section>

      {/* Category Tabs */}
      <div className="filter-container">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="filter-bar">
            {tabOptions.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Grid Features */}
      <section className="feature-grid" id="features">
        {/* Card 1: Core */}
        {(activeTab === "all" || activeTab === "core") && (
          <Card className="grid-card bg-pink">
            <CardHeader className="card-top">
              <Badge variant="secondary" className="card-tag">
                Core Engine
              </Badge>
              <StorysetFigurine type="editor" />
            </CardHeader>
            <CardContent className="card-content">
              <CardTitle>Rich Text & Hierarchy</CardTitle>
              <CardDescription>
                Powered by Tiptap for fast block manipulation and deep
                organization.
              </CardDescription>
              <ul className="spec-list">
                <li>
                  <FileText size={16} /> Tiptap rich text block editor
                </li>
                <li>
                  <FolderTree size={16} /> Infinite nested pages — hierarchy,
                  not flat folders
                </li>
                <li>
                  <Search size={16} /> Tags, folders & global search
                </li>
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Card 2: Data */}
        {(activeTab === "all" || activeTab === "data") && (
          <Card className="grid-card bg-blue">
            <CardHeader className="card-top">
              <Badge variant="secondary" className="card-tag">
                Databases
              </Badge>
              <StorysetFigurine type="data" />
            </CardHeader>
            <CardContent className="card-content">
              <CardTitle>Data & Flexible Views</CardTitle>
              <CardDescription>
                Turn notes into structured planners and synced task managers.
              </CardDescription>
              <ul className="spec-list">
                <li>
                  <Database size={16} /> Custom properties & data schemas
                </li>
                <li>
                  <LayoutGrid size={16} /> Table, board & calendar views —
                  doubles as your planner
                </li>
                <li>
                  <CheckSquare size={16} /> Tasks stay synced between databases
                  and in-note checklists
                </li>
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Card 3: AI & Editing */}
        {(activeTab === "all" || activeTab === "editing") && (
          <Card className="grid-card bg-orange">
            <CardHeader className="card-top">
              <Badge variant="secondary" className="card-tag">
                Intelligence
              </Badge>
              <StorysetFigurine type="ai" />
            </CardHeader>
            <CardContent className="card-content">
              <CardTitle>Editing & AI Assist</CardTitle>
              <CardDescription>
                In-context slash menu and system-prompted onboarding help.
              </CardDescription>
              <ul className="spec-list">
                <li>
                  <Sparkles size={16} /> Slash AI: continue, summarize & fix,
                  plus block insertion
                </li>
                <li>
                  <MessageCircleQuestion size={16} /> Built-in AI assistant
                  answers "how do I..." — scoped to Evernotes, never reads your
                  notes
                </li>
                <li>
                  <Link2 size={16} /> Backlinks connect related pages (no graph
                  view)
                </li>
                <li>
                  <AtSign size={16} /> Mention people, dates & pages
                </li>
                <li>
                  <LayoutTemplate size={16} /> Templates & Command Palette
                  (Cmd+K)
                </li>
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Card 4: Collaboration & Integrity */}
        {(activeTab === "all" || activeTab === "collab") && (
          <Card className="grid-card bg-green">
            <CardHeader className="card-top">
              <Badge variant="secondary" className="card-tag">
                Multiplayer
              </Badge>
              <StorysetFigurine type="collab" />
            </CardHeader>
            <CardContent className="card-content">
              <CardTitle>Collaboration & Backup</CardTitle>
              <CardDescription>
                Real-time Yjs synchronization with rolling snapshot recovery.
              </CardDescription>
              <ul className="spec-list">
                <li>
                  <Users size={16} /> Real-time multiplayer editing (Yjs +
                  Tiptap)
                </li>
                <li>
                  <MousePointer2 size={16} /> Live presence & custom cursors
                </li>
                <li>
                  <Share2 size={16} /> Owner / Collaborator sharing — no complex
                  role trees
                </li>
                <li>
                  <Globe size={16} /> Publish any page as a read-only public
                  link
                </li>
                <li>
                  <History size={16} /> Rolling 3-version snapshot per page
                </li>
                <li>
                  <FileDown size={16} /> Clean Markdown & PDF export
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-header">
          <Badge variant="outline" className="hero-pill">
            <Sparkles size={14} /> Simple, per-workspace pricing
          </Badge>
          <h2>Pick your workspace size</h2>
          <p>
            Start free, solo. Upgrade when you want AI on every block or a team
            writing alongside you.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn("pricing-card", plan.featured && "featured")}
            >
              {plan.featured && (
                <Badge className="pricing-badge">Most Popular</Badge>
              )}
              <div className={`pricing-accent-dot accent-${plan.accent}`} />
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="pricing-blurb">
                  {plan.blurb}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">/ {plan.period}</span>
                </div>
                <Button
                  className={cn(
                    "full-width",
                    plan.featured ? "btn-primary" : "btn-secondary",
                  )}
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.cta} <ArrowRight size={16} />
                </Button>
                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="pricing-footnote">
          <Minus size={12} /> Prices in USD, billed monthly. Cancel anytime.
        </p>
      </section>

      {/* Footer Callout */}
      <footer className="footer-callout">
        <div className="footer-content">
          <h2>Start Structuring Your Second Brain Today</h2>
          <Button size="lg" className="btn-primary dark">
            Launch Evernotes <ArrowRight size={18} />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
