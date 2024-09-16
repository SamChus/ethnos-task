import { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "@/components/AlbumCard"; 
import Loading from "@/components/Loading";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface User {
  id: number;
  name: string;
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [albumsPerPage] = useState(20);

  // Logic for pagination
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchAlbumsAndUsers = async () => {
      try {
        // Fetch albums
        const albumsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const albumsData = albumsResponse.data.map((album: any) => ({
          userId: album.userId,
          id: album.id,
          title: album.title,
        }));

        setAlbums(albumsData);

        // Fetch users to get the names for the albums
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

    fetchAlbumsAndUsers();
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
    <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-5 m-auto">
      {currentAlbums.map((album) => (
        <AlbumCard
          key={album.id}
          title={album.title}
          user={getUserById(album.userId)}
          albumId={album.id}
        />
      ))}
      <Pagination className="ml-7">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => paginate(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: Math.ceil(albums.length / albumsPerPage) }).map(
            (_, index) => (
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
            <PaginationNext
              href="#"
              onClick={() => paginate(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Albums;
