import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const UserActionButton = async () => {
  const user = await getServerSession(authOptions);
  console.log(user);

  return (
    <div>
      {" "}
      <Link href="/api/auth/signin" className="">
        Sign In
      </Link>
    </div>
  );
};

export default UserActionButton;
