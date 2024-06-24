import Background from '../images/bg.jpg'

const Home = () => {
    const handleClick = () => {
         console.log('no item found');
    }

    return (
        <div className="Home">
            <img src={Background} alt="/" className="img"/>
            <h1>"Tailored eateries, <br />exclusively for your pleasure."</h1>
            <div className="searchBox">
                <input type="text" placeholder="Search..." id="my-search" />
                <button onClick={handleClick} id="my-submit">Search</button>
            </div>
        </div>
    );
}
 
export default Home;