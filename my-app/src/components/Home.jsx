import Header from './Header'
export default function Home () {
    return(
        <div>
            <Header/>
            <h4 className="subtext">The easiest way to share your recommendations! Share what you love with the people you love.</h4>
            <div className="home-sample">
                <h2>Sign up & create your first list today!</h2>
                <div className="sample-list">
                    
                    <h6>FAVORITE MOVIES OF THE 1990S</h6>
                    <h6> @this_could_be_you</h6>
                    <div className="item">
                        <div className="item-title">1. Titanic</div>
                        <div className="item-release">Released: 1997</div>
                        <div className="item-runtime">Runtime: 3h 14m</div>
                        <div className="item-rating">Rated: PG-13</div>
                        <div className="item-genre">Drama/Romance</div>
                        <div className="item-personal">Watched? <br></br> Yes! <br></br><br></br>Made me feel:<br></br>😭</div>
                        {/* <div><img src = "</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}