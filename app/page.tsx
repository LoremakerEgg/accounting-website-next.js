import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.textDiv}>
        <h2>En enkel och snabb lösning för småföretagare</h2>
        <p>
          Vår tjänst erbjuder Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quasi id dolores nostrum commodi, iusto repellat ab
          ex iste earum amet eum aliquam deleniti deserunt non fugiat, iure
          libero quis! Maiores molestias nemo cum eveniet voluptatum molestiae
          praesentium, iusto repellendus recusandae animi sint aliquam saepe,
          perspiciatis incidunt rem laborum similique minima quidem ipsam neque!
          Corrupti ducimus voluptates tempora ipsam ipsum nobis assumenda,
          molestias sequi autem exercitationem amet tenetur id porro earum saepe
          illum quisquam, beatae officia, quaerat architecto. Eum pariatur
          assumenda modi eos nemo iste, explicabo ipsam eaque delectus ratione
          cumque alias fugiat aperiam quas dolor, earum repellat. Provident, id
          cumque?
        </p>
      </div>
      <div className={styles.imageDiv}>
        <Image
          src="/accounting-template-unsplash.jpg"
          width={700}
          height={400}
          alt="person holding accounting documents"
        />
      </div>
      <div className={styles.textDiv}>
        <h2>Individuell och personlig fokus</h2>
        <p>
          Med småföretag som primär kundbas Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Dignissimos repudiandae mollitia ipsum
          aut labore alias cupiditate voluptates unde soluta corrupti itaque
          facilis, quidem atque fugit molestias pariatur. Illum fugit, aperiam
          nihil voluptatum sapiente nisi illo id, nulla veritatis accusantium
          perferendis. Temporibus repellat non consequatur? Voluptatibus,
          pariatur cumque optio totam, voluptate vitae ratione eos voluptatum
          voluptas impedit quod veritatis iusto recusandae illo maxime vel a
          neque unde officiis consequatur doloremque odio reprehenderit
          praesentium. Libero corporis quos praesentium. Ducimus repudiandae
          necessitatibus itaque sunt accusantium, unde recusandae, nam
          architecto doloremque, et amet quibusdam quasi ratione distinctio
          labore hic ipsa tempora. Esse, pariatur vitae.
        </p>
      </div>
      <div className={styles.imageDiv}>
        <Image alt="insert image here" />
      </div>
    </div>
  );
}
