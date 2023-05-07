import React from "react";
import css from "./GalleryItem.module.css";

export function GalleryItem({ item, handleClickItem }) {
  const { webformatURL, tags, likes, views, comments, downloads } = item;

  const handleClick = () => {
    handleClickItem(item);
  };

  return (
    <li className={css.photoCard} onClick={handleClick}>
      <img alt={tags} src={webformatURL} loading="lazy" />
      <div className={css.info}>
        <p>
          <b>Likes</b> {likes}
        </p>
        <p>
          <b>Views</b> {views}
        </p>
        <p>
          <b>Comments</b> {comments}
        </p>
        <p>
          <b>Downloads</b> {downloads}
        </p>
      </div>
    </li>
  );
}
