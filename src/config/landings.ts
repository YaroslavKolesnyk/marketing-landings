// src/config/landings.ts
export interface LandingConfig {
  name: string;
  title: string;
  description: string;
}

export const LANDING_CONFIGS: LandingConfig[] = [
  {
    name: 'landing1',
    title: 'Лендінг 1 — Швидкий старт',
    description: 'Миттєве завантаження та конверсія',
  },
  {
    name: 'landing2',
    title: 'Лендінг 2 — Ексклюзив',
    description: 'Знижка 50% тільки сьогодні',
  },
  // Додати ще 100+
];