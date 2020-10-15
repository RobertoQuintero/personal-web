export const imagesTop = [
  {
    name: "html.png",
  },
  {
    name: "css.png",
  },
  {
    name: "js.png",
  },
  {
    name: "pug.png",
  },
  {
    name: "sass.png",
  },
];

export const imagesDown = [
  {
    name: "react.png",
  },
  {
    name: "node.png",
  },
  {
    name: "firebase.png",
  },
  {
    name: "npm.png",
  },
  {
    name: "git.png",
  },
];

export const ImageItem = ({ name }) => {
  return (
    <i>
      <img src={name} alt={name} />
    </i>
  );
};
