import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://media.gq-magazine.co.uk/photos/5dceb09dc62d9b0008fc8fc8/master/pass/HATS_Untitled-1.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHzLu8-vohYaKi7vPkAFc-z27MxMp9bFwpw&usqp=CAU",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cool-sneakers-1629750062.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/20/12/lfwstreetstyle2002j.jpg?width=1200&width=1200&auto=webp&quality=75",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://image.shutterstock.com/image-vector/set-clothing-accessories-fashion-style-260nw-635731937.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
