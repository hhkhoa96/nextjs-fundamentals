import { checkAuthorization } from "@/app/actions";

export default async function CreatePost(props: any) {
  await checkAuthorization("/post/create");

  return (
    <article>
      <div className="container">Create Post 2</div>
    </article>
  )
}
