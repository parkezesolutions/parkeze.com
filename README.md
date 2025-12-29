# Parkeze Landing

A full-stack TypeScript application for Parkeze's landing page and inquiry management system. Built with React, Express, Vite, and PostgreSQL.

## Features

- **Modern UI** - Built with React and shadcn/ui components
- **Form Management** - Inquiry forms with validation using React Hook Form
- **Database** - PostgreSQL with Drizzle ORM
- **Email Notifications** - Resend API integration for contact emails
- **Development** - Hot module reload with Vite
- **TypeScript** - Type-safe development across client and server

## Tech Stack

### Frontend
- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Query (TanStack Query)
- React Hook Form

### Backend
- Node.js/Express
- PostgreSQL
- Drizzle ORM
- Resend (Email API)

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components & pages
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities
│   │   └── pages/         # Page components
│   └── index.html
├── server/                # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── db.ts              # Database config
│   ├── email.ts           # Email service
│   └── storage.ts         # File storage
├── shared/                # Shared code
│   ├── routes.ts          # Route definitions
│   └── schema.ts          # Data schemas
├── script/                # Build scripts
└── attached_assets/       # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Parkeze-Landing
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env file with:
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_contact_email
EMAIL_FROM=your_sender_email
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

4. Initialize the database
```bash
npm run db:push
```

## Development

### Running the Development Server

**Full stack (client + server):**
```bash
npm run dev:all
```

**Client only (Vite dev server):**
```bash
npm run dev:client
```

**Server only:**
```bash
npm run dev:server
```

### Type Checking
```bash
npm run check
```

### Building for Production
```bash
npm run build
```

### Running Production Build
```bash
npm start
```

## Available Scripts

- `npm run dev:client` - Start Vite dev server for frontend
- `npm run dev:server` - Start Express server in development mode
- `npm run dev:all` - Run both client and server concurrently
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes with Drizzle

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key for Resend email service |
| `CONTACT_TO_EMAIL` | Email address to receive inquiries |
| `EMAIL_FROM` | Sender email address |
| `DATABASE_URL` | PostgreSQL connection string |

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT

## Contact

For inquiries, contact us at contact@parkeze.com
