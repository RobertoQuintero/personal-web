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
  {
    name: "bootstrap.png",
  },
  {
    name: "vscode.png",
  },
  {
    name: "redux.png",
  },
  {
    name: "next.png",
  },
  {
    name: "expo.png",
  },
];

export const ImageItem = ({ name }) => {
  return (
    <i>
      <img src={name} alt={name} />
    </i>
  );
};
