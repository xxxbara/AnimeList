import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "api/auth/signout" : "api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
      {user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null}
      <Link href={actionUrl} className="hover:bg-color-secondary bg-color-dark transition-all py-1 px-12 inline-block text-color-primary rounded-lg" >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
