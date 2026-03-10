# Rachit Kanaujia - Developer Portfolio

A modern, responsive developer portfolio website built with Next.js, TypeScript, and SCSS.

## 🚀 Features

- **Clean Modern UI** - Sleek design with smooth animations
- **Dark/Light Mode** - Toggle between themes with persistent storage
- **Responsive Design** - Optimized for all device sizes
- **Smooth Scroll Navigation** - Seamless section transitions
- **Animated Project Cards** - Interactive hover effects
- **Skills Section** - Technology stack with icons
- **GitHub & LinkedIn Integration** - Direct links to profiles
- **Contact Form** - Functional contact information display

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** SCSS with CSS Variables
- **Icons:** Font Awesome
- **Fonts:** DM Sans

## 📋 Sections

1. **Home** - Hero section with introduction
2. **About** - Professional background and experience
3. **Skills** - Technology expertise with visual icons
4. **Projects** - Featured work with tech stacks
5. **Contact** - Contact information and social links

## 🏃‍♂️ Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
Modify CSS variables in `app/globals.scss`:
```scss
:root {
    --primary-color: #edf2f8;
    --secondary-color: #313bac;
    --black-color: #030303;
    --white-color: #ffffff;
}
```

### Content
Update personal information in `app/page.tsx`:
- Hero section details
- About text
- Projects information
- Skills list
- Contact details

## 🚀 Deployment

Deploy to Vercel, Netlify, or any static hosting platform:

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
