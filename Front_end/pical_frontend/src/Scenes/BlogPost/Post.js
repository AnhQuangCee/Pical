import React, { Component } from "react";
import Chat from "./Chat";

class Post extends Component {
  render() {
    return (
      <div className="col-md-8 post">
        <h2>Bacon ipsum dolor amet alcatra tail pork loin shankle fatback.</h2>
        <div className="row">
          <div className="author col-md-6">
            <div className="row">
              <div className="col-2 text-center">
                <img
                  src="../images/profile.png"
                  alt="true"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="col-10">
                <p className="title">
                  Kate
                  <span>Follow</span>
                </p>
                <p className="time">July 8 - 9 min read</p>
              </div>
            </div>
          </div>
          <div className="col-md-6" />
        </div>
        <br />
        <p>
          Bacon ipsum dolor amet alcatra tail pork loin shankle fatback,
          prosciutto pork landjaeger. Ground round alcatra bresaola
        </p>
        <img src="../images/trang.jpg" style={{ width: "100%" }} />
        <p className="caption text-center">Photo: Pical/ Flosat</p>
        <p>
          Bpsum dolor amet alcatra tail pork loin shankle fatback, prosciutto
          pork landjaeger. Ground round alcatra bresaola, fatback drumstick
          capicola landjaeger porchetta ham. Landjaeger jerky bresaola pork
          belly ground round kielbasa picanha pastrami salami beef. Fatback
          salami venison biltong frankfurter ribeye bresaola pork buffalo tongue
          spare ribs jowl prosciutto short loin. Meatball spare ribs chuck, cow
          venison brisket ham ball tip bacon shank short ribs beef ribs. Swine
          hamburger drumstick fatback pork belly, ham hock tail meatball chuck
          landjaeger picanha ham burgdoggen leberkas. Tongue shankle corned beef
          jowl, swine beef kielbasa venison pork cow doner spare ribs. Short
          loin kielbasa shoulder pastrami t-bone, andouille filet mignon. Jerky
          beef ribs drumstick turducken sausage, tail short loin bacon. Pork
          belly ground round salami, tail picanha shankle pig. Shank ribeye
          spare ribs ball tip.
        </p>
        <p>
          Drumstick cupim porchetta, pastrami chicken ham hock ground round
          tenderloin burgdoggen. Hamburger kevin turducken bacon capicola pork
          belly filet mignon. Cupim turducken cow kielbasa swine corned beef
          biltong shank ribeye strip steak pork loin venison sausage. Salami
          drumstick ground round doner ham hock, beef flank buffalo strip steak
          andouille. Pastrami fatback swine, jowl meatloaf kevin boudin cupim
          pancetta prosciutto capicola sausage. Leberkas filet mignon cupim
          kevin pork loin. Fatback corned beef picanha sausage brisket turkey
          sirloin strip steak meatball chuck chicken venison leberkas. Pork
          bacon doner, ham hock buffalo cow pancetta ball tip strip steak
          sausage turkey. Strip steak chuck beef boudin picanha ball tip.
          Shoulder frankfurter beef salami kevin, jowl beef ribs jerky doner
          ground round porchetta. Tri-tip shankle pork loin jerky pork chop
          t-bone cow meatloaf ground round burgdoggen hamburger chuck rump
          tongue kevin. Bresaola alcatra venison fatback beef ribs. Short loin
          beef strip steak ball tip fatback ham hock doner picanha. Porchetta
          doner short ribs beef ribs tail andouille ball tip turkey pastrami.
          Pork sirloin buffalo, kielbasa pork belly corned beef pastrami cow
          cupim jerky ball tip. Bacon shoulder ground round beef ribs meatloaf,
          picanha ham chicken beef turducken buffalo meatball. Chicken bresaola
          shank kielbasa pork chop biltong venison hamburger. Does your lorem
          ipsum text long for something a little meatier? Give our generator a
          try… it’s tasty!
        </p>
        <p>
          Drumstick cupim porchetta, pastrami chicken ham hock ground round
          tenderloin burgdoggen. Hamburger kevin turducken bacon capicola pork
          belly filet mignon. Cupim turducken cow kielbasa swine corned beef
          biltong shank ribeye strip steak pork loin venison sausage. Salami
          drumstick ground round doner ham hock, beef flank buffalo strip steak
          andouille. Pastrami fatback swine, jowl meatloaf kevin boudin cupim
          pancetta prosciutto capicola sausage. Leberkas filet mignon cupim
          kevin pork loin. Fatback corned beef picanha sausage brisket turkey
          sirloin strip steak meatball chuck chicken venison leberkas. Bresaola
          alcatra venison fatback beef ribs. Short loin beef strip steak ball
          tip fatback ham hock doner picanha. Porchetta doner short ribs beef
          ribs tail andouille ball tip turkey pastrami. Pork sirloin buffalo,
          kielbasa pork belly corned beef pastrami cow cupim jerky ball tip.
          Bacon shoulder ground round beef ribs meatloaf, picanha ham chicken
          beef turducken buffalo meatball. Chicken bresaola shank kielbasa pork
          chop biltong venison hamburger. Does your lorem ipsum text long for
          something a little meatier? Give our generator a try… it’s tasty!
        </p>
        <Chat></Chat>
      </div>
    );
  }
}

export default Post;
