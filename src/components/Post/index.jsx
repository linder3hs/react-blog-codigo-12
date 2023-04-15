import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <>
      <Link to={`/detail/${post.id}`}>
        <section className="mt-10">
          <div className="flex lg:items-center">
            <img
              width="30"
              className="rounded-full"
              src={post.user_avatar}
              alt={post.user_name}
            />
            <span className="font-light">
              &nbsp;&nbsp;{post.user_name} {post.user_lastname} .{" "}
              {new Date(post.createdAt).toDateString()} ⭐️ Member only
            </span>
          </div>
          <div className="mt-5 flex flex-col lg:flex-row gap-5 items-center justify-between">
            <div className="w-full lg:w-4/5">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p className="w-3/4 mt-3">{post.resume}</p>
            </div>
            <div>
              <img width={200} src={post.cover} alt={post.title} />
            </div>
          </div>
        </section>
      </Link>
      <hr className="mt-5" />
    </>
  );
}
