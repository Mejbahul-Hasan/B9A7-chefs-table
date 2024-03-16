import './Banner.css'

function Banner() {
    return (
        <div className='banner-img mx-20'>
        <br /><br /><br /> <br /> <br />   
            <h2 className='text-7xl text-white text-center mx-44'>Discover an exception cooking class tailoring for you!</h2>
        <br /><br /><br />
        <p className='text-white text-center mx-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, dolore eum repellat quaerat voluptatum dignissimos cumque id! Ipsam quasi ullam fugit veritatis vel ratione odio explicabo reprehenderit quia molestiae!</p>
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