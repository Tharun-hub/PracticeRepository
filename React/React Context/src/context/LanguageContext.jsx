import React from "react";

const LanguageContext = React.createContext({
    activeLanguage: "EN",
    currentLanguge: ()=> {},
});

export default LanguageContext