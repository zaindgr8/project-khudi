import React from 'react'
import Link from 'next/link'

const PageTitle = (props) => {
    return(
        <section className="page-title">
            <div className="page-title-container">
                <div className="page-title-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <h2>{props.pageTitle}</h2>
                                <ol className="breadcrumb">
                                    <li><Link href="/home">Home</Link></li>
                                    <li>{props.pagesub}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;