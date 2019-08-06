import React from 'react';
import OutputScreen from './outputscreen';
import CalculatorTitle from './calculatorTitle';
import Button from './button'


class Calculator extends React.Component{
    constructor(){
        super();
        
        this.state = {
            question : '',
            answer: ''
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event){
        const value=event.target.value;
        switch(value)
        {
            case '=':
            {
                if(this.state.question!=='')
                {
                    var ans=''
                    try
                    {
                        ans=eval(this.state.question);
                    }
                    catch(er)
                    {
                        this.setState({answer:"math error"});
                    }
                    if(ans===undefined)
                    {
                        this.setState({answer:"math error"});
                    }
                    else
                        this.setState({answer:ans,question:''})
                    break;
                }
                break;
            }
            case 'Clear':{
                this.setState({question:'', answer:''});
                break;
            }
            case 'Backspace':{
                var str=this.state.question;
                str=str.substr(0,str.length-1);
                this.setState({question:str});
                break;
            }
            default:{
                this.setState({question:this.state.question+=value});
                break;
            }
        }
    }
    render()
    {
        return(
            <div className="calc">
                <CalculatorTitle title="Sidd's Calculator"/>
                <OutputScreen question={this.state.question} answer={this.state.answer}/>
                <div className="b-row">
                    <Button display="Clear" handleClick={this.handleClick} />
                    <Button display="Backspace" handleClick={this.handleClick}/>
                    <Button display="." handleClick={this.handleClick}/>
                    <Button display="/" handleClick={this.handleClick}/>
                </div>
                <div className="b-row">
                    <Button display="7" handleClick={this.handleClick} />
                    <Button display="8" handleClick={this.handleClick}/>
                    <Button display="9" handleClick={this.handleClick}/>
                    <Button display="*" handleClick={this.handleClick}/>
                </div>
                <div className="b-row">
                    <Button display="4" handleClick={this.handleClick}/>
                    <Button display="5" handleClick={this.handleClick}/>
                    <Button display="6" handleClick={this.handleClick}/>
                    <Button display="-" handleClick={this.handleClick}/>
                </div>
                <div className="b-row">
                    <Button display="1" handleClick={this.handleClick}/>
                    <Button display="2" handleClick={this.handleClick}/>
                    <Button display="3" handleClick={this.handleClick}/>
                    <Button display="+" handleClick={this.handleClick}/>
                </div>
                <div className="b-row">
                    <Button display="0" handleClick={this.handleClick}/>
                    <Button display="=" handleClick={this.handleClick}/>
                </div>
            </div>

        )
        
    }
}
export default Calculator;