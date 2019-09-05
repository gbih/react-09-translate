/*
https://blog.logrocket.com/implicit-state-sharing-reacts-context-api-provide-inject-in-vue-679062a50f05/
React’s Context API and Vue’s provide/inject feature both make it possible to do this through implicit state sharing.
Vue provides a similar tool to React’s Context API, called provide/inject.

VUE:
https://github.com/vuejs/vue/issues/4029

*/

import React from 'react';
import UserCreate from './UserCreate';
// import LanguageContext from '../contexts/LanguageContext'; // this imports the Context Object
import { LanguageStore } from '../contexts/LanguageContext'; // import the specific component LanguageStore
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    // state = { language: 'english' };

    // onLanguageChange = language => {
    //     this.setState({ language: language });
    // };

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                        {/* Each separate use of LanguageContext.Provider create a new separate pipe of information! */}
                        {/* <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider> */}

                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
