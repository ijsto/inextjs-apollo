import { withRouter } from "next/router";
import App from "next/app";
import { ApolloProvider } from "react-apollo";

import { RouterContext, UserContext } from "../api/context";

import withApollo from "../lib/withApollo";

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
    const { apollo, Component, pageProps, router } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <RouterContext.Provider value={router}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </RouterContext.Provider>
      </ApolloProvider>
    );
  }
}

export default withRouter(withApollo(AppWrapper));
