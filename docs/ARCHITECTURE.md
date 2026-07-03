# Cookiya – Architecture

## Tech Stack

- React Native
- Expo SDK 54
- TypeScript
- React Navigation
- Zustand
- Lucide React Native

---

# Project Structure

src/

├── components/
├── screens/
├── navigation/
├── theme/
├── hooks/
├── store/
├── utils/
└── types/

---

# Folder Responsibilities

## components/

Reusable UI components only.

Examples:

- Buttons
- Cards
- Search Bar
- Chips
- Empty States

No business logic.

---

## screens/

Application screens.

Examples:

- Home
- Kitchen
- Shopping
- Saved
- Recipe Detail

Screens compose components.

---

## navigation/

Application navigation.

Keep navigation isolated.

---

## theme/

Single source of truth for:

- Colors
- Typography
- Spacing
- Border Radius
- Shadows
- Icons

Never hardcode design values.

---

## store/

Application state using Zustand.

---

## hooks/

Reusable custom hooks.

---

## utils/

Pure helper functions.

---

# Development Principles

- Prototype is read-only.
- Reuse components.
- Separate UI from business logic.
- Keep screens lightweight.
- Prefer composition over duplication.

---

# Git Workflow

Every completed sprint:

git add .
git commit -m "Sprint X: Description"
git push

---

# Current Development Phase

Milestone 1

Foundation

Completed

Next Milestone

Core Screens