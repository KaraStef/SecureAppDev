import { getSession } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium users can see the content!</h1>
        <Link href="/profile">
          <h1>Go to the profile page to upgrade to premium</h1>
        </Link>
      </div>
    );
  }

  return (
    <div className="premium">
      <h1>Welcome to the Premium Page</h1>
      <ul>
        You have access to premium content! Congratulations! 
      </ul>
    </div>
  );
};

export default PremiumPage;
