"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { appWithTranslation } from 'next-i18next';

function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /signup/signup as soon as the component mounts
    router.push("/signup");
  }, [router]);

  return (
    <>
      {/* Content on the Home page (if any) */}
    </>
  );
}

export default appWithTranslation(Home);
