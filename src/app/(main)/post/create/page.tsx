import { checkAuthorization } from "@/app/actions";

export default async function CreatePost(props: any) {
  await checkAuthorization("/post/create");

  return <div>Create Post</div>;
}
