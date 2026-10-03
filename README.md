# Chavanss Cosmetic Clinic – Rajahmundry
> **India's #1 Hair Transplant & Permanent Makeup Clinic**  
> Flagship Branch: Flat no. 505, Mounica Plaza, Opp. Madhuram Sweets, Danavaipeta, Rajahmundry, Andhra Pradesh.

A premium, animated, responsive multi-section web application built with **React 19, Vite, Tailwind CSS, Framer Motion, and GSAP**, reflecting the luxurious, trustworthy, and feminine-yet-unisex cosmetic medical identity of Chavanss Cosmetic Clinic.

---

## 🌟 Key Features

1. **Brand Aesthetics & Palette**:
   - **Soft Blush Pink** (`#F8E1E4`), **Champagne / Warm Gold** (`#D4A373`), **Rose-Gold** (`#B76E79`), **Ivory** (`#FFFBF7`), and high-contrast **Deep Plum** (`#3B1F2B`).
   - Typography: **Playfair Display** (luxury headings) paired with **Poppins** & **Inter** (clean medical body copy).
   - Glassmorphism cards with subtle border glows, rounded corners, and soft micro-animations.

2. **Animations & Interactivity**:
   - **Preloader**: Elegant logo shimmer animation on initial page load (1s duration).
   - **Hero Carousel**: Cross-fading slides with gentle Ken Burns zoom (`scale`), headline word-by-word reveal, and floating sparkle particles.
   - **Sticky Glass Navbar**: Blurs on scroll with treatment dropdowns and a glowing magnetic *Book Appointment* CTA.
   - **Transformations (Before/After)**: Interactive draggable slider handle allowing visitors to smoothly compare Before vs. After results (Eyebrow Microblading, Skin Whitening, Lip Blush) with "NEW" tags.
   - **Doctors & Accreditations**: Profiles for Dr. B. Ramachandra Rao, Dr. Swetha Chavan (FMC, Germany), and Dr. CVNR Prasad, with an interactive **Certificates Lightbox Modal**.
   - **At Your Service Stats**: Animated SVG progress rings (100% Permanent Makeup, 100% Hair Transplantation) and live counters (20,000+ Restorations, 21+ Staff, 6+ Doctors, 5,086+ Visits).
   - **Hair Care Grid**: 12 comprehensive treatment cards with 3D hover tilt, shimmer sweep, and real website copy (Biotech FUE, Instant FUE, DPI, Thicker Grafts, Female Restoration, Eyebrow Transplant, Laser Therapy, etc. with BEST / NEW badges).
   - **Permanent Makeup Grid**: 5 specialized cards covering Microblading, Lip Blush, Lip Color, Neutralization, and BB Glow.
   - **Convenient Hours**: Clear breakdown of Morning (9:00 AM – 1:00 PM) and Afternoon/Evening (2:00 PM – 8:00 PM) sessions for Rajahmundry.
   - **WhatsApp Integration**: Instant consultation routing to `+91 91774 25999` with prefilled patient information, accompanied by celebratory confetti.
   - **Rajahmundry Center of Excellence**: Dedicated flagship section with interactive Google Maps embed, "Get Directions" link, and direct phone assistance (+91 83096 57861 / +91 70322 99223).
   - **Multi-Branch Directory**: Rajahmundry branch highlighted first, with directory cards for Hyderabad (Srinagar Colony, Banjara Hills), Vijayawada (Panta Kavala Road), and Visakhapatnam.

3. **SEO & Structured Data**:
   - Comprehensive OpenGraph and Twitter card metadata.
   - Embedded `MedicalClinic` and `LocalBusiness` JSON-LD schema with address, operating hours, coordinates, and social profiles.

---

## 📂 Project Architecture

```
Chavans cleanic/
├── index.html                           # SEO meta tags, Google Fonts, JSON-LD Schema
├── package.json                         # Dependencies & build scripts
├── postcss.config.js                    # Tailwind & Autoprefixer config
├── tailwind.config.js                   # Custom luxury tokens, fonts, & animations
├── vite.config.js                       # Vite bundler configuration
├── public/
│   └── images/                          # Downloaded clinic images & certificates
│       ├── logo.png                     # Official Chavanss Clinic logo
│       ├── dr-swetha.jpg                # Founder Dr. Swetha Chavan
│       ├── dr-ramachandra-rao.png       # Dr. B. Ramachandra Rao
│       ├── dr-cvnr-prasad.jpg           # Dr. CVNR Prasad
│       ├── before.jpg                   # Clinical before photo
│       ├── microblading.avif            # Microblading after result
│       ├── skin-whitening.png           # Skin whitening after result
│       ├── lip-blush.png                # Lip blush after result
│       ├── certificate-1.jpg            # German fellowship certificate
│       └── *.png                        # Hair treatment icons (Biotech FUE, DPI, etc.)
└── src/
    ├── main.jsx                         # Application entrypoint
    ├── App.jsx                          # Main application layout & modal controller
    ├── index.css                        # Glassmorphism utilities, CSS variables
    ├── data/
    │   └── clinic.js                    # ⭐ Central Single Source of Truth for all text,
    │                                    #    phone numbers, timings, doctors, and services
    └── components/
        ├── common/
        │   ├── Preloader.jsx            # Shimmer logo preloader
        │   ├── AnnouncementBar.jsx      # Top announcement & WhatsApp line
        │   ├── Navbar.jsx               # Sticky glassmorphic navbar with dropdowns
        │   ├── FloatingWhatsApp.jsx     # Floating pulse WhatsApp button
        │   └── LightboxModal.jsx        # Certificate & facility image lightbox
        ├── home/
        │   ├── HeroSection.jsx          # Ken Burns zoom, word reveal, CTAs
        │   ├── IntroPMUSection.jsx      # "Effortless beauty, every day"
        │   ├── FounderSection.jsx       # Dr. Swetha Chavan spotlight
        │   ├── TransformationsSection.jsx # Draggable Before/After comparison
        │   ├── DoctorsSection.jsx       # Doctor profiles + Certificates button
        │   ├── StatsSection.jsx         # 100% rings & animated counter stats
        │   ├── HairCareGrid.jsx         # 12 Hair Care service cards (BEST / NEW)
        │   ├── PermanentMakeupGrid.jsx  # 5 Permanent Makeup cards
        │   ├── TimingsSection.jsx       # Rajahmundry clinic operating hours
        │   ├── CTABanner.jsx            # Complimentary Hair Analysis Test banner
        │   ├── AppointmentSection.jsx   # WhatsApp booking form + confetti
        │   └── RajahmundryBranch.jsx    # Flagship clinic showcase & Google Maps
        └── layout/
            └── Footer.jsx               # Multi-branch directory, socials & links
```

---

## 🛠️ How to Update Content

All content, clinic timings, phone numbers, doctor qualifications, and services are centralized in **[`src/data/clinic.js`](file:///c:/Users/PHANINDRA/Downloads/Chavans%20cleanic/src/data/clinic.js)**:
- **Phone Numbers**: Edit `contacts.phoneRajahmundry1`, `contacts.whatsapp`, etc.
- **Timings**: Edit `rajahmundryBranch.timings.morning` and `afternoon`.
- **Services**: Edit `hairCareServices` or `permanentMakeupServices` arrays.
- **Doctors**: Edit the `doctors` array to modify bios or qualifications.

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, compressed production bundle in `/dist`.

### 4. Deploy to Vercel or Netlify
This project is configured as a standard modern Vite React app:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
