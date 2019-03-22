import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import download from '../../img/download.svg'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false, phone: '+9989' }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The form-name hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={'phone'}>
              Исмингиз
                  </label>
            <div className="control">
              <input
                className="input"
                placeholder={""}
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={'phone'}>
              Телефон рақамингиз
                  </label>
            <div className="control">
              <input
                className="input"
                placeholder={"+998"}
                type={'phone'}
                name={'phone'}
                value={this.state.phone}
                onChange={this.handleChange}
                id={'phone'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit"
              style={{ background: "red" }}>
                <img
            src={download}
            alt="image"
            style={{ height: 15,marginRight:5, alignSelf: 'center', }}
          />БЕПУЛ ЮКЛАБ ОЛИШ
                  </button>
          </div>
        </form>
      </>
    )
  }
}