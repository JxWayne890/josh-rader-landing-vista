
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { BlogPost } from '@/types/blog';
import BlogEditorForm from './blog-editor/BlogEditorForm';

interface BlogEditorProps {
  currentBlog: Partial<BlogPost>;
  setCurrentBlog: React.Dispatch<React.SetStateAction<Partial<BlogPost>>>;
  onSave: () => void;
  onCancel: () => void;
  userId: string;
}

const BlogEditor = ({ currentBlog, setCurrentBlog, onSave, onCancel, userId }: BlogEditorProps) => {
  const [saving, setSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      
      if (!currentBlog.title || !currentBlog.excerpt || !currentBlog.formattedContent || !currentBlog.category) {
        throw new Error("Please fill all required fields");
      }
      
      const processedBlocks = currentBlog.formattedContent.map(block => {
        let processedContent = block.content;
        return {
          ...block,
          content: processedContent
        };
      });
      
      const htmlContent = processedBlocks.map(block => {
        switch(block.type) {
          case 'heading':
            return `<h3>${block.content}</h3>`;
          case 'paragraph':
            return `<p>${block.content}</p>`;
          case 'quote':
            return `<blockquote>${block.content}</blockquote>`;
          case 'list':
            return `<ul>${block.content.split('\n').map(item => `<li>${item}</li>`).join('')}</ul>`;
          case 'image':
            return `<img src="${block.content}" alt="Blog content" class="w-full rounded" />`;
          default:
            return `<p>${block.content}</p>`;
        }
      }).join('\n\n');
      
      if (currentBlog.id) {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title: currentBlog.title,
            excerpt: currentBlog.excerpt,
            content: htmlContent,
            formattedContent: processedBlocks,
            image_url: currentBlog.image_url,
            category: currentBlog.category,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentBlog.id);
          
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Blog post updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            title: currentBlog.title,
            excerpt: currentBlog.excerpt,
            content: htmlContent,
            formattedContent: processedBlocks,
            image_url: currentBlog.image_url,
            category: currentBlog.category,
            author_id: userId
          });
          
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Blog post created successfully",
        });
      }
      
      onSave();
    } catch (error: any) {
      toast({
        title: "Error saving blog",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="luxury-card p-8 mb-8">
      <h2 className="text-xl font-bold mb-6">
        {currentBlog.id ? "Edit Blog Post" : "Create New Blog Post"}
      </h2>
      <BlogEditorForm
        currentBlog={currentBlog}
        setCurrentBlog={setCurrentBlog}
        onSave={handleSave}
        onCancel={onCancel}
      />
    </div>
  );
};

export default BlogEditor;
