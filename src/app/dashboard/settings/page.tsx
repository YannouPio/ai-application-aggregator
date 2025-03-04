import { UserProfile } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function SettingsPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <div>请先登录</div>;
  }
  
  return (
    <div>
      <UserProfile />
    </div>
  );
}