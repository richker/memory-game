import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faOtter } from '@fortawesome/free-solid-svg-icons'

class Card extends Component {
    render() {
      return (
          <div className="card" >
              <div className="card-body" >
                  {/* <FontAwesomeIcon color="#cccccc" style={{border:"1px solid #000000", borderRadius:"50%", backgroundColor:"#000000"}} size="4x" icon={faQuestionCircle} /> */}
                  {/* <FontAwesomeIcon color="#cccccc" size="4x" icon={faQuestionCircle} */}
                        {/* style={{border:"1px solid #000000", borderRadius:"50%", backgroundColor:"#000000"}} /> */}
                        <FontAwesomeIcon color="#9a57b4" size="6x" icon={faOtter} />
                        {/* style={{border:"1px solid #000000", borderRadius:"50%", backgroundColor:"#000000"}} /> */}
            </div>
          </div>

      );
    }
  }

  export default Card;