const Heading = ({title, subHeading}) => {
    return (
        <div className="my-12">
            <h2 className="text-center md:text-4xl text-3xl font-extrabold">{title}</h2>

            <p className="text-center text-gray-500 font-semibold">{subHeading}</p>
        </div>
    );
};

export default Heading;