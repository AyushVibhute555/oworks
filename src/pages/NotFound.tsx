import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-ink mb-4">404</h1>
          <p className="text-xl text-ink-light mb-10">
            The page you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
