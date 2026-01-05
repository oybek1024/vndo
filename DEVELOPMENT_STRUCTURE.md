# B2B Procurement Marketplace - Development Structure

## Table of Contents
1. [Project Overview](#project-overview)
2. [Route Structure](#route-structure)
3. [User Roles & Permissions](#user-roles--permissions)
4. [Feature Breakdown](#feature-breakdown)
5. [Component Architecture](#component-architecture)
6. [Database Schema](#database-schema)
7. [API Endpoints](#api-endpoints)
8. [State Management](#state-management)
9. [Development Phases](#development-phases)
10. [Technical Stack](#technical-stack)

---

## Project Overview

**Platform**: B2B Procurement Marketplace MVP  
**Purpose**: Hotels (Consumers) purchase goods from approved Suppliers  
**Monetization**: Supplier commissions (2%) + Consumer subscriptions (tiered by volume)

---

## Route Structure

### Public Routes (`/`)
```
/ (Landing Page)
  - Hero section
  - Features overview
  - Sign Up button → redirects to /auth/signup
  - Multi-language support (RU/UZ)
```

### Authentication Routes (`/auth`)
```
/auth
  - /auth (Sign In - default)
    - Role selection: Consumer | Supplier
    - Email/Password form
    - "Don't have account?" → /auth/signup
  
  - /auth/signup
    - Role selection: Consumer | Supplier
    - Registration form
    - Submit → await admin approval
    - Success message: "Awaiting administrator approval"
```

### Application Routes (`/app`)

#### Consumer (Hotel) Layout (`/app/consumer`)
```
/app/consumer
  - /app/consumer/dashboard
    - Order history
    - Monthly spending
    - Category-level expenses
    - Subscription status & tier
  
  - /app/consumer/catalog
    - Grid view (image, price, category)
    - Filters: price, category, minimum order
    - Search functionality
    - Add to Cart
  
  - /app/consumer/cart
    - Cart items
    - Order summary
    - Submit order
  
  - /app/consumer/orders
    - Order list (all statuses)
    - Order details
    - Cancel order (before confirmation only)
    - Auto-reorder settings (disabled if blocked)
  
  - /app/consumer/subscription
    - Current tier
    - Payment status
    - Grace period indicator
    - Payment history
```

#### Supplier Layout (`/app/supplier`)
```
/app/supplier
  - /app/supplier/dashboard
    - Monthly turnover
    - Order counts
    - Commission owed
    - Pending orders
  
  - /app/supplier/catalog
    - Product list
    - Add/Edit/Delete products
    - Bulk upload
    - Multilingual content (RU/UZ)
    - Minimum order amount setting
  
  - /app/supplier/orders
    - New orders (confirm/reject)
    - Confirmed orders
    - Shipping orders
    - Mark as delivered
    - Order details
  
  - /app/supplier/commissions
    - Commission invoices
    - Payment history
    - Outstanding payments
```

#### Administrator Layout (`/app/admin`)
```
/app/admin
  - /app/admin/dashboard
    - Total Consumers/Suppliers
    - Total orders
    - Turnover metrics
    - Platform revenue (subscriptions + commissions)
    - Suspicious activity alerts
  
  - /app/admin/users
    - Consumer management
      - Approve/Reject
      - Block/Unblock
      - View details
    - Supplier management
      - Approve/Reject
      - Block/Unblock
      - View details
  
  - /app/admin/catalog
    - Catalog moderation
    - Product approval/rejection
    - Content management
  
  - /app/admin/orders
    - All orders overview
    - Order status override
    - Cancellation management
  
  - /app/admin/invoices
    - Generate invoices
    - Edit invoices
    - Issue invoices
    - Supplier commission invoices
    - Consumer subscription invoices
  
  - /app/admin/analytics
    - Revenue reports
    - User activity
    - Order analytics
    - Export to Excel/PDF
  
  - /app/admin/approvals
    - Pending Consumer approvals
    - Pending Supplier approvals
    - Approval queue
```

---

## User Roles & Permissions

### Consumer (Hotel)
- **Registration**: Self-register → Await admin approval
- **Post-Approval**: Immediate order placement access
- **Subscription**: Fixed monthly fee (tiered by purchase volume)
- **Grace Period**: 7 days for non-payment before blocking
- **Blocked State**:
  - Cannot place new orders
  - Can view order history
  - Auto-reorder disabled

### Supplier
- **Registration**: Self-register → Await admin approval
- **Post-Approval**: Products become visible, can receive orders
- **Commission**: 2% on confirmed orders (manual payment)
- **Blocked State**:
  - Products invisible
  - Cannot receive new orders
  - Existing orders visible (read-only)

### Administrator
- **Full Access**: All system features
- **Approval Authority**: Consumers & Suppliers
- **Blocking Authority**: Block/Unblock users
- **Invoice Management**: Generate, edit, issue invoices
- **Status Override**: Override order statuses
- **Analytics**: Full system analytics

---

## Feature Breakdown

### 1. Registration & Approval Flow
**Components**:
- `Auth/SignUpForm.tsx` - Registration form with role selection
- `Auth/SignInForm.tsx` - Login form with role selection
- `Admin/ApprovalQueue.tsx` - Admin approval interface

**Flow**:
1. User registers → Status: `pending_approval`
2. Admin receives notification
3. Admin approves/rejects
4. User receives email/SMS notification
5. Consumer: Can place orders immediately
6. Supplier: Products become visible

### 2. Product Catalog
**Components**:
- `Catalog/ProductGrid.tsx` - Grid view with images
- `Catalog/ProductCard.tsx` - Individual product card
- `Catalog/ProductFilters.tsx` - Filter sidebar
- `Catalog/ProductSearch.tsx` - Search bar
- `Supplier/ProductForm.tsx` - Add/Edit product form
- `Supplier/ProductBulkUpload.tsx` - Bulk upload interface

**Features**:
- Multilingual content (RU/UZ)
- Price locking on order creation
- Minimum order amount per supplier
- Category filtering
- Price range filtering

### 3. Cart & Order Management
**Components**:
- `Cart/CartView.tsx` - Cart display
- `Cart/CartItem.tsx` - Individual cart item
- `Orders/OrderList.tsx` - Order listing
- `Orders/OrderDetails.tsx` - Order detail view
- `Orders/OrderStatusBadge.tsx` - Status indicator

**Order Statuses**:
- `new` - Just created
- `confirmed` - Supplier confirmed
- `rejected` - Supplier rejected
- `shipping` - In transit
- `delivered` - Completed

**Cancellation Rules**:
- Consumer: Cancel before confirmation only
- Supplier: Cancel after confirmation
- Admin: Cancel at any time

### 4. Notifications System
**Types**:
- Email notifications
- SMS notifications

**Consumer Notifications**:
- Order created
- Order confirmed
- Order delivered
- Order cancelled by supplier

**Supplier Notifications**:
- New order received
- Order cancelled by consumer
- New commission invoice
- Subscription tier update

**Admin Notifications**:
- New supplier pending approval
- Consumer exceeded turnover threshold
- Suspicious cancellation patterns

### 5. Monetization & Billing
**Components**:
- `Billing/SubscriptionTier.tsx` - Tier display
- `Billing/InvoiceList.tsx` - Invoice listing
- `Billing/InvoiceView.tsx` - Invoice PDF view
- `Admin/InvoiceGenerator.tsx` - Invoice creation
- `Admin/InvoiceEditor.tsx` - Invoice editing

**Supplier Commission**:
- 2% on confirmed orders
- Automated calculation
- Manual payment tracking
- PDF invoice generation

**Consumer Subscription**:
- Fixed monthly fee
- Tiered by purchase volume
- 7-day grace period
- Manual billing
- Blocking on non-payment

### 6. Analytics & Dashboards
**Components**:
- `Dashboard/AdminDashboard.tsx`
- `Dashboard/SupplierDashboard.tsx`
- `Dashboard/ConsumerDashboard.tsx`
- `Analytics/RevenueChart.tsx`
- `Analytics/OrderChart.tsx`
- `Analytics/ExportButton.tsx`

**Admin Metrics**:
- Total consumers/suppliers
- Total orders
- Turnover
- Platform revenue

**Supplier Metrics**:
- Monthly turnover
- Order counts
- Commission owed

**Consumer Metrics**:
- Order history
- Monthly spending
- Category expenses

### 7. Suspicious Activity Detection
**Triggers**:
- Supplier cancelling >20% monthly orders
- High consumer cancellation rates
- Drops in supplier acceptance
- Long confirm-to-delivery delays
- Cancellations after price changes

**Components**:
- `Admin/SuspiciousActivityAlerts.tsx`
- `Admin/ActivityLog.tsx`

### 8. Multi-language Support
**Languages**: Russian (RU), Uzbek (UZ)

**Implementation**:
- i18n configuration
- Language switcher component
- Content translation files
- RTL support if needed

---

## Component Architecture

### Layout Components
```
layouts/
  - AppLayout.tsx (Base layout)
  - ConsumerLayout.tsx
  - SupplierLayout.tsx
  - AdminLayout.tsx
  - AuthLayout.tsx
```

### Page Components
```
pages/
  - landing/
    - index.tsx
  - auth/
    - signin.tsx
    - signup.tsx
  - app/
    - consumer/
      - Dashboard.tsx
      - Catalog.tsx
      - Cart.tsx
      - Orders.tsx
      - Subscription.tsx
    - supplier/
      - Dashboard.tsx
      - Catalog.tsx
      - Orders.tsx
      - Commissions.tsx
    - admin/
      - Dashboard.tsx
      - Users.tsx
      - Catalog.tsx
      - Orders.tsx
      - Invoices.tsx
      - Analytics.tsx
      - Approvals.tsx
```

### Shared Components
```
components/
  - common/
    - Button.tsx
    - Input.tsx
    - Card.tsx
    - Modal.tsx
    - Table.tsx
    - Pagination.tsx
    - Loading.tsx
    - ErrorBoundary.tsx
  - catalog/
    - ProductGrid.tsx
    - ProductCard.tsx
    - ProductFilters.tsx
    - ProductSearch.tsx
  - orders/
    - OrderList.tsx
    - OrderCard.tsx
    - OrderDetails.tsx
    - OrderStatusBadge.tsx
  - cart/
    - CartView.tsx
    - CartItem.tsx
    - CartSummary.tsx
  - notifications/
    - NotificationCenter.tsx
    - NotificationItem.tsx
  - billing/
    - InvoiceView.tsx
    - SubscriptionTier.tsx
  - analytics/
    - Chart.tsx
    - MetricCard.tsx
    - ExportButton.tsx
```

---

## Database Schema

### Users Table
```sql
users
  - id (UUID)
  - email (string, unique)
  - password_hash (string)
  - role (enum: consumer, supplier, admin)
  - status (enum: pending_approval, approved, rejected, blocked)
  - created_at (timestamp)
  - updated_at (timestamp)
  - approved_at (timestamp, nullable)
  - approved_by (UUID, foreign key → users.id)
  - blocked_at (timestamp, nullable)
  - metadata (JSON)
```

### Consumers Table
```sql
consumers
  - id (UUID, foreign key → users.id)
  - hotel_name (string)
  - contact_person (string)
  - phone (string)
  - address (string)
  - subscription_tier (enum)
  - subscription_status (enum: active, grace_period, blocked)
  - subscription_due_date (date)
  - total_purchase_volume (decimal)
  - created_at (timestamp)
```

### Suppliers Table
```sql
suppliers
  - id (UUID, foreign key → users.id)
  - company_name (string)
  - contact_person (string)
  - phone (string)
  - address (string)
  - minimum_order_amount (decimal)
  - total_commission_owed (decimal)
  - created_at (timestamp)
```

### Products Table
```sql
products
  - id (UUID)
  - supplier_id (UUID, foreign key → suppliers.id)
  - name_ru (string)
  - name_uz (string)
  - description_ru (text)
  - description_uz (text)
  - category (string)
  - price (decimal)
  - image_url (string)
  - minimum_order_quantity (integer)
  - is_active (boolean)
  - created_at (timestamp)
  - updated_at (timestamp)
```

### Orders Table
```sql
orders
  - id (UUID)
  - consumer_id (UUID, foreign key → consumers.id)
  - supplier_id (UUID, foreign key → suppliers.id)
  - status (enum: new, confirmed, rejected, shipping, delivered, cancelled)
  - total_amount (decimal)
  - created_at (timestamp)
  - confirmed_at (timestamp, nullable)
  - delivered_at (timestamp, nullable)
  - cancelled_at (timestamp, nullable)
  - cancelled_by (enum: consumer, supplier, admin)
  - cancellation_reason (text, nullable)
```

### Order Items Table
```sql
order_items
  - id (UUID)
  - order_id (UUID, foreign key → orders.id)
  - product_id (UUID, foreign key → products.id)
  - quantity (integer)
  - unit_price (decimal) -- locked price at order creation
  - total_price (decimal)
```

### Invoices Table
```sql
invoices
  - id (UUID)
  - type (enum: commission, subscription)
  - user_id (UUID, foreign key → users.id)
  - amount (decimal)
  - status (enum: draft, issued, paid, cancelled)
  - issue_date (date)
  - due_date (date)
  - paid_at (timestamp, nullable)
  - created_by (UUID, foreign key → users.id)
  - metadata (JSON) -- for edits
  - pdf_url (string, nullable)
```

### Notifications Table
```sql
notifications
  - id (UUID)
  - user_id (UUID, foreign key → users.id)
  - type (enum: email, sms)
  - event_type (string)
  - subject (string)
  - content (text)
  - sent_at (timestamp)
  - status (enum: pending, sent, failed)
```

### Activity Log Table
```sql
activity_logs
  - id (UUID)
  - user_id (UUID, foreign key → users.id)
  - action (string)
  - entity_type (string)
  - entity_id (UUID)
  - metadata (JSON)
  - created_at (timestamp)
```

---

## API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
```

### Consumers
```
GET    /api/consumers/profile
PUT    /api/consumers/profile
GET    /api/consumers/orders
GET    /api/consumers/orders/:id
POST   /api/consumers/orders/:id/cancel
GET    /api/consumers/subscription
GET    /api/consumers/analytics
```

### Suppliers
```
GET    /api/suppliers/profile
PUT    /api/suppliers/profile
GET    /api/suppliers/products
POST   /api/suppliers/products
PUT    /api/suppliers/products/:id
DELETE /api/suppliers/products/:id
POST   /api/suppliers/products/bulk-upload
GET    /api/suppliers/orders
GET    /api/suppliers/orders/:id
POST   /api/suppliers/orders/:id/confirm
POST   /api/suppliers/orders/:id/reject
POST   /api/suppliers/orders/:id/mark-delivered
GET    /api/suppliers/commissions
GET    /api/suppliers/analytics
```

### Catalog
```
GET    /api/catalog/products
GET    /api/catalog/products/:id
GET    /api/catalog/categories
GET    /api/catalog/search
```

### Cart & Orders
```
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/update/:itemId
DELETE /api/cart/remove/:itemId
POST   /api/cart/checkout
GET    /api/orders
GET    /api/orders/:id
```

### Admin
```
GET    /api/admin/users
GET    /api/admin/users/:id
POST   /api/admin/users/:id/approve
POST   /api/admin/users/:id/reject
POST   /api/admin/users/:id/block
POST   /api/admin/users/:id/unblock
GET    /api/admin/approvals
GET    /api/admin/catalog
POST   /api/admin/catalog/:id/approve
POST   /api/admin/catalog/:id/reject
GET    /api/admin/orders
PUT    /api/admin/orders/:id/status
GET    /api/admin/invoices
POST   /api/admin/invoices
PUT    /api/admin/invoices/:id
POST   /api/admin/invoices/:id/issue
GET    /api/admin/analytics
GET    /api/admin/analytics/export
GET    /api/admin/suspicious-activity
```

### Invoices
```
GET    /api/invoices
GET    /api/invoices/:id
GET    /api/invoices/:id/pdf
```

---

## State Management

### Recommended Approach
- **React Context** for auth state
- **React Query** (TanStack Query) for server state
- **Zustand** or **Redux Toolkit** for complex client state (optional)

### Key State Slices
1. **Auth State**
   - Current user
   - Role
   - Permissions
   - Approval status

2. **Cart State**
   - Items
   - Totals
   - Validation

3. **Notification State**
   - Unread count
   - Recent notifications

4. **UI State**
   - Language
   - Theme
   - Sidebar collapse
   - Modal states

---

## Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup & routing
- [ ] Authentication system
- [ ] User registration & approval flow
- [ ] Basic layouts (Consumer, Supplier, Admin)
- [ ] Multi-language setup

### Phase 2: Core Features (Week 3-5)
- [ ] Product catalog (CRUD)
- [ ] Shopping cart
- [ ] Order creation & management
- [ ] Order status workflow
- [ ] Basic notifications

### Phase 3: Monetization (Week 6-7)
- [ ] Subscription system
- [ ] Commission calculation
- [ ] Invoice generation (PDF)
- [ ] Billing management
- [ ] Payment tracking

### Phase 4: Admin Features (Week 8-9)
- [ ] User management (approve/block)
- [ ] Catalog moderation
- [ ] Invoice management
- [ ] Order override capabilities
- [ ] Suspicious activity detection

### Phase 5: Analytics & Polish (Week 10-11)
- [ ] Dashboard implementations
- [ ] Analytics & reporting
- [ ] Excel/PDF export
- [ ] Notification system (Email/SMS)
- [ ] Responsive design
- [ ] Testing & bug fixes

### Phase 6: MVP Launch (Week 12)
- [ ] Final testing
- [ ] Performance optimization
- [ ] Documentation
- [ ] Deployment

---

## Technical Stack

### Frontend
- **Framework**: React 19
- **Router**: React Router v7
- **UI Library**: Ant Design
- **Styling**: Tailwind CSS
- **State Management**: React Query + Context API
- **Forms**: React Hook Form + Zod
- **i18n**: react-i18next or similar
- **PDF Generation**: jsPDF or react-pdf
- **Excel Export**: xlsx or exceljs
- **Build Tool**: Vite
- **TypeScript**: Yes

### Backend (To be determined)
- API framework
- Database (PostgreSQL recommended)
- Authentication (JWT)
- File storage (for product images)
- Email service (SendGrid, AWS SES)
- SMS service (Twilio, AWS SNS)

### DevOps
- Version control: Git
- CI/CD pipeline
- Environment management
- Monitoring & logging

---

## Key Considerations

### Security
- Role-based access control (RBAC)
- API authentication & authorization
- Input validation & sanitization
- SQL injection prevention
- XSS protection
- CSRF tokens

### Performance
- Image optimization
- Lazy loading
- Pagination
- Caching strategies
- Database indexing

### Scalability
- Modular architecture
- API versioning
- Database optimization
- Caching layer
- CDN for static assets

### User Experience
- Loading states
- Error handling
- Form validation
- Responsive design
- Accessibility (WCAG)

---

## Out of Scope (Post-MVP)
- Online payment integration
- Mobile apps (iOS/Android)
- Tenders/auctions
- ERP integrations
- Advanced BI/predictive analytics
- Real-time chat
- Advanced search (elasticsearch)
- Recommendation engine

---

## Notes
- All financial calculations should use decimal precision
- Price locking is critical - ensure order items store price at creation
- Grace period logic: 7 days from due date before blocking
- Commission calculation: 2% of confirmed order total
- Subscription tiers based on monthly purchase volume
- All timestamps in UTC
- Support for timezone display per user preference

---

**Last Updated**: [Date]  
**Version**: MVP 1.0

