import { checkAuthorization } from "@/app/actions";
import CreatePostForm from "./form";

export default async function CreatePost() {
  await checkAuthorization("/post/create");

  return (
    <>
      <header
        className="intro-header"
        style={{ backgroundImage: "url('/img/post-bg.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="post-heading">
                <h1>
                  Man must explore, and this is exploration at its greatest
                </h1>
                <h2 className="subheading">
                  Problems look mighty small from 150 miles up
                </h2>
                <span className="meta">
                  Posted by <a href="#">Start Bootstrap</a> on August 24, 2014
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <CreatePostForm />
      </div>
    </>
  )
}
