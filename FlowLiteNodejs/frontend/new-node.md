 ---
  Add a new wireframe node to the toolbox

  ▎ Create a new wireframe node called [Name] in the content subgroup (or commerce / marketing / interactive / utility).

  ▎ The layout should show: [describe the sections, e.g. "a navigation bar at the top, a hero image, three columns of content cards, and a footer"].

  ▎ Use existing section components from sections.jsx where possible (Frame, Hero, Footer, Navigation, Article, etc.). Add any new inline sections
  directly inside the component file — do not add them to sections.jsx unless they are reusable across multiple wireframes.

  ▎ Register it in index.js and create the component file in wireframes/.

  ---
  The three files always touched:

  ┌─────────────────────────────────────────────────────────┬─────────────────────────────────────────────────────────────────────┐
  │                          File                           │                             What to do                              │
  ├─────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────┤
  │ src/components/nodes/wireframes/[Name].jsx              │ Create the component                                                │
  ├─────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────┤
  │ src/components/nodes/index.js                           │ Import it and add an entry with label, group: "wireframe", subgroup │
  ├─────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────┤
  │ (optional) src/components/nodes/wireframes/sections.jsx │ Add reusable section components here only                           │
  └─────────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────┘
