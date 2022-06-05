

import {
  Textarea
} from "@vkontakte/vkui";
import persik from '../img/persik.png';
export default class CustomTextarea extends React.Component {    
  render() {
    return (            
      <div className="form-group custom_textarea">           
        <div className="FormLayout__row-top">Custom textarea is here</div>
          <Textarea                                
            disabled={this.props.disabled}                 
            name={persik}
            id={persik}             
            onChange={(e) => this.bindData(e, this.props.persik)}
            value={this.props.value}   
            className={this.props.className}               
          />                 
        </div>
      </div>
    ) 
  }
}
