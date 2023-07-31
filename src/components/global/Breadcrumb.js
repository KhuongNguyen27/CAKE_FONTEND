import React from 'react';

function Breadcrumb(props) {
    const { breadcrumb_title, breadcrumb_list, name, backgroundImageUrl } = props

    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`,
        /* Add other CSS properties for the background, like size, position, etc. */
    }

    return (

        <>
            <div
                className="breadcrumb"
                data-bg-image="/assets/images/bg/breadcrumb-bg-4.jpg"
                style={styles}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                {/* <h1>{breadcrumb_title}</h1> */}
                                <h1 className="breadcrumb_title">{breadcrumb_title}</h1>
                                <ul className="breadcrumb_list">
                                    <li>
                                        <a href="index.html">{breadcrumb_list}</a>
                                    </li>
                                    <li>{name}</li>
                                </ul>
                            </div>
                    </div>  
                </div>
            </div>
        </div >
      

        </>
    );

}

Breadcrumb.defaultProps = {
    backgroundImageUrl: "/assets/images/bg/breadcrumb-bg-4.jpg",
}
export default Breadcrumb;