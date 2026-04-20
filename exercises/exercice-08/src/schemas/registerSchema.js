import { z } from 'zod';

export const registerSchema = z.object({
  fullName: z.string().min(3, 'Le nom doit contenir au moins 3 caractères').max(50).regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Lettres uniquement'),
  email: z.string().email('Adresse email invalide'),
  experience: z.number({ invalid_type_error: 'Veuillez entrer un nombre' }).int().min(0).max(10, "Maximum 10 ans"),
  terms: z.boolean().refine(val => val === true, { message: "Vous devez accepter les conditions d'utilisation" }),
});
