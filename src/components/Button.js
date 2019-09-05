import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    // step 1
    //static contextType = LanguageContext;

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* {value => (value === 'english' ? 'Submit' : 'Voorleggen')} */}
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        // step 2
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        // return <button className="ui button primary">{text}</button>;

        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
