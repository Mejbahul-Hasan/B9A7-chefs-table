import './Banner.css'

function Banner() {
    return (
        <div className='banner-img mx-20'>
        <br /><br /><br /> <br /> <br />   
            <h2 className='text-7xl text-white text-center mx-44'>Nourish your body, <br />delight your senses!</h2>
        <br /><br /><br />
        <p className='text-white text-xl text-center mx-40'>Wholesome food is significant in our life as it directly affects our health. Fresh, hygienic, organic and nutritional food are essential aspects of our restaurant. Natural taste of homemade food are being prepared for you at a very reasonable price.</p>
        <br /><br /><br />
        <div className='flex gap-10 justify-center'>
            <div className=''>
                <button className="btn btn-accent rounded-3xl">Explore Now</button>
            </div>
            <div>
                <button className="btn glass rounded-3xl text-white">Our Feedback</button>
            </div>
        </div>
        <br /><br /><br /> <br /> <br />
    </div>
    );
}

export default Banner;