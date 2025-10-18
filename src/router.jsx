import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/services',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
    ),
  },
  {
    path: '/portfolio',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: '/blog',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Blog />
      </Suspense>
    ),
  },
  {
    path: '/blog/:slug',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <BlogPost />
      </Suspense>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
