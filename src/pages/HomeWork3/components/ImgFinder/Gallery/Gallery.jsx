import { GalleryItem } from "./GalleryItem/GalleryItem";
import css from "./Gallery.module.css";

export function Gallery({ items }) {
  return (
    <div>
      <ul className={css.gallery}>
        {items.map((item) => (
          <GalleryItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
