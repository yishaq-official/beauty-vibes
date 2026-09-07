import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Luxury Services | BeautyVibes Addis Ababa",
  description:
    "Personalized at-home luxury bridal makeup, traditional Habesha glam, hair styling, and aesthetics delivered right to your door in Addis Ababa, Ethiopia.",
  keywords: [
    "Bridal Makeup Addis Ababa",
    "At-home Makeup Artist Ethiopia",
    "Habesha Melse Makeup",
    "Bridal Hair Styling",
    "Beauty Salon Bole Addis Ababa",
  ],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
