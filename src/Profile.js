import React, { Component } from 'react';
import './App.css';
import './Profile.css';
import { Link } from "react-router-dom";
import logo from "./ArrowDown.png";
import dots from "./logo.png";
import up from "./LogoUp.png";
import ux from "./ux-design.png";
import branding from "./branding.png";
import camera from "./camera.png";
import mention from "./Mention.png";
import ball from "./Shape.png";
import tweet from "./Tweet.png";
import linkedin from "./linkedin.png";
import genesys from "./Genesys.png";


class Profile extends Component {
  
  state = {
    learnMore: false,
    showWorks: false,
    showContact: false
  }
  
  learnMore =()=> {
    this.setState({learnMore: true})
  }
  showWorks = () => {
    this.setState({showWorks: true})
  } 
  showContact = () => {
    this.setState({ showContact: true })
  } 
  
  render() {
    if (this.state.learnMore == false) {
      return (
        <div>
        <div className="contact-nav">
          <div>
            <img src = {dots}/>
          </div>
          <div>
            <Link to ="">CONTACT</Link>
          </div>
        </div>
        <div className="name">
          <h1>Kene Ohiaeri</h1>
        </div>
        <div className="description">
          <div>
            <button onClick={this.learnMore}><p>Learn <br />More</p><img src = {logo}/></button>
          </div>
          <div className="desc-writing">
            <p>I am a User 
              Interface Designer currently based in Enugu, Nigeria. I am passionate about 
              creating products that are simple, smart and meticulous.
            </p>
            <div className="other-skills">
              <div className="other-skills-dot"></div>
              <p>Other Skills</p>
            </div>
            <div className="other-skills-list">
              <div><img src={ux} /></div>
              <div><img src={branding} /></div>
              <div><img src={camera} /></div>
            </div>
          </div>
        </div>
        </div>
      );
    }
    else {
      if (this.state.showWorks == false) {
        return (
          <div>
            <div className="contact-nav">
              <div>
                <img src = {dots}/>
              </div>
              <div>
                <Link to ="">CONTACT</Link>
              </div>
            </div>
            <div className="name">
              <h1>Kene Ohiaeri</h1>
            </div>
            <div className="description">
              <div>
                <button onClick={this.showMore}><p>Learn <br />More</p><img src = {logo}/></button>
              </div>
              <div className="desc-writing">
                <p>I am a User 
                  Interface Designer currently based in Enugu, Nigeria. I am passionate about 
                  creating products that are simple, smart and meticulous.
                </p>
                <div className="other-skills">
                  <div className="other-skills-dot"></div>
                  <p>Other Skills</p>
                </div>
                <div className="other-skills-list">
                  <div><img src={ux} /></div>
                  <div><img src={branding} /></div>
                  <div><img src={camera} /></div>
                </div>
              </div>
            </div>
            <div className="pictures">
              <div className="left-side">
                  <div className="first-image"></div>
                  <div className="first-image-below">
                  <div className="ball"><img src={ball} /></div>
                    <div></div>
                  <div className="tweet"><img src={tweet} /></div>
                  </div>
              </div>
              <div className="right-side">
                <div className="second-image-above">
                  <div></div>
                  <div className="grey"></div>
                  <div></div>
                  <div className="at"><img src={mention} /></div>
                </div>
                <div className="second-image"></div>
              </div>
            </div>
            <div className="pictures-two">
              <div className="third-set">
                <div></div>
                <div className="third-image"></div>
                <div className="grey"></div>
              </div>
              <div className="links">
                <div className="linkedin"><img src={linkedin} /></div>
                <div className="links-below">
                  <button onClick={this.showWorks}> <p>Works</p><img src={logo} /></button>
                  <div></div>
                  <div className="grey"></div>
                  <div></div>
                </div>
              </div>
              </div>
            </div>
        );
      }
      else {
        if (this.state.showContact == false) {
          return (
            <div>
              <div className="contact-nav">
                <div>
                  <img src = {dots}/>
                </div>
                <div>
                  <Link to ="">CONTACT</Link>
                </div>
              </div>
              <div className="name">
                <h1>Kene Ohiaeri</h1>
              </div>
              <div className="description">
                <div>
                  <button onClick={this.showMore}><p>Learn <br />More</p><img src = {logo}/></button>
                </div>
                <div className="desc-writing">
                  <p>I am a User 
                    Interface Designer currently based in Enugu, Nigeria. I am passionate about 
                    creating products that are simple, smart and meticulous.
                  </p>
                  <div className="other-skills">
                    <div className="other-skills-dot"></div>
                    <p>Other Skills</p>
                  </div>
                  <div className="other-skills-list">
                    <div><img src={ux} /></div>
                    <div><img src={branding} /></div>
                    <div><img src={camera} /></div>
                  </div>
                </div>
              </div>
              <div className="pictures">
                <div className="left-side">
                    <div className="first-image"></div>
                    <div className="first-image-below">
                    <div className="ball"><img src={ball} /></div>
                      <div></div>
                    <div className="tweet"><img src={tweet} /></div>
                    </div>
                </div>
                <div className="right-side">
                  <div className="second-image-above">
                    <div></div>
                    <div className="grey"></div>
                    <div></div>
                    <div className="at"><img src={mention} /></div>
                  </div>
                  <div className="second-image"></div>
                </div>
              </div>
              <div className="pictures-two">
                <div className="third-set">
                  <div></div>
                  <div className="third-image"></div>
                  <div className="grey"></div>
                </div>
                <div className="links">
                  <div className="linkedin"><img src={linkedin} /></div>
                  <div className="links-below">
                    <button onClick={this.showWorks}> <p>Works</p><img src={logo} /></button>
                    <div></div>
                    <div className="grey"></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="developers">
                <p>I have been able to work closely with developers and
                  designers alike on various projects with strict deadlines and
                  high expectations.</p>
              </div>
              <div className="two-rows">
                <div className="works">
                  <div></div>
                  <div className="genesys">
                    <div className="other-skills-dot"></div>
                    <div>
                      <p>Currently works at</p>
                      <img src={genesys} />
                    </div>
                    <div></div>
                  </div>
                  <div className="lady"></div>
                  <div className="grey-big"></div>
                </div>
                <div className="works-two">
                  <div className="contact-button">
                    <button onClick={this.showContact}><p>Contact</p><img src = {logo}/></button>
                  </div>
                  <div className="chota"></div>
                  <div className="grey-big"></div>
                  <div className="ola"></div>
                  <div></div>
                </div>
              </div>
            </div>
          );
        }
        else {
          return (
            <div>
            <div className="contact-nav">
              <div>
                <img src = {dots}/>
              </div>
              <div>
                <Link to ="">CONTACT</Link>
              </div>
            </div>
            <div className="name">
              <h1>Kene Ohiaeri</h1>
            </div>
            <div className="description">
              <div>
                <button onClick={this.showMore}><p>Learn <br />More</p><img src = {logo}/></button>
              </div>
              <div className="desc-writing">
                <p>I am a User 
                  Interface Designer currently based in Enugu, Nigeria. I am passionate about 
                  creating products that are simple, smart and meticulous.
                </p>
                <div className="other-skills">
                  <div className="other-skills-dot"></div>
                  <p>Other Skills</p>
                </div>
                <div className="other-skills-list">
                  <div><img src={ux} /></div>
                  <div><img src={branding} /></div>
                  <div><img src={camera} /></div>
                </div>
              </div>
            </div>
            <div className="pictures">
              <div className="left-side">
                  <div className="first-image"></div>
                  <div className="first-image-below">
                  <div className="ball"><img src={ball} /></div>
                    <div></div>
                  <div className="tweet"><img src={tweet} /></div>
                  </div>
              </div>
              <div className="right-side">
                <div className="second-image-above">
                  <div></div>
                  <div className="grey"></div>
                  <div></div>
                  <div className="at"><img src={mention} /></div>
                </div>
                <div className="second-image"></div>
              </div>
            </div>
            <div className="pictures-two">
              <div className="third-set">
                <div></div>
                <div className="third-image"></div>
                <div className="grey"></div>
              </div>
              <div className="links">
                <div className="linkedin"><img src={linkedin} /></div>
                <div className="links-below">
                  <button onClick={this.showWorks}> <p>Works</p><img src={logo} /></button>
                  <div></div>
                  <div className="grey"></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="developers">
              <p>I have been able to work closely with developers and
                designers alike on various projects with strict deadlines and
                high expectations.</p>
            </div>
            <div className="two-rows">
              <div className="works">
                <div></div>
                <div className="genesys">
                  <div className="other-skills-dot"></div>
                  <div>
                    <p>Currently works at</p>
                    <img src={genesys} />
                  </div>
                  <div></div>
                </div>
                <div className="lady"></div>
                <div className="grey-big"></div>
              </div>
              <div className="works-two">
                <div className="contact-button">
                  <button><p>Contact</p><img src = {logo}/></button>
                </div>
                <div className="chota"></div>
                <div className="grey-big"></div>
                <div className="ola"></div>
                <div></div>
              </div>
            </div>
            <div className="contact-kene">
              <div className="contact-header">
                <div className="other-skills-dot margin"></div>
                <div>
                  <h1>Contact</h1>
                </div>
              </div>
              <form>
                <input type="text" placeholder="Name" className="name-input"/>
                <input type="textarea" placeholder="Message" className="message-input"/><br/>
                <input type="email" placeholder="Email" className="email-input"/><br />
                <button className="button-input" onClick={this.showContact}>Contact</button>
              </form> 
            </div>
            <button className="top-button"><img src={up} /><p>Top</p></button>
          </div>
          );
        }
      }
    }
  }
}

export default Profile;