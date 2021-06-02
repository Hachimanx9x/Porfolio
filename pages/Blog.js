import Layout from "../components/Layout";
import Card from "../components/Card";
import { Projects_general } from "../profile";
//{ name, content, img, obj3d, source })

export default function Blog() {
  return (
    <Layout footer={false} dark={true} title="Proyectos">
      <div className="row">
        {Projects_general.map(
          ({ name, description, image, demo, github }, i) => (
            <Card
              key={i}
              name={name}
              description={description}
              image={image}
              demo={demo}
              github={github}
            />
          )
        )}
      </div>
    </Layout>
  );
}
