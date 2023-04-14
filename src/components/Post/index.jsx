export default function Post({ post }) {
  return (
    <>
      <section className="mt-10">
        <div className="flex items-center">
          <img
            width="30"
            className="rounded-full"
            src="https://www.linderhassinger.info/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20673011%3Fv%3D4&w=640&q=75"
            alt="Linder Hassinger"
          />
          <span className="font-light">
            &nbsp;&nbsp;Linder Hassinger . Mar 14 ⭐️ Member only
          </span>
        </div>
        <div className="mt-5 flex gap-5">
          <div>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="w-3/4 mt-3">{post.resume}</p>
          </div>
          <div>
            <img width={200} src={post.cover} alt={post.title} />
          </div>
        </div>
      </section>
      <hr className="mt-5" />
    </>
  );
}
