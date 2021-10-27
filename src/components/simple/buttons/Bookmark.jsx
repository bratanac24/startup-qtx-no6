import React, { useState, useCallback } from "react";
import "./Bookmark.scss";
import cs from "classnames";
import { ReactComponent as BookmarkIcon } from "../../../assets/svg/icon-bookmark.svg";
export default function Bookmark() {
  const [isCheck, setIsCheck] = useState(false);
  const [text, setText] = useState("Bookmark");

  const bookmark = useCallback(() => {
    setIsCheck(!isCheck);
    if (text === "Bookmark") setText("Bookmarked");
    else setText("Bookmark");
  }, [setIsCheck, isCheck, setText, text]);

  // prettier-ignore
  const bookMarkClass = cs('bookmark', { 'bookCheck': isCheck });
  return (
    <button id="bookmark" onClick={bookmark} className={bookMarkClass}>
      <div className="icon">
        <BookmarkIcon className={"icon"} />
      </div>
      <h3>{text}</h3>
    </button>
  );
}
