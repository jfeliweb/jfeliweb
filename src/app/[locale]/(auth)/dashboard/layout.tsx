import { SignOutButton } from '@clerk/nextjs';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div>
      <h1>Dashboard Layout</h1>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/settings">Settings</Link>
      <Link href="/dashboard/profile">Profile</Link>
      <Link href="/dashboard/logout">Logout</Link>
      <SignOutButton />
      <LocaleSwitcher />
    </div>
  );
}
