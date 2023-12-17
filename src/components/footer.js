const Footer = () => {
    return (
        <div className="footer flex justify-center text-center py-8 text-gray-400">
            <span className="px-2">About</span> | <span className="px-2">Contact</span> | <span className="px-2">© {new Date().getFullYear()} CrazyGraphs</span>
        </div>
    );
};

export default Footer;
