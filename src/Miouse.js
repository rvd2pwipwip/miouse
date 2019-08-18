import React from "react";
import { list } from "./helpers/albums";

const Miouse = () => (
  <div>
    {list.map(item => (
      <div key={item.mbid} className="db center mw4 black link dim">
        <img
          src={item.cover}
          alt={item.release}
          className="db ba b--black-10"
        />
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 fw9">{item.release}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray">{item.artist}</dd>
          <dt className="clip">Date</dt>
          <dd className="ml0 gray">{item.date}</dd>
          <span>
            <a href={item.wiki}>{`${item.release} on wiki`}</a>
          </span>
        </dl>
      </div>
    ))}
  </div>
);

export default Miouse;
