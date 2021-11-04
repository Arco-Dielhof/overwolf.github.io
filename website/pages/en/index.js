const React = require('react');

function EasilySection(props) {
  const {config: siteConfig} = props;
  const {baseUrl} = siteConfig;
  return (
    <section className="easily">
      <div className="container">
        <header>Easily create apps for PC gamers</header>
        <p>Overlay, real-time game events, monetization, auto patching, Anti-Cheat compatibility and all that good stuff</p>
        <a className="btn" href={`${baseUrl}docs/start/getting-started`}>Build an app</a>
      </div>
    </section>
  );
}

function TilesSection(props) {
  const {config: siteConfig} = props;
  const {baseUrl} = siteConfig;
  return (
    <section className="tiles">
      <ul className="container">
        <Tile config={siteConfig} href={`${baseUrl}docs/start/app-creation-process`} header="Tutorials" imgSrc="img/tutorials.png">
          Newbie and pro web devs should start here
        </Tile>
        <Tile config={siteConfig} href={`https://www.overwolf.com/appstore`} header="Get inspired" imgSrc="img/posion.png" target="_blank">
          See what others crafted
        </Tile>
        <Tile config={siteConfig} href={`${baseUrl}docs/topics/best-practices-overview`} header="Read our scrolls" imgSrc="img/scroll.png">
          Documentation, API and<br /> stuff you can use
        </Tile>
      </ul>
    </section>
  );
}

function Tile(props) {
  const {config: siteConfig, header, imgSrc, href, target} = props;
  return (
    <li>
      <a href={href} target={target}>
        <img className="icon" src={imgSrc} />
        <header className="subtitle">{header}</header>
        <p>
          {props.children}
        </p>
      </a>
    </li>
  )
}

function SdkSection(props) {
  const {config: siteConfig} = props;
  const {baseUrl} = siteConfig;
  return (
    <section className="sdk">
      <div className="container">
        <h1>Learn more about the Overwolf SDK</h1>
        <ul>
          <SdkItem config={siteConfig} classNameImg="extra-padding-on-desktop" imgSrc="img/create.png">
            <a href={`${baseUrl}docs/start/sdk-introduction`}>Easily create a desktop app</a> with overlay capabilities, using just HTML and JS. Your own desktop app, desktop icon, auto updates, anti-cheat compatibility and the works... we do it all for you
          </SdkItem>
          <SdkItem className="reversed" config={siteConfig} imgSrc="img/events.png">
            <a href={`${baseUrl}docs/api/overwolf-games-events`}>Get access to real-time game events</a> for leading games and make your app as if it were integrated directly with the game itself
          </SdkItem>
          <SdkItem config={siteConfig} classNameImg="extra-padding-on-desktop" imgSrc="img/monetize.png">
            <a href={`${baseUrl}docs/start/monetization-overview`}>Monetize your app</a> and make money by showing forgivable ads (= ads on loading screens, when gamers don’t have anything better to do anyway). It’s easier than implementing AdSense, not affected by ad blockers, not obtrusive and our team will optimize the experience with you
          </SdkItem>
        </ul>
      </div>
    </section>
  )
}

function SdkItem(props) {
  const { imgSrc, className, classNameImg } = props;
  return (
    <li className={className}>
      <p>
        {props.children}
      </p>
      <div className={`sdk-graphic ${classNameImg}`}>
        <img src={imgSrc} />
      </div>
    </li>
  );
}

function GameDevSection(props) {
  const {config: siteConfig} = props;
  const {baseUrl} = siteConfig;
  return (
    <section className="game-dev">
      <div className="container">
        <h1>Game developer?</h1>
        <p>
          Community is power and a driver for retention.<br/>
          Give your community tools to create valuable in-game content for your game with the Overwolf SDK
        </p>
        <a className="btn" href={`${baseUrl}docs/topics/events-SDK-for-game-developers`}>Learn more</a>
      </div>
    </section>
  );
}

function BlogSection(props) {
  return (
    <section className="blog">
      <div className="container">
        <h3 id="blogHeader">The latest from our blog</h3>
        <div id="medium-widget"></div>
        <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
        <script src="js/blog.js"></script>
      </div>
    </section>
  );
}

class Index extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    return (
      <div className="body home blog">
        <main id="content" className="main-content" role="main">
          <EasilySection config={siteConfig}></EasilySection>
          <TilesSection config={siteConfig}></TilesSection>
          <SdkSection config={siteConfig}></SdkSection>
          <BlogSection></BlogSection>
          <GameDevSection config={siteConfig}></GameDevSection>
        </main>
      </div>
    );
  }
}

module.exports = Index;
