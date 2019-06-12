import React from 'react'

const ThemeContext = React.createContext({
    theme: 'dark',
});


export default function Button() {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <button>
                    {theme}
                </button>
            )}
        </ThemeContext.Consumer>
    );
}