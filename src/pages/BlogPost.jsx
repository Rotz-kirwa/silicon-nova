import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
};

export default BlogPost;
