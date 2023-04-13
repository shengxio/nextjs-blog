import {Chrono} from "react-chrono";

Chrono.defaultProps = {
    cardHeight: 100,
};

const title = "Blog Posts"
const posts = [
    {
        title:"2023 March 21st",
        cardTitle: 'The first post',
        cardSubtitle:"This is the first post of this blog.",
        cardDetailedText:"Not the first time I tried this, but this is the first one that I owned completely. Different people take different things for ownership. For me, a self constructed blog gives me better ownership incentive. Plus now I have a better understanding of how the web works. I am excited to see what I can do with this blog."
    }
]


function Posts() {
    return (
            <div style = {{width:"75%",minWidth:"800px"}}>
                <h2>{title}</h2>
                <Chrono items={posts} mode="VERTICAL"/>
            </div>
    );
}

export default Posts