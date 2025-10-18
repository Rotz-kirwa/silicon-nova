import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Top Web Design Trends for 2025',
      excerpt: 'Discover the latest trends shaping the future of web design and how to implement them in your projects.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      date: '2024-10-15',
      author: 'Silicon Nova Team',
      category: 'Design',
    },
    {
      id: '2',
      title: 'Why Your Business Needs a Website in 2025',
      excerpt: 'Learn why having a professional website is crucial for business success in today\'s digital landscape.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      date: '2024-10-10',
      author: 'Silicon Nova Team',
      category: 'Business',
    },
    {
      id: '3',
      title: 'Understanding SEO: A Beginner\'s Guide',
      excerpt: 'A comprehensive guide to search engine optimization and how it can help your website rank higher.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
      date: '2024-10-05',
      author: 'Silicon Nova Team',
      category: 'SEO',
    },
  ];

  return (
    <Layout>
      <div className="blog-page">
        <div className="blog-hero">
          <h1>Our Blog</h1>
          <p>Insights, tutorials, and updates from the Silicon Nova team</p>
        </div>

        <div className="blog-content">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card hoverable className="blog-card">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <div className="blog-card-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="blog-author">By {post.author}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
