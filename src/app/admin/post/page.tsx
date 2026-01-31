// import { findAllPostAdmin } from "@/lib/post/queries/admin";
// import { Metadata } from "next";

import PostsListAdmin from "@/components/PostListAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

// export const dynamic = "force-dynamic";

// export const metadata: Metadata = {
//   title: "Admin Post Page",
// };

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostsListAdmin />
    </Suspense>
  );
}
