import React from "react";
import "./About.css";
import Nav from "./Nav";
import img from "./assets/about-img.jpg";

function About({ setCurrent, current }) {
  return (
    <div>
      <div className="content-container">
        <div className="content-wrapper">
          <Nav setCurrent={setCurrent} current={current} />
          <div className="content">
            <img src={img} title="Glenn" alt="Glenn" />
            <font size="3" className="paragraph">
              Glenn's first full time occupation started in 1977. He worked as a
              goldsmith learning many aspects of the jewelry industry, including
              jewelry design, fabrication, setting of precious and semi precious
              stones, and repair work. He remains involved in the jewelry
              industry by helping clients design custom pieces by request.
              <br />
              <br />
              In 1984, Glenn graduated from the Swedish Institute of Massage and
              Health Sciences in New York City. He studied deep tissue body work
              massage at Hartwood College in Garberville, California. He also
              did post graduate work in sports massage at The Sports' Institute
              in New York City.
              <br />
              <br />
              Glenn's love of adventure and travel has taken him worldwide. He
              enjoys skiing, mountaineering, mountain biking, and hiking. He
              enjoys being physical and challenging himself.
              <br />
              <br />
              G. S. S. Body Works was created in 2002 and has developed into a
              thriving full time endeavor for Glenn. His massage studio is in
              The Landmark Building in Milwaukee's Third Ward. The studio is a
              welcoming and calming space that heightens the rejuvenating
              experience of Glenn's massage.
              <br />
              <br />
              He sees massage as an art that is developed and shared. He gets a
              sense of self satisfaction from knowing that his massage is
              beneficial and enjoyed by his clients. He acknowledges that a
              healthy body is defined not only by physical well being but also
              by emotional and mental relaxation.
              <br />
              <br />
              "To keep the body in good health is a duty...otherwise we shall
              not be able to keep our mind strong and clear: " Buddha
              <br />
              <br />
              Member of The American Massage Therapy Association
              <br />
              <a
                href="http://www.amtamassage.org/famt/glennshein"
                target="_blank"
                rel="noreferrer"
              >
                http://www.amtmassage.org/famt/glennshein
              </a>
              <br />
              <br />
              State of Wisconsin licensed
            </font>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
