export const Components = () => {
  return (
    <div className="content">
      <h1>Free Components</h1>
      <p>Included are a few free components for you to use or delete! :{")"}</p>
      <h2>{"<Card />"}</h2>
      <code>./components/dataDisplay/Card</code>
      <p>
        Basic card component, accepts props:
        <ul style={{ margin: "1em 0 0 2em" }}>
          <li>
            <code>image={"{}"} // enter image source url()</code>
          </li>
          <li>
            <code>
              title={"{}"} // adds {"<h3 />"} tag
            </code>
          </li>
          <li>
            <code>
              content={"{}"} // also - {"{children}"}
            </code>
          </li>
        </ul>
      </p>
      <h2>{"<Jumbo />"}</h2>
      <code>./components/dataDisplay/Jumbo.js</code>
      <p>
        Very primitive Jumbo / Header component to extend. Accepts no props.
        Returns <code>{"{children}"}</code>
      </p>
      <h2>{"<Button />"}</h2>
      <code>./components/dataDisplay/Button.js</code>
      <p>A much useful button component</p>
      <h2>{"<Header />"}</h2>
      <code>./components/layout/Header.js</code>
      <h2>{"<Footer />"}</h2>
      <code>./components/layout/Footer.js</code>

      <h3 style={{ marginTop: "3em" }}>Other freebies</h3>
      <h2>
        <code>{"<input />"}</code>, <code>{"<textarea />"}</code> styles
      </h2>
      <p>
        Beautiful input and textarea styles, defined in {"<GlobalStyle />"}{" "}
        component located in <code>./components/Page.js</code>
      </p>

      <h2>Themeing</h2>
      <p>Basic setup for theming with Next.js and Styled-Components.</p>
    </div>
  );
};

export default Components;
