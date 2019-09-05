import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        // const text = this.context === 'english' ? 'Name' : 'Naam';

        // Our Context now contains an object with the language property,
        // and is not just a string as before
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        console.log('Field: ', text);
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;
