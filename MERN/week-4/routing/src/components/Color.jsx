

const Color = (props) => {

    const {id, fontColor, backgroundColor} = props;

    return(
        <div>
            {
            (!id) 
                ? <p> Welcome!!! </p> 
                : (!isNaN(id))
                    ? <p> The number is: {id} </p>
                    : (fontColor || backgroundColor)
                        ? <p style = {{color: fontColor, backgroundColor: backgroundColor, height:"50px", paddingTop:"25px", border:"solid 1px black" }}> The word is: {id} </p>
                        : <p> The word is: {id} </p> 
            }
            
            <br />
        </div>
    )

}

export default Color;
