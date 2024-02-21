import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="text-color-primary text-2xl">
      <h3>DASHBOARD</h3>
      <h5>Welcome, {user.name}</h5>
      <div>
        <Image
          src={user.image}
          alt="profile picture"
          width={250}
          height={250}
          className="width-250px height-250px"
        />
      </div>
    </div>
  );
};

export default Page;
