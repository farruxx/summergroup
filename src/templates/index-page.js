import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import check from '../img/check.svg'
import bola from '../img/bola.svg'
import catalog from '../img/catalog.png'
import Contact from '../pages/contact/';
import Download from '../pages/contact/donwload';
import Muammo from './Muammo';
import Ustun from './Ustun';
const data = [
  'Сифатли ва чидамли',
  'Шубани алмаштириб қайта ишлатиш мумкин',
  'Катта миқдорда етказиш',
]
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            lineHeight: '1',
            marginTop: 140,
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: 'black',
              lineHeight: '1',
              padding: '0.25em',
              textAlign: 'center'
            }}
          >
            {title}
          </h1>
          <div style={{ padding: 16 }}>
            {data.map(d => (<div class="features">
              <img
                src={check}
                alt="check"
              />
              <h3 className="has-text-weight-bold" style={{ marginLeft: 16 }}>{d}</h3>
            </div>))
            }
          </div>
          <img
            src={bola}
            alt="image"
            style={{ height: 220, alignSelf: 'center', }}
          />
        </div>
      </div>
      <section className="section section--gradient" >
        <div className="container" >
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1" >
                <div className="content" >
                  <div className="content">
                    <div className="tile" style={{ marginTop: 64 }}>
                      <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                        style={{
                          color: 'black',
                          lineHeight: '1',
                          padding: '0.25em',
                          textAlign: 'center'
                        }}>{mainpitch.title}</h1>
                    </div>
                    <img
                      src={catalog}
                      alt="image"
                      style={{ alignSelf: 'center' }}
                    />
                    <h3 className="is-size-6-mobile is-size-5-tablet is-size-4-widescreen"
                      style={{ fontSize: 18, textAlign: 'center', color:'black' }}>Махсулот каталоги ва нархларини юклаб олиш учун қуйидаги формани тўлдиринг ва <font style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Бепул</font> юклаб олинг!</h3>
                    <Download />
                  </div>
                  <Muammo />
                  <Ustun />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
