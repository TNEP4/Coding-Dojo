import {Link, navigate} from '@reach/router';

const Word = (props) => {

    return(
        <div>
            {
                isNaN(props.id) ?
                <h1>The word is: {props.id}</h1>
                :
                <h1>The number is: {props.id}</h1>
            }
            
            <br />
        </div>
    )

}

export default Word;
