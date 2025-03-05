import { UserProfile } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <div className="p-4 w-full flex justify-center">
      <UserProfile />
    </div>
  );
}