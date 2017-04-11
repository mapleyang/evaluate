const language = {
  getLanguage: () => {
    const param = location.hash.slice(2, 4) === "en" ? "en" : "zh";
    return param
  }
}

export default language;