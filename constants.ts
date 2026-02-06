import { BarChart3, Target, Zap, Users, PieChart, Layers } from 'lucide-react';

export const CALENDLY_LINK = "https://calendly.com/azzione-contact/cafe-virtuel";

export const NAV_LINKS = [
  { name: 'Newsletter', href: 'https://substack.com/@cherubads' },
];

export const BRANDS = [
  "Rasage Classique",
  "Optic corps",
  "DogParty",
  "Lily&Joy",
  "Illico travaux",
  "Eunomia Audit",
  "Scent-Exploration"
];

export const SERVICES = [
  {
    title: "Meta Ads Performance",
    description: "Des campagnes Facebook & Instagram structurées pour la conversion. Scaling horizontal et vertical maîtrisé.",
    icon: Layers,
  },
  {
    title: "UGC",
    description: "Votre contenu publicitaire clé en main : Accédez à plus de 70 créateurs UGC talentueux.",
    icon: Zap,
  },
  {
    title: "Creative Strategy",
    description: "Le design au service du ROI. Nous produisons des variations créatives basées sur la data, pas l'intuition.",
    icon: Target,
  },
  {
    title: "Tracking & Analytics",
    description: "Tracking Server-Side / API : Contournez les Adblockers et récupérez 100% de vos données.",
    icon: BarChart3,
  }
];

export const STATS = [
  { value: "+15M€", label: "Gérés en budget publicitaire" },
  { value: "4.5", label: "ROAS Moyen" },
  { value: "+300%", label: "Croissance moyenne clients" },
];