export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div style={{ padding: "100px" }}>
      <h1>Blog Slug: {params.slug}</h1>
    </div>
  );
}
