# AC Global Manpower

## 1. Project Description
A trustworthy informational website for a domestic helper agency that has served households for over 30 years (since 1994). Families looking for reliable live-in domestic helpers can browse helper profiles, read genuine reviews, learn how the matching process works, explore success stories for both new (first-time) and transfer helpers, and easily request a free consultation.

- Target users: Households/families in need of reliable domestic helpers.
- Core value: Credibility (30+ years, EA Lic No. 20C0288 / UEN 53420682D), transparent helper profiles, honest reviews, a proven matching process, and an effortless way to reach out.

## 2. Page Structure
- `/` - Home (landing page: hero, credibility, services, matching process, featured helper profiles, success stories, reviews, consultation form, footer)

All primary navigation uses in-page anchors on the landing page for now:
- `#helpers`, `#process`, `#stories`, `#reviews`, `#contact`

Future phases may add dedicated pages:
- `/helpers` - Full helper directory
- `/reviews` - All reviews
- `/contact` - Consultation page

## 3. Core Features
- [x] Credibility section (30+ years, placements, satisfaction)
- [x] Domestic helper matching process (step by step)
- [x] Featured helper profiles with skills, experience, availability
- [x] Success stories for new workers and transfer workers
- [x] Reviews / testimonials from families
- [x] Consultation request form (contact)
- [ ] Full helper directory page
- [ ] Dedicated reviews page

## 4. Data Model Design
No database connected at this time — the site uses realistic demo content stored in `src/mocks/`.
If/when persistent data is needed, planned tables:
- `helpers` (id, name, age, nationality, photo, skills, experience_years, helper_type, availability, rating, bio)
- `reviews` (id, family_name, rating, comment, created_at)
- `consultations` (id, name, email, phone, preferred_nationality, service_type, helper_type, timeline, message, created_at)

## 5. Backend / Third-party Integration Plan
- Database: Not now — realistic demo data in `src/mocks/`.
- Contact / consultation: Built-in Form (reuses the platform form endpoint).
- Shopify: Not needed.
- Stripe / payments: Not needed.
- Others: None.

## 6. Development Phase Plan

### Phase 1: Homepage (current)
- Goal: Deliver a complete, credible, visually rich landing page for the agency.
- Deliverable: Full homepage with hero, trust signals, services, matching process, featured helpers, success stories, reviews, and a working consultation form.

### Phase 2: Helper Directory Page
- Goal: Dedicated browsable list of all helpers with filters (type, availability, experience).
- Deliverable: `/helpers` page linked from the homepage.

### Phase 3: Reviews Page
- Goal: Full reviews listing with rating summary.
- Deliverable: `/reviews` page linked from the homepage.

### Phase 4: Dedicated Contact Page (optional)
- Goal: Standalone consultation/inquiry experience.
- Deliverable: `/contact` page.