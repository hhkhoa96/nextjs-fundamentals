import { authorization } from "@/app/actions";

export default async function CreatePost(props: any) {
  await authorization("/post/create");

  return <div>Create Post</div>;
}
