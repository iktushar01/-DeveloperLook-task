import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image src="/logo.svg" alt="Logo" width={200} height={200} />
        </div>
    );
};

export default Logo;