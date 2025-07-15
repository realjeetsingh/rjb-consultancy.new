import React, { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const files = ["gym-growth-success.md"];
      const blogData = await Promise.all(
        files.map(async (file) => {
          const response = await fetch(`/blogs/${file}`);
          const text = await response.text();
          const { data, content } = matter(text);
          return { ...data, content };
        })
      );
      setBlogs(blogData);
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blogs" style={{ padding: '4rem 2rem' }}>
      <h2>RJR Blog</h2>
      {blogs.map((blog, idx) => (
        <div key={idx} style={{ background: '#fff', padding: '1.5rem', marginBottom: '2rem', borderRadius: '10px' }}>
          <h3>{blog.title}</h3>
          <small>{blog.date}</small>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      ))}
    </section>
  );
};

export default BlogPage;