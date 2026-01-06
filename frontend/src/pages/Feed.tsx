import { useEffect, useState } from "react";
import { getFeed } from "../api/posts.service";
import { useAuth } from "../context/AuthContext";

interface Post {
  id: string;
  caption: string;
  url: string;
  file_type: string;
  created_at: string;
  email: string;
  is_owner: boolean;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { logout } = useAuth();

  useEffect(() => {
    getFeed()
      .then(setPosts)
      .catch(() => {
        alert("Error cargando feed");
      });
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <button onClick={logout}>Logout</button>

      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p>
            <b>{post.email}</b>
          </p>

          {post.file_type === "image" ? (
            <img src={post.url} width="300" />
          ) : (
            <video src={post.url} width="300" controls />
          )}

          <p>{post.caption}</p>
          <small>{new Date(post.created_at).toLocaleString()}</small>

          {post.is_owner && <p>🗑️ (borrar luego)</p>}
        </div>
      ))}
    </div>
  );
}
