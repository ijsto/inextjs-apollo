import App from "next/app";
import Page from "../components/Page";

class AppWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // expose query to the pages
    pageProps.query = ctx.query;
    pageProps.asPath = ctx.asPath;

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default AppWrapper;
