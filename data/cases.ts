interface Cases {
  id: number;
  tab: string;
  title: string;
  summary: string[];
  image: string;
  link: string;
};

const exampleCases: Cases[] = [
  {
    id: 1,
    tab: "Example 1",
    title: "Example 1",
    summary: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a.",
      "Commodo odio aenean sed adipiscing diam donec. Donec ac odio tempor orci dapibus ultrices. Condimentum lacinia quis vel eros donec ac odio tempor.",
    ],
    image: "/images/example_image_1.jpg",
    link: "",
  },
  {
    id: 2,
    tab: "Example 2",
    title: "Example 2",
    summary: [
      "Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Risus feugiat in ante metus dictum at tempor.",
      "Elementum facilisis leo vel fringilla est. Euismod quis viverra nibh cras. At elementum eu facilisis sed. Quis blandit turpis cursus in.",
    ],
    image: "/images/example_image_2.jpg",
    link: "",
  },
  {
    id: 3,
    tab: "Example 3",
    title: "Example 3",
    summary: [
      "Sodales ut etiam sit amet nisl purus in. Blandit libero volutpat sed cras. Nunc sed augue lacus viverra vitae. Eu tincidunt tortor aliquam nulla facilisi cras.",
      "Fermentum dui faucibus in ornare. Lorem sed risus ultricies tristique nulla aliquet enim. Nunc mattis enim ut tellus elementum sagittis vitae. Fames ac turpis egestas sed.",
    ],
    image: "/images/example_image_3.jpg",
    link: "",
  },
];

export default exampleCases;