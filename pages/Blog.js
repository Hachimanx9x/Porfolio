import Layout from "../components/Layout";
import { Projects_general } from "../profile";
//{ name, content, img, obj3d, source })
const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="o-overflow">
        <img
          className="card-img-top"
          src={`/images/${post.img}`}
          alt={post.name}
        />
      </div>
      <div className="card-body">
        <h1>{post.name}</h1>
        <p>{post.content}</p>
        <a
          href={post.source}
          target="_black"
          className="btn btn-outline-secondary  my-2"
        >
          Ver contenido
        </a>
      </div>
    </div>
  </div>
);

export default function Blog() {
  return (
    <Layout footer={false} dark={true} title="Proyectos">
      <div className="row">
        {Projects_general.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </Layout>
  );
}
