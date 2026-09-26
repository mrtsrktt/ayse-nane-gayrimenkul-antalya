import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ekip & CRM Danışman Masası | Ayşe Nane Gayrimenkul',
  description: 'Ayşe Nane Gayrimenkul dahili ekip ve müşteri ilişkileri yönetim (CRM) portalı.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function EkipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
