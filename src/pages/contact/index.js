import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false, phone:'+9989' ,name:'',message:''}
  }

  method(body){
    console.log("asd")
    console.log(body)
    fetch('https://summergroup.uz/.netlify/functions/hello', {  
        method: 'POST',  
        // headers: {  
        //   "Content-type": "application/json"  
        // },  
        body:body
      })
      .then(function (response) {  
        return response.json()  
      })  
      .then(function (data) {  
        console.log('Request succeeded with JSON response', data); 
      })  
      .catch(function (error) {  
        console.log('Request failed', error);  
      });
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
              <h2 style={{color:"red", textAlign: 'center'}}>Ҳозироқ буюртма беришни истайсизми?</h2>
              <h4>Маълумотни киритиб буюртма беринг</h4>
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
                      value={this.state.name}
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
                <label className="label" htmlFor={'phone'}>
                Буюртма тури
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder={""}
                      name={'message'}
                      value={this.state.message}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <button className="button is-link" type="submit"
                  style={{background:"red"}}
                  onClick={()=>{
                    let body = this.state.phone+"\n" + this.state.name+"\n"+ this.state.message
                  
                    this.method(body)
                    this.setState({name:'',
                  phone:'',message:''})
                  }}>
                  БУЮРТМА БЕРИШ
                  </button>
                </div>
                <div className="field">
                  <button className="button light" type="submit">
                  +99899 8865646
                  </button>
                </div>
              </form>
      </>
    )
  }
}