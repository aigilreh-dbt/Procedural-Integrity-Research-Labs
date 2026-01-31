import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/research/intro">
            View Research
          </Link>
          <span style={{margin: '0 10px'}}></span>
           <Link
            className="button button--secondary button--lg"
            to="/docs/solutions/legal-audit">
            View Solutions
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Procedural Integrity Research Lab">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
            <h2>The Layered Truth Architecture</h2>
            <p>
                We separate <strong>Core Logic</strong>, <strong>Structural Evidence</strong>, and <strong>Energy Indicators</strong> 
                to create explainable AI for high-stakes environments.
            </p>
        </div>
      </main>
    </Layout>
  );
}