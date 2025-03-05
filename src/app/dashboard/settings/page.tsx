import { UserProfile } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}