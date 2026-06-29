# Customization Guide - North Star Limo

Learn how to customize the design, content, and functionality to match your brand.

## 🎨 Design Customization

### Change Primary Color (Gold)

The luxury gold accent color is used throughout. Change it globally:

**File**: `/app/globals.css`

```css
:root {
  /* Light mode - Change this HSL value */
  --primary: 45 93% 47%;          /* Current: Gold */
  /* For example:
     --primary: 220 90% 56%;      /* Blue */
     --primary: 0 84% 60%;        /* Red */
     --primary: 142 72% 29%;      /* Green */
  */
}

.dark {
  /* Dark mode - Brighter version for visibility */
  --primary: 45 93% 54%;          /* Current: Bright Gold */
}
```

### Change Secondary Color (Navy)

The deep navy is used for text and backgrounds:

```css
:root {
  --secondary: 15 23% 14%;        /* Current: Navy */
  /* For example:
     --secondary: 220 13% 91%;    /* Light background */
     --secondary: 0 0% 0%;        /* Pure black */
  */
}
```

### Change Font Family

**File**: `/app/layout.tsx`

```typescript
// Replace Playfair Display with any Google Font
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ 
  variable: '--font-serif',
  subsets: ['latin'],
})
```

**File**: `/app/globals.css`

```css
@theme inline {
  --font-serif: 'Your Font Name', serif;
  --font-sans: 'Inter', sans-serif;
}
```

### Change Button Styles

Edit the component classes in `/app/globals.css`:

```css
.button-luxury {
  @apply px-8 py-3 bg-primary text-primary-foreground font-semibold rounded 
         transition-all duration-300 hover:shadow-lg hover:scale-105 
         active:scale-95;
  /* Customize: padding, border-radius, shadow, animations */
}
```

### Change Border Radius

**File**: `/app/globals.css`

```css
--radius: 0.375rem;  /* 6px - Change for more/less rounded corners */
```

## 📝 Content Customization

### Update Company Information

**File**: `/lib/data.ts`

```typescript
export const companyInfo = {
  name: "Your Company Name",
  tagline: "Your tagline here",
  mission: "Your mission statement...",
  description: "Your company description..."
}

export const contactInfo = {
  phone: "(555) 123-4567",
  email: "your@email.com",
  address: "123 Main St, City, State 12345",
  serviceAreas: ["Area 1", "Area 2", "Area 3"]
}
```

### Update Services

**File**: `/lib/data.ts`

```typescript
export const servicesData = [
  {
    title: "Your Service",
    description: "Your description",
    icon: "🎯"  // Use any emoji or component
  },
  // Add more services
]
```

### Update Fleet/Products

**File**: `/lib/data.ts`

```typescript
export const fleetData = [
  {
    id: 1,
    name: "Your Vehicle Name",
    description: "Your description",
    image: "vehicle"
  },
  // Add more vehicles
]
```

### Update Testimonials

**File**: `/lib/data.ts`

```typescript
export const testimonialsData = [
  {
    id: 1,
    name: "Customer Name",
    text: "Their testimonial...",
    rating: 5
  },
  // Add more testimonials
]
```

### Update FAQs

**File**: `/lib/data.ts`

```typescript
export const faqData = [
  {
    category: "Your Category",
    items: [
      {
        question: "Your question?",
        answer: "Your answer..."
      }
    ]
  }
]
```

## 🔧 Component Customization

### Header Navigation

**File**: `/components/header.tsx` - Edit `navLinks`:

```typescript
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#your-section', label: 'Your Section' },
  // Add your navigation links
]
```

### Hero Section

**File**: `/components/hero.tsx`

- Change headline in the render
- Modify feature list from `featuresData`
- Update emoji/icon

### Services Section

**File**: `/components/services.tsx`

- Automatically pulls from `/lib/data.ts`
- Just update the data file

### Fleet Section

**File**: `/components/fleet.tsx`

- Add features list in "All Vehicles Include" section
- Customize card styling
- Update emoji

### Booking Form

**File**: `/components/booking-form.tsx`

Add or remove fields:
```typescript
const [formData, setFormData] = useState({
  fromAddress: '',
  toAddress: '',
  date: '',
  // Add your custom fields here
})
```

### Footer

**File**: `/components/footer.tsx`

- Update quick links array
- Update services list
- Change social media links

## 🎭 Animation Customization

### Disable Animations

Remove animation classes from components:

```tsx
// Before
<div className="animate-slideUp">

// After
<div>
```

### Speed of Animations

**File**: `/app/globals.css`

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.6s ease-out;  /* Change 0.6s to your duration */
}
```

### Change Animation Direction

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);  /* Larger number = more movement */
  }
}
```

## 📱 Responsive Design

### Breakpoints

The site uses these breakpoints:
- `md:` = 768px
- `lg:` = 1024px

Example of responsive class:
```tsx
<div className="text-2xl md:text-3xl lg:text-4xl">
  Mobile: 2xl | Tablet: 3xl | Desktop: 4xl
</div>
```

### Change Breakpoints

Edit `/tailwind.config.js` if you installed Tailwind v3.

For Tailwind v4 (current), edit breakpoints in `globals.css` using CSS custom properties.

## 🌓 Dark Mode

### Disable Dark Mode

Remove dark mode toggle from header and disable switching:

**File**: `/components/header.tsx`

Remove the `toggleDarkMode` button code.

### Force Light or Dark Mode

**File**: `/app/layout.tsx`

```typescript
// Force light mode
<html lang="en" className="light">

// Force dark mode
<html lang="en" className="dark">
```

### Custom Dark Mode Colors

**File**: `/app/globals.css`

```css
.dark {
  --background: 217 33% 8%;   /* Change these values */
  --foreground: 210 40% 96%;
  --primary: 45 93% 54%;
  /* Edit all dark mode colors */
}
```

## 📧 Form Integration

Currently, the booking form shows a success message but doesn't send data anywhere.

### Connect to Email Service

Install your chosen service:

```bash
# Option 1: Sendgrid
pnpm add @sendgrid/mail

# Option 2: Resend
pnpm add resend

# Option 3: Mailgun
pnpm add mailgun.js
```

Create API route `/app/api/contact/route.ts`:

```typescript
import { sendEmail } from '@/lib/email'

export async function POST(request: Request) {
  const formData = await request.json()
  
  try {
    await sendEmail(formData)
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
```

Update `/components/booking-form.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setSubmitted(true)
      // Reset form, etc.
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}
```

## 🖼️ Add Images

Replace emojis with real images:

**File**: `/public/images/` - Add your images here

Update components:

```tsx
import Image from 'next/image'

// Before
<div className="text-5xl md:text-6xl">🚗</div>

// After
<Image 
  src="/images/car.png" 
  alt="Luxury Car" 
  width={200} 
  height={200}
/>
```

## 🔗 Add New Pages

1. **Create page**:
```tsx
// app/services/page.tsx
export default function ServicesPage() {
  return <div>Services Page</div>
}
```

2. **Add navigation**:
```tsx
// components/header.tsx
const navLinks = [
  // ... existing
  { href: '/services', label: 'Services' }
]
```

## 🎯 SEO Customization

**File**: `/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: 'your, keywords, here',
  creator: 'Your Company',
  // Update Open Graph images
  openGraph: {
    images: [{
      url: 'https://yoursite.com/og-image.jpg',
      width: 1200,
      height: 630
    }]
  }
}
```

## 🚀 Performance Tweaks

### Reduce Animation Complexity

Replace expensive animations with simpler ones:

```tsx
// Heavy animation
<div className="animate-bounce">

// Light animation
<div className="hover:shadow-lg transition-shadow">
```

### Lazy Load Components

For large pages:

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/heavy'), {
  loading: () => <div>Loading...</div>
})
```

### Cache Content

Add `revalidateTag` to enable incremental static regeneration:

```typescript
// app/page.tsx
export const revalidate = 3600 // Revalidate every hour
```

## 🎓 Advanced: Component Props

Make components reusable with props:

```tsx
// Before: Hardcoded
export function ServiceCard() {
  return <div>Airport Services</div>
}

// After: Reusable
interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return <div>{title}</div>
}
```

---

**Need help? Check the main README.md or reach out on GitHub!**
