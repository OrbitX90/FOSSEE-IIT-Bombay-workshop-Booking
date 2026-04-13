# FOSSEE Workshop Booking - UI Redesign

Hey! This repo holds the new mobile-first frontend I built for the FOSSEE Workshop Booking Platform. My main goal was upgrading the site from a basic coordinator portal into a modern platform that works well for both students and teaching staff.

---

## Setup Instructions

Follow these steps to run the new FOSSEE Workshop portal locally on your machine.

### 1. Start the Django Backend
Make sure you have Python installed, then run the Original Django Server:
```bash
# Install required python packages
pip install -r requirements.txt

# Start the server (runs on localhost:8000)
python3 manage.py runserver
```

### 2. Start the React Frontend
Open a **new** terminal window and run the new React/Tailwind application:
```bash
# Navigate into the new frontend directory
cd frontend

# Install Node dependencies
npm install

# Start the Vite development server (runs on localhost:5173)
npm run dev
```

---

## Screenshots (Before & After)

### Before Redesign (Legacy UI)
<p align="center">
  <img src="./before_1.png" width="400" />
  <img src="./before_2.png" width="400" />
</p>

### After Redesign (Modernized UI)
<p align="center">
  <img src="./after_1.png" width="400" />
  <img src="./after_2.png" width="400" />
  <img src="./after_3.png" width="400" />
  <img src="./after_4.png" width="400" />
</p>

---

## How I Approached the Redesign

### 1. What design principles guided your improvements?
When I started picking the colors and fonts, I really focused on keeping it official but making it look a lot more modern. Since it's an IIT Bombay/FOSSEE project, I stuck to a deep navy blue background to give it that institutional feel, but I swapped out the basic fonts for `Outfit` and `Inter` to make the text pop. 

I also wanted to make sure users know exactly where to click. I kept the bright gold/amber colors strictly for the "Book Workshop" buttons so they stand out immediately. Plus, to fix the issue of the site feeling a bit flat, I added some subtle glassmorphism effects and small animations so the cards actually lift up when you mouse over them. 

### 2. How did you ensure responsiveness across devices?
I used **Tailwind CSS** for basically all the styling, so fixing the mobile view was pretty straightforward. Instead of dealing with messy CSS media queries, I just used Tailwind's grid system (`sm:`, `md:`, etc.). Now the workshop list drops from a 3-column grid on desktop down to a single scrollable column on cell phones.

I also fixed the navigation. On a phone, the top links collapse into a standard hamburger menu so it's actually tappable. I also made sure to use `rem` units everywhere instead of fixed pixels, which means if someone has their phone's font size turned way up for accessibility, the UI scales with it naturally.

### 3. What trade-offs did you make between the design and performance?
The biggest trade-off was deciding to use the frosted glass (`backdrop-blur`) effect. It looks amazing over the dark gradient background, but those CSS filters can sometimes be a little heavy on older phone GPUs. To offset that performance hit, I decided to build the background using plain CSS rules (`radial-gradient`) instead of injecting heavy high-res image files.

Another thing was choosing React Router. I wanted the site to feel instantly responsive when clicking around. The downside is that you have a slightly larger initial JavaScript load time. To fix that, I added `React.lazy()` so the browser only loads the exact code chunks it needs for the page you're looking at.

### 4. What was the most challenging part of the task and how did you approach it?
To be honest, the hardest part was just trying to modernize an educational site without ruining the official branding. A lot of academic portals look really cluttered, but I couldn't just throw crazy neon designs at an official government-backed project. 

I approached it by trying to mix a clean "startup" aesthetic with the official FOSSEE color guidelines. I used a giant CSS radial spotlight in the background and floated the stats in transparent cards on top to give it some depth. Rewriting the entire old layout with Tailwind was also a huge pain at first, because I had to carefully rebuild things like the `<Button>` and `<StatusBadge>` components from scratch so they wouldn't break the layout when the real backend gets plugged back in.

### 5. How did you handle SEO using React?
Since React is a Single Page Application (SPA), the standard HTML file doesn't update its title or meta descriptions when you click around. To fix the SEO requirement, I wrote my own custom React hook called `useSEO`. 

Basically, whenever you navigate to a new route, the hook triggers a `useEffect` that dynamically rewrites the `document.title` and injects exact `<meta name="description">` tags into the DOM's head. That way, if Google's bots scrape the site, they index every single page properly with the correct preview text!
