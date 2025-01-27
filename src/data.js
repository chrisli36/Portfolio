import chess_gif from './assets/chess.gif';
import vax_scope_pic from './assets/images/summary.png';
import mini_amazon_pic from './assets/images/wtf.png';
import graphics_pic from './assets/images/graphics.png';

export const projects = [
    {
      title: "VaxScope",
      subtitle: "Django, Pytorch, and React",
      description:
        "Collaborating with PhD candidate Rickard Stureborg and Dr. Jun Yang, I led the development of a scalable, real-time classification pipeline integrated with VaxScope, a web platform powered by a lightweight BERT-based model. VaxScope identifies and visualizes vaccine-related concerns, enabling actionable public health strategies through real-time trend analysis.",
      image: vax_scope_pic,
      link: "https://vax.cs.duke.edu",
    },
    {
      title: "Mini-Amazon",
      subtitle: "Flask and PostgreSQL",
      description:
        "In a team, I developed a full-stack web application replicating Amazon’s core functionalities, including product browsing, cart management, and checkout, showcasing efficient and scalable backend design.",
      image: mini_amazon_pic,
      link: "https://gitlab.oit.duke.edu/wwh15/mini-amazon-skeleton-24-fall",
    },
    {
      title: "Chess Li",
      subtitle: "Python",
      description:
        "Developed a chess engine from scratch, optimizing move generation with bit manipulation and implementing a minimax algorithm with alpha-beta pruning. The engine supports a graphical user interface and an AI opponent.",
      image: chess_gif,
      link: "https://github.com/chrisli36/Chess-Li",
    },
    {
      title: "2D Graphics Engine",
      subtitle: "C++",
      description:
        "Built a 2D graphics engine with support for arbitrary polygons, Bézier curves, and custom bitmap/color shaders.",
      image: graphics_pic,
      link: "https://pythonbootcamp.com",
    },
  ];