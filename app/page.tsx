import Link from "next/link";
import ProductCard from "./components/product-card/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/utils";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Welcome {session?.user!.name}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
