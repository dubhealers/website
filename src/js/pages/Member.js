export default function Member({children, image, name, right}) {
    return (
        <div>
            <h1>
                {name}
            </h1>
            <img src={image} width={100} className={(right ? "ms-2 float-end" : "me-2 float-start")}/>
            {children}
        </div>
    );
};
