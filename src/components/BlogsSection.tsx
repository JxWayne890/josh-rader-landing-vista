
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Book, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase, getFilteredBlogs } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  created_at: string;
}

const BlogsSection = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      // Use the getFilteredBlogs helper function instead of direct query
      const filteredData = await getFilteredBlogs();
      
      // Apply additional filtering here as a safety measure
      const safeBlogs = filteredData.filter(blog => 
        !blog.title.includes("Abilene") && 
        !blog.excerpt.includes("Trump") && 
        !blog.excerpt.includes("Abilene Market")
      ).filter(blog => blog.published === true) // Only show published posts
      .slice(0, 3); // Limit to 3 posts
      
      setBlogs(safeBlogs);
      console.log("Filtered homepage blogs:", safeBlogs);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blogs" className="section bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="border-luxury-gold text-luxury-gold px-4 py-1 text-sm mb-4">
            INSIGHTS
          </Badge>
          <h2 className="section-title mb-4">Latest from the Blog</h2>
          <p className="text-luxury-gray max-w-2xl mx-auto">
            Stay informed with the latest insights, trends, and opportunities in commercial real estate market.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-pulse">Loading latest articles...</div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p>No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog) => {
              // Double-check filtering at the rendering level too
              if (blog.title.includes("Abilene") || 
                  blog.excerpt.includes("Trump") || 
                  blog.excerpt.includes("Abilene Market")) {
                return null; // Skip rendering this blog card
              }
              
              return (
                <div key={blog.id} className="luxury-card overflow-hidden group hover-lift transition-all duration-300 border-luxury-khaki/20 hover:border-luxury-gold/40">
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={blog.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-luxury-gold hover:bg-luxury-khaki text-luxury-black font-medium">
                        {blog.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="flex items-center text-sm text-luxury-slate gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-luxury-gold" />
                        <span>{new Date(blog.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-luxury-gold" />
                        <span>{Math.ceil((blog.content || "").length / 1000)} min read</span>
                      </div>
                    </div>
                    <div className="text-luxury-gray mb-4 line-clamp-2 min-h-[48px]"
                         dangerouslySetInnerHTML={{ __html: blog.excerpt }}>
                    </div>
                    <Link 
                      to={`/blog/${blog.id}`} 
                      className="text-luxury-gold hover:text-luxury-khaki transition-colors flex items-center gap-1 font-medium group-hover:font-semibold hover-underline-grow"
                    >
                      Read more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 rounded-sm hover:scale-105"
            asChild
          >
            <Link to="/blog" className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
