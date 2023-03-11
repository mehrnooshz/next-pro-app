interface singleBlogProps {
  params: { id: String };
}

const SingleBlog = ({ params }: singleBlogProps) => {
  return <div className="blog">blog single {params.id}</div>;
};

export default SingleBlog;
