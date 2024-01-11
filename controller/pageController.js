const getIndexPage = (req, res) => {
    res.render("index")
}

const getAboutage = (req, res) => {
    res.render("about")
}

export { getIndexPage, getAboutage }