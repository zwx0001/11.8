require.config({
    paths: {
        'jquery': '../libs/jquery.min',
        'flexible': '../libs/flexible',
        'BScroll': '../libs/better-scroll',
        'handlebars': '../libs/handlebars-v4.0.12'
    }
})
require(['flexible', './index']);