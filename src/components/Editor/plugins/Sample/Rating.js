import React from "react"
import StarRatings from 'react-star-ratings';

export default (editor) => {

  const blockManager = editor.BlockManager;

  blockManager.add('my-block-id', {
    category: "Basic",
    label: "Star Rating",
    content:( 
    <div>
      <span data-gjs-prop="someValue" title="foo">
        Hello!
      </span>
      <span data-gjs-prop="someValue" title="rating">
        <StarRatings
          rating={2.403}
          starDimension="40px"
          starSpacing="15px"
        />
      </span>
    </div>
    )
  });
};
