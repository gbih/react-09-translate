import React from 'react';

/*
React 101: When we create a component and want to render it inside the JSX, we have to
use Capital naming, or else React will think it is a normal HTML element we are trying
to render out, like a div or span, etc. This is why we use Context as the name instead 
of context.
*/

/*
This encapsulates all the data around the currently selected language, 
it also implements the ability to change that data as well.

*/

const Context = React.createContext('english');

// all of our business logic
// We export as a named-export, so we import via `import { LanguageStore }`
export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    };

    render() {
        /*
        Create a new object via {{}}, take all of the values out of our current state object,
        and add it into the new object.
        Also, we take this callback function onLanguageChange and add it in there as well!
        */
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    onLanguageChange: this.onLanguageChange
                }}
            >
                {/* Wrap all other components, so they have access to this Context object */}
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
