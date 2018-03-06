import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => ([
    <h1 key={'post-title'} >{props.url.query.title}</h1>,
    <p key={'post-body'} >This is the blog text.</p>
])

Post.getInitialProps = async ( context ) => {
    console.log('context: ');
    console.log(context.query)
    const { id } = context.query;
    console.log('id: '+id);
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    console.log('res:');
    console.log(res);
    const show = await res.json();
    return show;
}

export default Post
