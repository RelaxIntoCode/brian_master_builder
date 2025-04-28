import styles from "./GalleryList.module.css";
import Image from "next/image";
import Hero from "../Hero/Hero";
function GalleryList() {
  const images = [
    {
      id: 1,
      path: "IMG_1.JPG",
    },
    {
      id: 2,
      path: "IMG_2.JPG",
    },
    {
      id: 3,
      path: "IMG_3.JPG",
    },
    {
      id: 4,
      path: "IMG_4.JPG",
    },
    {
      id: 5,
      path: "IMG_5.JPG",
    },
    {
      id: 6,
      path: "IMG_6.JPG",
    },
    {
      id: 7,
      path: "IMG_7.JPG",
    },
    {
      id: 8,
      path: "IMG_8.JPG",
    },
    {
      id: 9,
      path: "IMG_9.JPG",
    },
    {
      id: 10,
      path: "IMG_10.JPG",
    },
    {
      id: 11,
      path: "IMG_11.JPG",
    },
    {
      id: 12,
      path: "IMG_12.JPG",
    },
    {
      id: 13,
      path: "IMG_13.JPG",
    },
    {
      id: 14,
      path: "IMG_14.JPG",
    },
    {
      id: 15,
      path: "IMG_15.JPG",
    },
    {
      id: 16,
      path: "IMG_16.JPG",
    },
    {
      id: 17,
      path: "IMG_17.JPG",
    },
    {
      id: 18,
      path: "IMG_18.JPG",
    },
    {
      id: 19,
      path: "IMG_19.JPG",
    },
  ];
  return (
    <div>
      <Hero title="Gallery" img="/building-img.jpg" />
      <div className={styles.container}>
        {images.map((image) => {
          return (
            <div className={styles.card} key={image.id}>
              <Image
                src={`/${image.path}`}
                fill
                alt={`img ${image.id} `}
                style={{ objectFit: "cover", borderRadius: "5px" }}
                quality={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalleryList;
