# TRIA - Team Portfolio Website

A team portfolio website built as a school project for **ITEC 101 - Human Computer Interaction II**. Showcases our team's skills, projects, and services.

## Features

- **Responsive design** with Tailwind CSS utility classes
- **Header navigation** with active section tracking via URL params
- **Portfolio showcase** with project filtering (All, UI/UX, Web App, Branding)
- **Services section** displaying our team's offerings
- **Contact form** powered by EmailJS with name, email, subject, and message fields
- **Footer** with contact details (address, phone, email) and social links

## Sections

| Section    | Description                               |
| ---------- | ----------------------------------------- |
| Home       | Hero section with team intro              |
| Works      | Featured work samples                     |
| About      | Team member profiles                      |
| Services   | Service offerings                         |
| Contact    | EmailJS-powered contact form              |

## Tech Stack

| Technology       | Purpose               |
| ---------------- | --------------------- |
| React 19         | UI framework          |
| TypeScript       | Type safety           |
| Vite             | Build tool & dev server |
| Tailwind CSS v4  | Styling               |
| shadcn/ui        | UI component library  |
| EmailJS          | Contact form delivery |
| Lucide React     | Icons                 |
| Motion           | Animations            |

## Project Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui components (button, input, etc.)
│   └── header.tsx     # Sticky navigation header
├── containers/
│   ├── home.tsx       # Hero section
│   ├── portfolio.tsx  # Project gallery with filtering
│   ├── works.tsx      # Featured works
│   ├── about.tsx      # Team member profiles
│   ├── services.tsx   # Service offerings
│   ├── contact.tsx    # Contact form (EmailJS)
│   └── footer.tsx     # Site footer
├── lib/
│   └── utils.ts       # Tailwind class merging utility
├── utils/
│   └── helper.ts      # Navigation menu data
├── App.tsx            # Root layout
└── main.tsx           # Entry point
```

## Team Members

- **Patricia Ann** - Developer
- **Mark Anthony** - Developer
- **Christian Paul** - Developer

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is written to the `dist/` directory.

## Environment Variables

To use the contact form, create a `.env` file with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update `src/containers/contact.tsx` to reference `import.meta.env.VITE_EMAILJS_*` variables instead of the placeholder strings.
