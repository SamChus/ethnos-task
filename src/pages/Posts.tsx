import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "@/components/PostCard";
import Loading from "@/components/Loading";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface User {
  id: number;
  name: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  // Logic for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      try {
        // Fetch posts
        const postsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsData = postsResponse.data.map((post: any) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body,
        }));

        setPosts(postsData);

        // Fetch users to get the names for the posts
        const usersResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = usersResponse.data.map((user: any) => ({
          id: user.id,
          name: user.name,
        }));
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsAndUsers();
  }, []);

  const getUserById = (userId: number) => {
    return (
      users.find((user) => user.id === userId) || {
        name: "Unknown",
        id: userId,
      }
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-5  m-auto:">
      {currentPosts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          user={getUserById(post.userId)}
          postId={post.id}
        />
      ))}
    <Pagination className="ml-7">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => paginate(currentPage - 1)} />
        </PaginationItem>
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
        (item, index) => (
          <PaginationItem key={index}>
            <PaginationLink
            href="#"
            isActive={currentPage === index + 1}
            onClick={() => paginate(index + 1)}
            >
            {index + 1}
            </PaginationLink>
          </PaginationItem>
        )
        )}
        <PaginationItem>
        <PaginationNext href="#" onClick={() => paginate(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  );
};

export default Posts;





