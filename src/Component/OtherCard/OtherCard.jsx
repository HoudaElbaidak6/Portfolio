import { Component } from "react";
import "./OtherCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

class OtherCard extends Component {
  render() {
    return (
      <div className="otherCardmain">
        <div className="otherCardicons">
          <FontAwesomeIcon
            // className="iconother"
            icon={faFolderOpen}
            className="iconColor  iconother"
          />
          <div className="iconsOther">
            <a href={this.props.link} target="_blank" className="iconother">
              <FontAwesomeIcon icon={this.props.icona} className="iconColor" />
            </a>
            <a href={this.props.linkb} target="_blank" className="iconother">
              <FontAwesomeIcon icon={this.props.iconb} className="iconColor" />
            </a>
          </div>
        </div>
        <div className="otherContent">
          <h1>{this.props.otherTitle}</h1>
          <p>{this.props.otherP}</p>
          <div className="spansOther">
            <span>{this.props.FO}</span>
            <span>{this.props.SO}</span>
            <span>{this.props.TO}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default OtherCard;
