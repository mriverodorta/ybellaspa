'use client';
import React, { useEffect } from 'react'

function CherryWidget() {
    useEffect(() => {
        (function (w, d, s, o, f, js, fjs) {
            w[o] =
                w[o] ||
                function () {
                    (w[o].q = w[o].q || []).push(arguments);
                };
            (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
            js.id = o;
            js.src = f;
            js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
        })(window, document, "script", "_hw", ' https://files.withcherry.com/widgets/widget.js');
        _hw(
            "init",
            {
                debug: false,
                variables: {
                    slug: 'ybella',
                    name: 'Ybella LLC',
                },
                styles: {
                    primaryColor: '#97d5f2',
                    secondaryColor: '#97d5f210',
                    fontFamily: 'Libre Franklin',
                },
            },
            ["all", "hero", "howitworks",  "calculator", "testimony", "faq"]
        );
    }, [])
  return (
    <div className="cherry-widget">
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap"rel="stylesheet"/>
        <div id="all"></div>
    </div>
  )
}

export default CherryWidget