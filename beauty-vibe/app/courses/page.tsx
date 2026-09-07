import type { Metadata } from 'next';
import CoursesClient from './CoursesClient';

export const metadata: Metadata = {
  title: "Training Academy | BeautyVibes Addis Ababa",
  description:
    "Certified professional makeup & hair styling diploma academy in Addis Ababa, Ethiopia. Comprehensive practical training, pro kits included, and accredited certification.",
  keywords: [
    "Makeup Academy Addis Ababa",
    "Beauty School Ethiopia",
    "Certified Makeup Course",
    "Hairstyling Certification",
    "Bridal Makeup Training",
  ],
};

export default function CoursesPage() {
  return <CoursesClient />;
}
