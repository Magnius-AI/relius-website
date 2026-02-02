# Relius Platform - Comprehensive Project Overview

> **Purpose**: This document provides a comprehensive overview of the Relius Platform for business discussions including marketing, strategy, pricing, and product positioning. Designed for use in AI project assistants (Claude Projects, ChatGPT, etc.).

---

## Executive Summary

**Relius Platform** is a modern, cloud-based church management system (ChMS) that combines traditional church operations with AI-powered capabilities. It serves as an all-in-one solution for churches to manage members, events, donations, volunteers, communications, and pastoral care—while leveraging artificial intelligence to automate content creation, provide insights, and enhance ministry effectiveness.

### Key Value Proposition
- **All-in-One Platform**: Replaces multiple disconnected tools with a unified system
- **AI-First Approach**: Native AI features that go beyond basic automation
- **Easy Migration**: Built-in import wizards from major competitors (Planning Center, ChurchTrac, Tithe.ly)
- **Modern User Experience**: Clean, intuitive interface built with contemporary web technologies
- **Scalable Architecture**: Designed to serve small churches to large multi-site organizations
- **Cloud-Native**: Fully hosted solution with no on-premise infrastructure required

### Current State
- **Status**: Functional MVP in active development
- **Deployment**: Production-ready on Google Cloud Platform
- **License**: Proprietary - All rights reserved

---

## Target Market & Users

### Primary Market: Churches of All Sizes

| Segment | Size | Typical Needs | Best Fit Tier |
|---------|------|---------------|---------------|
| **Small Churches** | Any size | Basic member tracking, simple event management, donation records | Basic |
| **Growing Churches** | Any size | Pastoral care tracking, prayer requests, follow-ups, advanced reporting | Pro |
| **Large/Multi-Site** | Any size | AI features, content generation, API access, dedicated support | Max |

### User Personas

1. **Church Administrators**
   - Primary power users managing day-to-day operations
   - Need: Efficient workflows, comprehensive reporting, member management

2. **Pastoral Staff**
   - Focus on member care, prayer requests, follow-ups
   - Need: AI-powered pastoral insights, at-risk member detection, milestone tracking

3. **Ministry Leaders**
   - Manage specific ministries, small groups, teams
   - Need: Group management, attendance tracking, communication tools

4. **Finance Managers**
   - Handle donations, campaigns, financial reporting
   - Need: Donation tracking, giving analytics, donor segmentation

5. **Volunteer Coordinators**
   - Organize service teams, schedule volunteers
   - Need: AI-powered scheduling, burnout detection, availability management

6. **Event Coordinators**
   - Plan and execute church events
   - Need: Calendar management, RSVP tracking, QR check-in

7. **External Renters** (Public-facing)
   - Community members booking church facilities
   - Need: Room browsing, online booking, payment processing

---

## Core Features (Traditional ChMS Capabilities)

### 1. People Management
- **Member Directory**: Comprehensive contact database with custom fields
- **Timeline Tracking**: Full history of member interactions, attendance, giving
- **New Member Outreach**: Automated tracking of new visitor follow-ups
- **Family Relationships**: Link family members together
- **Person Notes**: Private notes for pastoral care

### 2. Groups Management
- **Small Groups**: Create and manage community groups
- **Ministry Teams**: Organize service teams and ministry areas
- **Attendance Tracking**: Record group participation
- **Leader Assignment**: Designate group leaders with appropriate permissions

### 3. Service Planning
- **Service Order Builder**: Plan worship service elements
- **Team Scheduling**: Assign volunteers to service positions
- **Song/Media Library**: Manage worship songs and media assets
- **Position Templates**: Standardized role definitions

### 4. Financial Management
- **Donation Tracking**: Record and categorize all giving
- **Giving Analytics**: Insights into giving patterns and trends
- **In-Kind Donations**: Track non-monetary gifts
- **Fundraising Campaigns**: Goal-based campaign management
- **Online Giving**: Stripe-powered payment processing

### 5. Event Management
- **Event Calendar**: Visual calendar with drag-and-drop
- **RSVP System**: Online event registration
- **Recurring Events**: Support for repeating events
- **Event Check-In**: Track attendance at specific events

### 6. Check-In System
- **QR Code Check-In**: Contactless arrival tracking
- **Self-Service Kiosks**: Public check-in stations
- **Child Safety**: Secure children's ministry check-in
- **Attendance Reporting**: Historical attendance analytics

### 7. Room Rentals
- **Facility Booking**: Online room reservation system
- **Availability Calendar**: Real-time room availability
- **Payment Processing**: Integrated rental payments via Stripe
- **External Renters**: Public-facing booking for community members

### 8. Communications Hub
- **Email Messaging**: Bulk and individual email sending
- **SMS Notifications**: Text message alerts (optional integration)
- **Announcements**: Church-wide announcements
- **Contact Form Submissions**: Capture and route incoming inquiries

### 9. Pastoral Care
- **Prayer Requests**: Submission and tracking system
- **Follow-Up Management**: Assign and track pastoral follow-ups
- **Milestone Tracking**: Record significant life events (baptisms, weddings, etc.)
- **Person Timeline**: Complete care history for each member

### 10. Public Website
- **Church Landing Page**: Customizable public-facing site
- **Sermon Archive**: Publicly accessible sermon library
- **Event Listings**: Public event calendar
- **Contact Forms**: Visitor inquiry capture
- **Room Browsing**: Public facility viewing and booking

---

## Data Migration System

Relius includes a comprehensive, guided migration wizard that enables churches to easily switch from competing platforms. This reduces friction in customer acquisition and provides a smooth onboarding experience.

### Supported Migration Sources

| Platform | Data Types Supported | Export Method |
|----------|---------------------|---------------|
| **Planning Center** | People, Donations | CSV export with headers |
| **ChurchTrac** | People, Donations | CSV export (positional columns) |
| **Tithe.ly** | People, Donations, Tags, Attendance, Newsletter | CSV exports with headers |
| **Generic CSV** | People, Donations | Any CSV file with headers |

### Migration Wizard Features

**6-Step Guided Process:**
1. **Select Source** - Choose the platform migrating from with platform-specific export instructions
2. **Upload Files** - Drag-and-drop CSV upload with automatic structure detection
3. **Map Columns** - Intelligent field mapping with auto-suggestions and sample data preview
4. **Review Duplicates** - AI-powered duplicate detection with merge/create/skip options
5. **Import Progress** - Real-time progress tracking with error handling
6. **Summary & Results** - Complete import statistics with error report download

### Intelligent Data Handling

**Duplicate Detection Algorithm:**
- Weighted scoring system: Email (50pts), Phone (30pts), Name fuzzy match (20pts)
- Confidence thresholds: <50% auto-create, 50-80% manual review, >80% suggest merge
- Per-record decision options: Merge, Create New, or Skip

**Field Normalization:**
- Phone numbers normalized to standard format
- Email validation and case normalization
- Date parsing across 9+ formats
- Currency/amount parsing with symbol handling
- Role/status standardization (member, volunteer, admin, etc.)

**Data Preservation:**
- Unmapped columns automatically stored as searchable tags
- Source tracking tags for audit trail (e.g., "imported:planningcenter:2024-01-15")
- Nothing is lost in translation

**Error Handling:**
- Per-record database savepoints (failed records don't affect others)
- Downloadable error report (CSV) with row numbers and details
- Partial success support (X created, Y failed)

### Migration Value Proposition
- **Reduces switching friction**: Churches can bring their entire history
- **Competitive advantage**: Direct import from Planning Center, ChurchTrac, Tithe.ly
- **Data integrity**: Validation, normalization, and duplicate detection
- **Admin control**: Manual review of duplicates and mappings
- **Audit trail**: Source tracking on all imported records

---

## AI-Powered Differentiators

Relius Platform distinguishes itself through seven integrated AI capabilities:

### 1. Content Studio
**Purpose**: Generate multi-format content from sermon materials

- **Email Generation**: Creates sermon recap emails with subject lines, preview text, and full HTML body
- **Social Media Posts**: Platform-specific content for Facebook, Instagram, Twitter with hashtags and CTAs
- **Newsletter Content**: Formatted newsletter sections
- **Study Guides**: Discussion questions and reflection prompts

**Value**: Saves hours of content creation time each week; maintains consistent messaging across channels

### 2. Translation Console
**Purpose**: Real-time multilingual support for services

- **50+ Languages**: Support for major world languages
- **Live Captions**: Real-time translation during services
- **Sermon Translation**: Translate written sermon content
- **Quota Management**: Per-church usage tracking

**Value**: Enables churches to serve diverse, multilingual congregations

### 3. Pastoral Care AI
**Purpose**: Enhance pastoral effectiveness with intelligent insights

- **Sentiment Analysis**: Analyze prayer request tone and urgency
- **At-Risk Detection**: Flag members showing concerning patterns
- **Care Recommendations**: Suggest appropriate pastoral responses
- **Engagement Scoring**: Track member connection levels

**Value**: Helps pastoral staff prioritize care and identify needs proactively

### 4. AI Volunteer Scheduler
**Purpose**: Intelligent volunteer assignment and wellbeing

- **Smart Matching**: Match volunteers to positions based on skills and availability
- **Burnout Detection**: Identify over-scheduled volunteers
- **Conflict Resolution**: Avoid scheduling conflicts automatically
- **Preference Learning**: Improve assignments over time

**Value**: Reduces scheduling time, improves volunteer retention and satisfaction

### 5. AI Sermon Planner
**Purpose**: Assist pastors in sermon preparation

- **File Upload & Analysis**: Process notes, PDFs, documents
- **Outline Generation**: AI-suggested sermon structures
- **Scripture Integration**: Relevant verse recommendations
- **Series Planning**: Multi-week sermon series support
- **Thinking Mode**: Iterative improvement with AI reasoning

**Value**: Accelerates sermon preparation while maintaining pastoral voice

### 6. AI Donations Manager
**Purpose**: Predictive analytics for stewardship

- **Donor Segmentation**: Categorize donors by giving patterns
- **Churn Prediction**: Identify donors at risk of stopping
- **Giving Insights**: Analyze trends and opportunities
- **Automated Thank-Yous**: Personalized appreciation messages

**Value**: Improves donor retention and stewardship strategy

### 7. Semantic Bible Search
**Purpose**: Intelligent scripture discovery

- **Vector-Based Search**: Find verses by meaning, not just keywords
- **Contextual Recommendations**: Related passage suggestions
- **Multi-Translation Support**: Search across Bible versions
- **Sermon Integration**: Embed relevant verses in sermon planning

**Value**: Deepens biblical engagement and research efficiency

---

## Subscription Tiers & Pricing

### Pricing Model
- **SaaS Subscription**: Monthly or yearly billing
- **Yearly Discount**: Approximately 2 months free with annual commitment
- **No Setup Fees**: Self-service onboarding
- **Free Trial**: Available for evaluation (not explicitly configured yet)

### Tier Overview

| Plan | Monthly | Yearly | Best For |
|------|---------|--------|----------|
| **Basic** | $39.99/month | $479.88/year | Churches wanting core management features |
| **Pro** | $79.99/month | $959.88/year | Churches wanting Pastoral Care features |
| **Max** | $199.99/month | $2,399.88/year | Churches wanting AI features |

### Pricing Strategy Notes
- **2x jump** from Basic to Pro includes Pastoral Care features
- **2.5x jump** from Pro to Max adds AI features
- **Pro is featured tier**: Positioned as the recommended plan for most churches
- **Annual pricing** provides ~20% discount

---

## Feature Comparison Matrix

| Feature | Basic | Pro | Max |
|---------|:-----:|:---:|:---:|
| **Capacity** ||||
| Members | Unlimited | Unlimited | Unlimited |
| Events | Unlimited | Unlimited | Unlimited |
| Groups | Unlimited | Unlimited | Unlimited |
| **Core Features** ||||
| Member Management | Yes | Yes | Yes |
| Group Management | Yes | Yes | Yes |
| Event Calendar | Yes | Yes | Yes |
| Donation Tracking | Yes | Yes | Yes |
| Check-In System | Yes | Yes | Yes |
| QR Code Generation | Yes | Yes | Yes |
| Volunteer Scheduling | Yes | Yes | Yes |
| Data Migration Wizard | Yes | Yes | Yes |
| **Pastoral Care** ||||
| Prayer Request Management | - | Yes | Yes |
| Pastoral Follow-ups | - | Yes | Yes |
| Member Milestones | - | Yes | Yes |
| New Member Contact Tasks | - | Yes | Yes |
| Care Notes & History | - | Yes | Yes |
| **AI Features** ||||
| AI Content Studio | - | - | Yes |
| AI Sermon Planner | - | - | Yes |
| AI Pastoral Insights | - | - | Yes |
| Sentiment Analysis | - | - | Yes |
| Translation Console | - | - | Yes |
| AI-Powered Donor Analytics | - | - | Yes |
| **Advanced Features** ||||
| Custom Branding | - | Yes | Yes |
| Advanced Reporting | - | Yes | Yes |
| API Access | - | - | Yes |
| **Support & Services** ||||
| Email Support | Yes | Yes | Yes |
| Phone Support | - | Yes | Yes |
| Priority Support | - | Yes | Yes |
| Dedicated Success Partner | - | - | Yes |

---

## Technology Foundation

### Architecture Overview
Relius is built as a modern cloud-native application:

- **Frontend**: Single-page web application (React)
- **Backend**: RESTful API with comprehensive endpoints
- **Database**: PostgreSQL with vector search capabilities
- **Infrastructure**: Google Cloud Platform (fully managed)

### Key Technical Characteristics
- **Multi-Tenant**: Single codebase serving multiple churches with full data isolation
- **Mobile-Responsive**: Works on desktop, tablet, and mobile browsers
- **Internationalization**: Interface available in 6 languages (English, Spanish, French, German, Portuguese, Chinese)
- **Security**: JWT authentication, optional 2FA, role-based access control
- **API-First**: RESTful API enables future integrations and mobile apps

### AI Infrastructure
- **Primary AI Provider**: Google Gemini 2.5 Flash
- **Fallback Providers**: OpenAI GPT-4o-mini, Anthropic Claude (configured but optional)
- **Vector Search**: Semantic search using pgvector for Bible and content search

---

## Integrations & Ecosystem

### Current Integrations

| Integration | Purpose | Tier Availability |
|-------------|---------|-------------------|
| **Stripe** | Payment processing (donations, subscriptions, rentals) | All Tiers |
| **AWS SES** | Transactional email delivery | All Tiers |
| **Google Cloud** | Infrastructure, storage, AI services | All Tiers |
| **Bible API** | Scripture lookup and search | All Tiers |
| **Google Drive** | Document repository integration | Pro+ |

### Data Import Support

| Platform | Import Capability |
|----------|-------------------|
| **Planning Center** | Full migration wizard with field mapping |
| **ChurchTrac** | Full migration wizard with positional parsing |
| **Tithe.ly** | Full migration wizard (People, Donations, Tags, Attendance, Newsletter) |
| **Generic CSV** | Flexible import for any CSV data source |

### Integration Capabilities
- **Webhooks**: Configurable webhook endpoints for external systems
- **API Access**: Full REST API access for Max tier
- **Custom Integrations**: Custom development available for Max tier

### Future Integration Opportunities
- Church Community Builder migration
- Mailchimp/email marketing sync
- Accounting software integration (QuickBooks, Xero)
- Calendar sync (Google Calendar, Outlook)
- Mobile app (native iOS/Android)

---

## Competitive Positioning

### Market Landscape
The church management software market includes:

1. **Legacy Players**: Planning Center, Church Community Builder, Fellowship One
2. **Modern Challengers**: Tithe.ly, Breeze, ChurchTrac
3. **Enterprise Solutions**: Pushpay, Ministry Brands portfolio

### Relius Differentiation

| Competitive Advantage | Description |
|----------------------|-------------|
| **AI-Native** | Built with AI from the ground up, not bolted on |
| **Modern UX** | Contemporary design vs. dated legacy interfaces |
| **All-in-One** | Unified platform vs. fragmented point solutions |
| **Transparent Pricing** | Simple tier structure vs. complex à la carte |
| **Content Automation** | Unique Content Studio for sermon-to-content pipeline |
| **Pastoral Intelligence** | AI-powered care prioritization and insights |
| **Easy Migration** | Built-in import from Planning Center, ChurchTrac, Tithe.ly |

### Competitive Strengths
- **Migration from competitors**: Direct import wizards reduce switching friction
- **AI differentiation**: Features competitors don't have
- **Modern architecture**: Cloud-native vs. legacy systems
- **Unified experience**: Single platform vs. multiple tools

### Areas for Continued Investment
- **Brand Recognition**: New entrant vs. established players
- **Mobile App**: Currently web-only (no native apps yet)
- **Ecosystem Size**: Smaller integration marketplace
- **Track Record**: Less production deployment history

---

## Current State & Roadmap Considerations

### What's Production-Ready
- Core member, group, and event management
- Donation tracking with Stripe integration
- QR code check-in system
- AI Content Studio (sermon to content generation)
- AI Sermon Planner with file upload
- Multi-language interface (6 languages)
- Room rental system with payments
- Role-based access control
- Public church website generation
- **Data migration wizard** (Planning Center, ChurchTrac, Tithe.ly, generic CSV)

### Areas for Enhancement
- **Mobile Experience**: Native iOS/Android apps
- **Reporting**: More advanced analytics and custom reports
- **Integrations**: Additional third-party connections
- **Offline Support**: Offline check-in capability
- **Live Streaming**: Integration with streaming platforms

### Infrastructure Considerations
- **Scalability**: Cloud Run auto-scales based on demand
- **Reliability**: Built on GCP managed services
- **Backup/Recovery**: Cloud SQL automated backups
- **Monitoring**: Production monitoring and alerting (to be enhanced)

---

## Key Metrics & KPIs to Track

### Product Metrics
- Monthly Active Users (MAU)
- Feature adoption rates by tier
- AI feature usage (content generated, translations, etc.)
- Check-in volume
- Donation processing volume
- **Migration success rate** (records imported vs. errors)
- **Migration source distribution** (which platforms users come from)

### Business Metrics
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Churn rate by tier
- Upgrade/downgrade rates
- Trial-to-paid conversion
- **Migration-driven signups** (customers acquired via easy migration)

### Operational Metrics
- API response times
- AI generation success rates
- Email delivery rates
- Support ticket volume

---

## Summary

Relius Platform is positioned as a **next-generation church management system** that brings AI capabilities to ministry operations. With a clear three-tier pricing model, comprehensive feature set, built-in migration from competitors, and modern cloud architecture, it serves churches from small startups to large multi-site organizations.

**Key Talking Points**:
1. **AI is the differentiator** - Content Studio, Sermon Planner, and Pastoral Care AI set Relius apart
2. **Easy switching** - Built-in migration from Planning Center, ChurchTrac, and Tithe.ly
3. **All-in-one simplicity** - Replace multiple tools with one unified platform
4. **Modern experience** - Clean, intuitive interface that staff actually enjoy using
5. **Scalable pricing** - Grow from Basic to Pro to Max as the church grows
6. **Cloud-native** - No IT infrastructure required, automatic updates, always available

---

*Document Version: 1.1*
*Last Updated: December 2024*
*For internal business discussions and AI project assistants*
