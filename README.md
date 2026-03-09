# Skilline App

A full-stack online learning platform built with **Next.js 16**, **TypeScript**, **Prisma**, **NextAuth**, and **Tailwind CSS**.

This project includes:

- Landing page inspired by the Skilline Figma design
- Authentication (register/login)
- Role-based portals:
  - Student portal
  - Instructor portal
  - Admin portal
- Course management and enrollments
- Admin user role management

---

## Tech Stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- Prisma ORM
- NextAuth (Credentials provider)
- PostgreSQL
- Tailwind CSS

---

## Features

### Public Pages
- Home (`/`)
- About (`/about`)
- Blog (`/blog`)
- Careers (`/careers`)
- Register (`/register`)
- Login (`/login`)

### Role Portals
- Student (`/student`, `/student/courses`)
- Instructor (`/instructor`, `/instructor/create-course`)
- Admin (`/admin`, `/admin/users`)

### Authentication & Authorization
- Credentials-based auth with NextAuth
- Role selection at login/register (student/instructor/admin)
- Role-protected routes via `proxy.ts`
- Correct redirect after auth via `/dashboard`

### API Routes
- Auth:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET/POST /api/auth/[...nextauth]`
- Courses:
  - `GET /api/courses`
  - `POST /api/courses/create`
- Enrollment:
  - `POST /api/enroll`
- Admin:
  - `GET /api/admin/users`
  - `POST /api/admin/promote`
  - `POST /api/admin/delete-course`

---

## Project Structure

```txt
app/
  page.tsx
  login/page.tsx
  register/page.tsx
  about/page.tsx
  blog/page.tsx
  careers/page.tsx
  student/
  instructor/
  admin/
  api/
components/
lib/
  auth.ts
  prisma.ts
prisma/
  schema.prisma
  migrations/
proxy.ts
vercel.json

---

## Environment Setup

Create a `.env` file with:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/skilline?schema=public"
NEXTAUTH_SECRET="replace-with-a-strong-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Run database setup:

```bash
npx prisma generate
npx prisma migrate deploy
```

For Vercel, set the same env vars in Project Settings, then redeploy.
