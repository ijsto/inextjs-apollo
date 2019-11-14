export const Components = () => {
  return (
    <div className="content">
      <h1>Free Components</h1>
      <p>Included are a few free components for you to use or delete! :{")"}</p>
      <h2>{"<Card />"}</h2>
      <code>./components/dataDisplay/Card</code>
      <p>
        Basic card component, accepts props:
        <ul>
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
    </div>
  );
};

export default Components;
