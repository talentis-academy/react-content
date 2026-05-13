import { z } from 'zod';

const today = new Date();
const minBirthDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

export const signupSchema = z.object({
  username: z.string().min(3, "Minimum 3 caractères").max(20, "Maximum 20 caractères").regex(/^[a-zA-Z0-9_-]+$/, "Lettres, chiffres, _ et - uniquement"),
  email: z.string().email("Format d'email invalide"),
  password: z.string().min(8, "Minimum 8 caractères").regex(/[A-Z]/, "Au moins une majuscule").regex(/[0-9]/, "Au moins un chiffre").regex(/[^A-Za-z0-9]/, "Au moins un caractère spécial"),
  confirmPassword: z.string(),
  birthDate: z.string().min(1, "La date de naissance est requise").refine(val => new Date(val) <= minBirthDate, "Vous devez avoir au moins 18 ans"),
  website: z.string().optional().transform(v => v === '' ? undefined : v).refine(v => v === undefined || /^https?:\/\/.+/.test(v), "L'URL doit commencer par http:// ou https://"),
}).refine(d => d.password === d.confirmPassword, { message: "Les mots de passe ne correspondent pas", path: ['confirmPassword'] });
