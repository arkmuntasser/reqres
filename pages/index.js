import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter'

const Home = () => {
  const [listings, setListings] = useState({});
  const [events, setEvents] = useState({});
  const [offers, setOffers] = useState({});
  const sections = [
    { name: 'listings', data: listings },
    { name: 'events', data: events },
    { name: 'offers', data: offers },
  ];

  useEffect(() => {
    async function getData() {
      let res = await fetch(`/api/listings?per_page=2`);
      const listings = await res.json();
      setListings(listings);

      res = await fetch(`/api/events?per_page=2`);
      const events = await res.json();
      setEvents(events);

      res = await fetch(`/api/offers?per_page=2`);
      const offers = await res.json();
      setOffers(offers);
    }

    getData();
  }, []);

  return (
    <main>
      <Head>
        <title>ReqRes</title>
      </Head>

      <div className='hero'>
        <h1 className='title'>SV ReqRes</h1>
        {/* <p className='description'>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p> */}
      </div>

      {sections.map(({ name, data }) => (
        <section key={name}>
          <h2>{name}</h2>
          <p>
            <span className="label">GET</span> - <Link href={`/api/${name}`}><a><code>/api/{name}</code></a></Link>
          </p>

          <div className="response-title">response</div>
          <pre className={`response response-${name}`}>
            <ReactJsonSyntaxHighlighter obj={data} />
          </pre>
        </section>
      ))}

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }

        :global(main) {
          margin: 0 auto;
          max-width: 980px;
        }

        :global(pre) {
          margin: 0;
        }

        :global(section) {
          margin-bottom: 92px;
        }

        .response-title {
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          border-radius: 8px 8px 0 0;
          background-color: #1a1c20;
        }

        .response {
          padding: 24px;
          color: #fff;
          border-radius: 0 0 8px 8px;
          background-color: #282c34;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        .label {
          display: inline-block;
          padding: 6px 8px;
          font-weight: 600;
          font-size: 0.8rem;
          color: #00405d;
          border-radius: 4px;
          background-color: #a7dcf5;
        }

        :global(.key) {
          color: #99dbff;
        }

        :global(.number) {
          color: #9fb796;
        }

        :global(.string) {
          color: #cf9176;
        }

        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
      `}</style>
    </main>
  )
}

export default Home
